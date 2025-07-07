 import React from 'react'
 import ReactDOM from 'react-dom/client'

 const parent = React.createElement("div" , {id:"parent"},
    [React.createElement("div" , {id:"child1"},
        [React.createElement("h1",{id:"heading"},"Hi World From React , Am h1 tag"),
        React.createElement("h2",{id:"heading"},"Hi World From React , Am h2 tag")]
    ),
    React.createElement("div" , {id:"child2"},
        [React.createElement("h1",{id:"heading"},"Hi World From React , Am h1 tag"),
        React.createElement("h2",{id:"heading"},"Hi World From React , Am h2 tag")]
    )]
 );

 const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(parent)