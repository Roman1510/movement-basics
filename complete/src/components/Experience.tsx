import { Container, Sprite, Stage } from "@pixi/react";
import levelAsset from "../assets/map.png";
import { GAME_WIDTH, GAME_HEIGHT } from "../consts/game-world";
import useDimensions from "../hooks/useDimensions";

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
      </Container>
    </Stage>
  );
};

export default Experience;
