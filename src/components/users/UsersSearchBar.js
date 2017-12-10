import React from 'react';
import { Row, Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

const UsersSearchBar = ({ handleSort, handleSearch }) => {
  return(
    <Row>
      <Col md={6}>
        <FormGroup>
          <FormControl componentClass="select" onChange={handleSort}>
            <option value="style|desc">Style (A - Z)</option>
            <option value="style|asc">Style (Z - A)</option>
            {/* <option value="location|asc">Location (A - Z)</option>
            <option value="location|desc">Location (Z - A)</option> */}
            <option value="username|asc">Name (A - Z)</option>
            <option value="username|desc">Name (Z - A)</option>
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

export default UsersSearchBar;
