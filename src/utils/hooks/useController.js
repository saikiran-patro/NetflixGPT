import {useRef} from 'react'

const useController = () => {

    const imageContainerRef = useRef(null);

    // Scroll left
    const scrollLeft = () => {
      if (imageContainerRef.current) {
        imageContainerRef.current.scrollBy({
          left: -600, // adjust scroll distance
          behavior: 'smooth', // smooth scroll
        });
      }
    };
  
    // Scroll right
    const scrollRight = () => {
      if (imageContainerRef.current) {
        imageContainerRef.current.scrollBy({
          left: 600, // adjust scroll distance
          behavior: 'smooth', // smooth scroll
        });
    }
  }
  return [imageContainerRef,scrollLeft,scrollRight]
}

export default useController