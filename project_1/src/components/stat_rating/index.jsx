import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'
export default function Starrating({ noofstars = 5 }) {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);
  
  function handleclick(getindex) {
    console.log(getindex);
    setrating(getindex);
  }

  function handlemove(getindex) {
    sethover(getindex);
    console.log(getindex);
  }

  function handleleave() {
    sethover(rating);


  }
  return (
    <div className="star_rating">
     { [...Array(noofstars)].map((_, index) =>  {
        return (
          <FaStar
          key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleclick(index)}
            onMouseMove={() => handlemove(index)}
            onMouseLeave={ handleleave}
            size={50}
          />);
     })}
    </div>
  );
}
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import './style.css';

// export default function Starrating({ noofstars = 5 }) {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   function handleClick(getIndex) {
//     setRating(getIndex);
//   }

//   function handleMove(getIndex) {
//     setHover(getIndex);
//   }

//   function handleLeave() {
//     setHover(rating);
//   }

//   return (
//     <div className="star_rating">
//       {[...Array(noofstars)].map((_, index) => {
//         const currentStar = index + 1; // Offset by 1 for 1-based rating
//         return (
//           <FaStar
//             key={index}
//             className={currentStar <= (hover || rating) ? "active" : "inactive"}
//             onClick={() => handleClick(currentStar)}
//             onMouseMove={() => handleMove(currentStar)}
//             onMouseLeave={handleLeave}
//             size={50}
//           />
//         );
//       })}
//     </div>
//   );
// }
