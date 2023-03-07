import {useEffect, useRef} from "react";

const useRenderCounter = (cb) => {
  const counter = useRef(1);

  useEffect(() => {
    counter.current += 1;
    cb();
  });

  return counter.current;
}

export default useRenderCounter;
