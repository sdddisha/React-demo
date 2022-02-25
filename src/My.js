//function component
import React from "react";
function My() {

  let data="How are you?" 
    return (
      <div>
    <div className="App">
    {/* prints data in html element. JSX allows us to write html with Javascript */ }
    <h2>Hello all! </h2> 
     <h2>Hello all! {data}</h2>
    </div>
    <div className="App"><h3>Hi!</h3></div>
    </div>
  );
}

export default My;
