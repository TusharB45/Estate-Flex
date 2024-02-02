'use client';

import { BeatLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
      className="
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      "
    >
      <BeatLoader
        size={15}
        color="#3498db"  // You can choose your preferred color
      />

    </div>
   );
}
 
export default Loader;
