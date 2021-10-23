import React from "react";

function useWindowDimensions() {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.onresize = handleResize;
  }, []);

  return windowSize;
}

export default useWindowDimensions;
