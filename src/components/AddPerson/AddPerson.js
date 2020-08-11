import React from 'react';

import './AddPerson.css';
import { ADD_PERSON } from '../../store/action/type';

const AddPerson = ({ personAdded }) => {
  return (
    <>
      <h2>1. Turn this app into one which does NOT use local state (in component) but instead uses Redux</h2>
      <button onClick={()=>personAdded('ADD_PERSON')}><span>Add Person </span></button>
    </>
  )
}

export default AddPerson;