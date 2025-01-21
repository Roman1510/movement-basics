import { Container, Sprite, Stage } from "@pixi/react";
import levelAsset from "../assets/map.png";
import { GAME_WIDTH, GAME_HEIGHT } from "../consts/game-world";
import useDimensions from "../hooks/useDimensions";

import HeroFree from "./HeroFree";

const Experience = () => {
  const { width, height, scale } = useDimensions();

  return (
    <Stage width={width} height={height}>
      <Container scale={scale}>
        <Sprite
          image={levelAsset}
          width={GAME_WIDTH}
          height={GAME_HEIGHT}
        />
        <HeroFree x={0} y={0} />
      </Container>
    </Stage>
  );
};

export default Experience;
