// <--------useeffect start--->
import React, { useState } from 'react'
import { useEffect } from 'react'
function App() {
  const[count,setCount]=useState(0)
  useEffect(()=>{
    console.log("useeffect") })
  return (
    <div>
      <h1>useeffect in react {count}</h1>
      <button onClick={()=>setCount(count+1)}>update counter</button>
    </div>
  )
}

export default App
// <--------useeffect end--->







// <-------- useState------->start
// import React, { useState } from 'react';
// function App() {
//   const [int, setfun] = useState('useSate(nisha)');
//   const [num,setnumf]=useState(0)
//   const [imgsrc,setimg]=useState('/home/nisha/Desktop/Meraki_Bootcap/react/react-new/item-2.jpeg')
//   function changeSate() {
//     setfun('changeSate(kajal)');
//     setnumf(num+1)
//     setimg('/home/nisha/Desktop/Meraki_Bootcap/react/react-new/item-3.jpeg')
//   }

//   return (
//     <>
//     <div>
//       <h1>{int}</h1>
//       <h2>{num}</h2>
//       <img src={imgsrc} alt='loding...'></img>
//       <button onClick={changeSate}>click me</button>
//     </div>

    
//     </>
//   );
// }

// export default App;

  // <-------- useState------->end code

// Hook ----use state hook --value change
// version-16.8
//--->hook is aspecial function that lets you "hook into" react features"
// when will we change state and daynamic content that time use hook 