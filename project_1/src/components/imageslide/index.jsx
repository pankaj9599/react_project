// import { useEffect, useState } from "react"
// import {  BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";
// import './style.css'
// export default function Slidingimage({url,limit=5,page=1}){
//     const [image,setimage]=useState([]);
//     const [currentslide,setcurrentslide]=useState(0);
//      const [errormsg,seterrormsg]=useState(null);
//      const [loading,setloading]=useState(false);

//     async function fetchimages(geturl) {
//         try{
//             setloading(true);
//             const response=await fetch(`${geturl}?page=${page} &limit=${limit}`);
//             const data=await response.json();

//             if(data){
//                 setloading(false);
//                 setimage(data);
                
//             }
//         }
//         catch(e){
// setloading(false);
// seterrormsg(e.message);
//         }
//     }


//     const handleprevious=()=>{
//         setcurrentslide(currentslide===0?image.length-1:currentslide-1)
//     }
//     const handlenext=()=>{
//         setcurrentslide(currentslide===image.length-1?0:currentslide+1)

//     }
//     useEffect(()=>{
//         if(url!='')fetchimages(url)
//         },[url]);

//         console.log(image)

//     if(loading){
//         return <div>loading the images</div>
//     }
// if(errormsg!==null){
//     return <div>found error</div>
// }


// return  <div className="container">
//     <BsArrowLeftCircleFill  onClick={handleprevious}
//     className="leftarrow"/>{
//    image&&image.length?
//    image.map((imageitem,index)=>(
//     <img
//     key={imageitem.id}
//     alt={imageitem.download_url}
//     src={imageitem.download_url}
//     className={currentslide===index?"current-image":"current-image hide-current-image"}

//     />
//    ))
//    :null }
//    <BsArrowRightCircleFill onClick={handlenext}
//    className="rightarrow"/>

//    <span className="circle-indicator">
//     {
//         image&&image.length?
//         image.map((_,index)=>(
//             <button  key={index}className={currentslide===index?"current_indicator":"current_indicator hide-current_indicator"}
//             onClick={()=>setcurrentslide(index)}></button>
//         ))
//         :null
//     }
//    </span>
//     </div>


   
// };
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function Slidingimage({ url, limit = 5, page = 1 }) {
  const [image, setimage] = useState([]);
  const [currentslide, setcurrentslide] = useState(0);
  const [errormsg, seterrormsg] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchimages(geturl) {
    try {
      setloading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setloading(false);
        setimage(data);
      }
    } catch (e) {
      setloading(false);
      seterrormsg(e.message);
    }
  }

  const handleprevious = () => {
    setcurrentslide(currentslide === 0 ? image.length - 1 : currentslide - 1);
  };

  const handlenext = () => {
    setcurrentslide(currentslide === image.length - 1 ? 0 : currentslide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchimages(url);
  }, [url]);

  console.log(image);

  if (loading) {
    return <div>Loading the images...</div>;
  }

  if (errormsg !== null) {
    return <div>Error: {errormsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handleprevious} className="leftarrow" />
      {image && image.length ? (
        image.map((imageitem, index) => (
          <img
            key={imageitem.id}
            alt={`Slide ${index}`}
            src={imageitem.download_url}
            className={
              currentslide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))
      ) : null}
      <BsArrowRightCircleFill onClick={handlenext} className="rightarrow" />

      <span className="circle-indicator">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentslide === index
                    ? "current_indicator"
                    : "current_indicator hide-current_indicator"
                }
                onClick={() => setcurrentslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
