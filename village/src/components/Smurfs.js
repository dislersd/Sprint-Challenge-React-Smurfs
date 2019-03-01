import React from "react";
import styled from "styled-components";
import Smurf from "./Smurf";

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
                  delete={props.delete}
                  update={props.update}
                />
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
