import React from 'react';

function Car(props){
    return <h2>I am {props.brand}</h2>
}
function Brand() {
    const carName = "Ford";
    return (
      <div>
         
          <Car brand={ carName } />
      </div>
    );
  }
 export default Brand;