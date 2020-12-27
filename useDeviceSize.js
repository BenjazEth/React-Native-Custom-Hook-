import { useState, useLayoutEffect ,useEffect } from 'react';


function getObject(node){
  const rect  = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: "x" in rect ? rect.x : rect.top,
    left: "y" in rect ? rect.y : rect.left,
    x: "x" in rect ? rect.x : rect.left,
    y: "y" in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom
  };
};

export default function useDeviceSize(refElement) {
  const checkSize = true;
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  
   useEffect(() =>{
     const node = refElement;
     setNode(node);
     setDimensions(dimensions);
   },[node,dimensions]);

  useLayoutEffect(() => {
    if(node) {
      const compute = () => {
        window.requestAnimationFrame(() =>{
          setDimensions(getObject(node))
        });
      }

      compute();

      if(checkSize) {
        window.addEventListener("resize", compute);
        window.addEventListener("scroll",compute);

        return () => {
          window.removeEventListener("resize", compute);
          window.removeEventListener("resize",compute)
        };
      }
    }
  },[node]);

  if (window.screen.orientation.type === "portrait-primary") {
    
    if (window.screen.width <= 414  &&  (window.screen.height < 896 || window.screen.height > 640 )) {
      return {
        size :"small", 
        Oreintation: "portrait-primary"
      };
    }
   
    if ((window.screen.width > 414 ||window.screen.width < 1000 ) &&  (window.screen.height > 640 || window.screen.height < 800) ) {
      return {
        size:"large", 
        Oreintation : "portrait-primary"
      };
    }else{
      return {
        size: "very-large", 
        Oreintation : "portrait-primary"
      };
    }      
  } 

  if ((window.screen.width > 414 ||window.screen.width <= 896)  &&  (window.screen.height <= 414 )) {
      return {
        size : "small", 
        Oreintation :"landscape-primary"
      };
  }
  if ((window.screen.width > 896 ||window.screen.width < 1280  ) &&  (window.screen.height > 414 || window.screen.height < 896 ) ) {
      return {
        size : "large",
        Oreintation : "landscape-primary"
      };
    }
    return {
      size : "very large",
      Oreintation :  "landscape-primary"
    };
}