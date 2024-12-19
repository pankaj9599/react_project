
// hexcolor #122345
// rgb(23,45,64)

import { useState } from "react";



export default function Randomcolor(){
    const [type,settype]=useState('hex')
    const [color,setcolor]=useState('#343434')

function handlecreatehexcolor(){
    const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexcolor="#"
for(let i=0;i<6;i++){
    // arr[Math.floor(Math.random() * arr.length)];
    hexcolor+=hex[Math.floor(Math.random() * hex.length)];

}
console.log(hexcolor);
setcolor(hexcolor);
}

function handlecreatergbcolor(){
    const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(`rgb(${r}, ${g}, ${b})`)
  setcolor(`rgb(${r}, ${g}, ${b})`);
}
    return <div
    style={{width:"100vh", height:"60vh",backgroundColor:color,}}>
        <button style={{margin:"10px"}}onClick={()=>settype('hex')}>generate  hexcolor</button>
        <button style={{margin:"10px"}} onClick={()=>settype('rgb')}>generate  RGBcolor</button>
        <button style={{margin:"10px"}}onClick={
            type==='hex'?
             handlecreatehexcolor
            :handlecreatergbcolor}>generate random color</button>
           <h1 style={{color:"white", marginTop:"200px"}}>{color}</h1>
    </div>
}

