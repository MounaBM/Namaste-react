 import React from 'react'
 import ReactDOM from 'react-dom/client'


 const elem = <span>HI</span>

//React Element
 const heading =  (
    <h1>{elem} , Namaste React from React Element</h1>
 )

 const number = 1000;

 //React Function
 const HeadingComponent = () =>(
    <div className='container'>
    {heading}{number}
    <h1>Namaste React From React Function</h1>
    </div>
 )

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<HeadingComponent/>)