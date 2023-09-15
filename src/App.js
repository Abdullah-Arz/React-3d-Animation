import Atropos from 'atropos/react';
import './App.css';
// import Atropos from "atropos/react/atropos-react.esm";
import "atropos/atropos.css";

function App() {

  const image = require('./assets/image/wallpaper.jpg')
  return (
    <div id="app">
      {/* Atropos */}
      <div className="container">
    <Atropos
      className="atropos-banner"
      highlight={false}
      onEnter={() => console.log("enter")}
    >
      <img
        className="atropos-banner-spacer"
        src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTQ3MDk4Njd8MA&ixlib=rb-4.0.3"
        alt=""
      />
      <img
        data-atropos-offset="-4.5"
        src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTQ3MDk4Njd8MA&ixlib=rb-4.0.3"
        alt=""
      />
      <img
        data-atropos-offset="-2.5"
        src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTQ3MDk4Njd8MA&ixlib=rb-4.0.3"
        alt=""
      />
      <img
        data-atropos-offset="0"
        src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTQ3MDk4Njd8MA&ixlib=rb-4.0.3"
        alt=""
      />
      <img
        data-atropos-offset="2"
        src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTQ3MDk4Njd8MA&ixlib=rb-4.0.3"
        alt=""
      />
      <img
        data-atropos-offset="4"
        src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTQ3MDk4Njd8MA&ixlib=rb-4.0.3"
        alt=""
      />
      <img
        data-atropos-offset="5"
        src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTQ3MDk4Njd8MA&ixlib=rb-4.0.3"
        alt=""
      />
    </Atropos>
  </div>
    </div>
  );
}

export default App;
