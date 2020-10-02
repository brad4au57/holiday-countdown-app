import React from 'react';
import Halloween from "./components/Halloween"

import './App.css';
import './styles/App.scss'
import holidayData from "./data/holidayData"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {holidayData.map((data) => (
            <Halloween
              key={data.id}
              holidayName={data.holidayName}
              holidayDate={data.holidayDate}
              holidayImg={data.backgroundImg}
              holidayBigFont ={data.holidayBigFont}
              holidaySmallFont={data.holidaySmallFont}
            />   
        ))

        }    
      </header>
    </div>
  );
}

export default App;
