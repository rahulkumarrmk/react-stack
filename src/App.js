import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const student = ["one","two","three","four"];


class App{



 onTest(){


ReactDOM.render(<p>Hello</p>, document.getElementById('test'));
 }
  

  reneder(){
    return(

      <div>
     <div id='test'>
     </div>
     <h1> click</h1>
      </div>
    );
  };
}

export default App;
