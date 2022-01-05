import React from 'react'
import Rate from '../Movies/rating' ;
import './filter.css';
import {InputGroup,FormControl} from 'react-bootstrap' ;
function filter() {
    return (
        <div className="filter">
             <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
    <FormControl
      placeholder="Search Movie"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
           <Rate/> 
        </div>
    )
}

export default filter
