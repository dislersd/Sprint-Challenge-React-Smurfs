import React from "react";
import styled from "styled-components";
import Smurf from "./Smurf";

const DeleteButton = styled.button`
  border: 1px solid black;
  border-radius: 50%
  height:30px;
  width: 30px;
  cursor: pointer;
  font-size: 16px;
  background-color: #ff6c5b;
  padding: 2px;
  position: relative;
  top: 140px;
  right: 102px;

  &:hover {
    background-color: red;
  }
`;

const SmurfsContainer = styled.div`
  border: 10px solid #4286f4;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Smurfs = props => {
  return (
    <SmurfsContainer>
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {props.smurfs.map(smurf => {
            return (
              <React.Fragment key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  
                />
                <DeleteButton onClick={e => props.delete(e, smurf.id)}>
                  X
                </DeleteButton>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </SmurfsContainer>
  );
};

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
