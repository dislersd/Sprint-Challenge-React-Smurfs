import React, { Component } from 'react';
import styled from 'styled-components'
import Smurf from './Smurf';


const SmurfsContainer = styled.div `
border: 10px solid #4286f4;
width:  100%;
height: 100vh;
display: flex;
flex-wrap: wrap;
flex-direction: row;
`

class Smurfs extends Component {
  render() {
    return (
      <SmurfsContainer>
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
      </SmurfsContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
