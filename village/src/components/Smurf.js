import React from "react";
import styled from 'styled-components';

const DeleteButton = styled.button`
  border: 1px solid black;
  border-radius: 50%
  height:25px;
  width: 25px;
  cursor: pointer;
  font-size: 12px;
  background-color: #ff6c5b;
  padding: 1px;

  &:hover {
    background-color: red;
  }
`;
const UpdateButton = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  height:25px;
  cursor: pointer;
  font-size: 12px;
  background-color: springgreen;
  padding: 1px;
  margin-left: 10px;

  &:hover {
    background-color: green;
  }
`;

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <DeleteButton onClick={e => props.delete(e, props.id)}>X</DeleteButton>
      <UpdateButton onClick={e => props.update(e, props)}>Update</UpdateButton>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
