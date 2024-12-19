import { useEffect, useState } from "react";




export default function Dark_mode(){

 const [color,setcolor]=useState('light');
//  const []

const handleclick = () => {
    setcolor(color === "light" ? "dark" : "light");
  };
  useEffect(()=>{
    document.body.style.backgroundColor=color==='light'?"white":"black";
    document.body.style.color=color==='light'?"black":"white";
  },[color])

// if(color==='light'){
//    document.body.style.backgroundColor="white";
//    document.body.style.color="black"
// }
// else{
//     document.body.style.backgroundColor="black"
//     document.body.style.color="white"
// }
 return <div className="dark_mode">
    <div className="container">
<h1>hello world</h1>
<button onClick={handleclick}>
 switch {color==='light'?'dark':'light'}  mode </button>
        
    </div>
 </div>


}
// {color===dark?
// dark:light}