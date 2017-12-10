import React from 'react';
import { Row, Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

const BandsSearchBar = ({ handleSort, handleSearch }) => {
  return(
    <Row>
      <Col md={6}>
        <FormGroup>
          <FormControl componentClass="select" onChange={handleSort}>
            <option value="style|desc">Style (A - Z)</option>
            <option value="style|asc">Style (Z - A)</option>
            {/* <option value="location|asc">Location (A - Z)</option>
            <option value="location|desc">Location (Z - A)</option> */}
            <option value="bandName|asc">Name (A - Z)</option>
            <option value="bandName|desc">Name (Z - A)</option>
          </FormControl>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <FormControl type="text" placeholder="Search" onChange={handleSearch}/>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default BandsSearchBar;
