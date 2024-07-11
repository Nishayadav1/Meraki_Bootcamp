import React, { useState } from 'react';

function App() {
  const [int, setfun] = useState('useSate(nisha)');
  const [num,setnumf]=useState(0)
  const [imgsrc,setimg]=useState('/home/nisha/Desktop/Meraki_Bootcap/react/react-new/item-2.jpeg')


  function changeSate() {
    setfun('changeSate(kajal)');
    setnumf(num+1)
    setimg('/home/nisha/Desktop/Meraki_Bootcap/react/react-new/item-3.jpeg')
  }

  return (
    <div>
      <h1>{int}</h1>
      <h2>{num}</h2>
      <img src={imgsrc} alt='loding...'></img>
      <button onClick={changeSate}>click me</button> {/* Pass function reference */}
    </div>
  );
}

export default App;

