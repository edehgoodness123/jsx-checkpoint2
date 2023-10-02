import React from "react";
import Description from "./components/Description";
import Name from "./components/Name.js";
import Price from "./components/Price.js";
import Image from "./components/Image.js";
import Card from 'react-bootstrap/Card';


const App = () => {  
  return (
    <>
      <div>
        <h2>Hello JSX</h2>
        <Card>
{}
      </Card>
      <br />
      <Card>
        <Card.Body>
          <h1>
            "Hello, there!"
          </h1>
        </Card.Body>
        <Card.Img variant="bottom" src="barcelona.png/100px180" />
      </Card>
        <Description></Description>
        <Name></Name>
        <Price></Price>
        <Image></Image>
        
      </div>
      
    </>
  );
};

export default App;
