import React from 'react';
import { Row, Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

const BandsSearchBar = ({ handleSort, handleSearch }) => {
  return(
    <Row className="search-bar">
      <Col md={3}></Col>
      <Col md={3} >
        <FormGroup className="filter">
          <FormControl componentClass="select" onChange={handleSort}>
            <option value="style|desc">Style (A - Z)</option>
            <option value="style|asc">Style (Z - A)</option>
            <option value="bandName|asc">Name (A - Z)</option>
            <option value="bandName|desc">Name (Z - A)</option>
          </FormControl>
        </FormGroup>
      </Col>
      <Col md={3}>
        <FormGroup>
          <FormControl type="text" placeholder="Search" onChange={handleSearch}/>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default BandsSearchBar;
