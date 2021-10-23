import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, multipliedCounterSelector } from "../../recoil/atoms/counterAtoms";

// import { useSelector, useDispatch } from "react-redux";
// import useWindowDimensions from "../../hooks/useWindowDimensions";

function Cart(props) {
  //   const counter = useSelector((state) => state.cr.counter);
  //   const dispatch = useDispatch();

  // const windowSize = useWindowDimensions();

  // React.useEffect(() => {
  //     console.log("size changed! ", {windowSize})
  // }, [windowSize]);

  const [counter, setCounter] = useRecoilState(counterState);
  const multipliedCounter = useRecoilValue(multipliedCounterSelector);

  return (
    <div>
      <h1>Counter: {counter} x 10 = {multipliedCounter}</h1>
      <button
        onClick={() => {
          //   dispatch({ type: "INCREMENT_COUNTER" });
          setCounter(counter + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default Cart;
