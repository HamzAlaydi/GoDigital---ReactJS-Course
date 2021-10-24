import React from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { useSpring, config as springConfig, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// import {
//   counterState,
//   multipliedCounterSelector,
// } from "../../recoil/atoms/counterAtoms";

import { renderGameElement } from "../../components/GameCards/utility";

function Cart(props) {
  const gamesInCart = useSelector((state) => state.gr.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (data) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: data.id });
  };

  // const [flipBlinkingAnim, setFlipBlinkingAnim] = React.useState(false);
  // const [counter, setCounter] = useRecoilState(counterState);
  // const multipliedCounter = useRecoilValue(multipliedCounterSelector);

  // const blinkingAnimStyleProps = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   reset: true,
  //   reverse: flipBlinkingAnim,
  //   delay: 1000,
  //   config: springConfig.molasses,
  //   onRest: () => setFlipBlinkingAnim(true),
  // });

  // const { number: multipliedCounterAnimated } = useSpring({
  //   from: { number: 0 },
  //   number: multipliedCounter,
  //   delay: 200,
  //   config: springConfig.molasses,
  // });

  const cartGamesDataJSX = gamesInCart.map((game) =>
    renderGameElement(game, true, handleRemoveFromCart)
  );

  return (
    <div>
      {/* <Card sx={{ width: 480 }}>
        <CardContent>
          <animated.h1 style={blinkingAnimStyleProps}>
            Hello GoDigital Students
          </animated.h1>
          <Typography variant="h4" style={{ backgroundColor: "red" }}>
            Counter: {counter} x 10 ={" "}
            <animated.span>
              {multipliedCounterAnimated.to((n) => n.toFixed(1))}
            </animated.span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Click me!
          </Button>
        </CardActions>
      </Card> */}
      <Card sx={{ width: 480 }}>
        <CardContent>{cartGamesDataJSX}</CardContent>
      </Card>
    </div>
  );
}

export default Cart;
