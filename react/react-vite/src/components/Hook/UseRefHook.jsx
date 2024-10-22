import { useState, useRef, useEffect } from "react";

function UseRefHook() {
    const [Data, setData] = useState(0);
    // const [data, setData] = useState(0);
    
    // useEffect(() => {
    //     setData(pre => pre + 1);
    // },[count]); // Only run the effect when 'count' changes

    const count=useRef(0)
    // console.log(count)
    useEffect(()=>{
        count.current=count.current+1
    })
    

    return (
        <div>
            <button onClick={() => setData(pre => pre - 1)}> -1 </button>
            <h1>{Data}</h1>
            <button onClick={() => setData(pre => pre + 1)}> +1 </button>
            <h2>Render count data: {count.current}</h2>
        </div>
    );
}

export default UseRefHook;



// second example-------------its ude for accesing DOM element---------------------

// function UseRefHook() {
//     const inputEle=useRef();
//     const btnClicked=()=>{
//         console.log(inputEle.current);
//         inputEle.current.style.background='skyblue'
//     }
//   return (
//     <div>
//       <input type="text" ref={inputEle}/>
//       <button onClick={btnClicked}>cleck here</button>
//     </div>
//   )
// }

// export default UseRefHook
