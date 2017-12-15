/* global google */

import React from 'react';
import mapStyles from '../config/mapStyles';



class GoogleMapBands extends React.Component {

 bounds = new google.maps.LatLngBounds();

 componentDidMount() {
   this.map = new google.maps.Map(this.mapCanvas, {
     center: this.props.center || { lat: 51.515419, lng: -0.141099 },
     zoom: 12,
     clickableIcons: false,
     // disableDefaultUI: true,
     styles: mapStyles
   });

   this.bandMarker = new google.maps.Marker({ map: this.map });
 }

 componentWillUpdate(nextProps) {
   this.infoWindow = new google.maps.InfoWindow();

   if(nextProps.bandMarker && Object.keys(nextProps.bandMarker).length !== 0) {
     this.bandMarker.setPosition(nextProps.bandMarker);
     this.map.setCenter(nextProps.bandMarker);
     this.map.setZoom(14);

     this.bounds.extend(nextProps.bandMarker);
     this.filterMarkers();
   }

   if(nextProps.bands.length !== this.props.bands.length) {
     this.markers = nextProps.bands.map(band => {
       const marker = new google.maps.Marker({
         map: this.map,
         position: band.location,
         animation: google.maps.Animation.DROP
       });

       this.bounds.extend(band.location);

       marker.addListener('click', () => {
         this.infoWindow.setContent(`
           <a href=${`/bands/${band.id}`} />
           <h2>${band.bandname}</h2>
           `);
         this.infoWindow.open(this.map, marker);
       });

       return marker;
     });
   }

   this.map.fitBounds(this.bounds);
 }

    filterMarkers = () => {
      if(this.bandCircle) this.bandCircle.setMap(null);

      this.bandCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: this.map,
        center: this.bandMarker.getPosition(),
        radius: 14400
      });

      this.bounds = this.bandCircle.getBounds();
      this.map.fitBounds(this.bounds);

      this.markers.forEach(marker => {
        marker.setMap(this.map);

        if(!this.bounds.contains(marker.getPosition())) {
          marker.setMap(null);
        }
      });
    }

    componentWillUnmount() {
      this.markers && this.markers.forEach(marker => marker.setMap(null));
      this.markers = [];
      this.map = null;
    }


    render() {
      return (
        <div className="google-map" ref={element => this.mapCanvas = element}></div>
      );
    }
}

export default GoogleMapBands;
