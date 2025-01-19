import { Container, Sprite, Stage } from "@pixi/react";
import levelAsset from "../assets/map.png";
import { GAME_WIDTH, GAME_HEIGHT } from "../consts/game-world";
import useDimensions from "../hooks/useDimensions";
import Hero from "./Hero";

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
        <Hero x={32} y={0} />
        <Hero x={0} y={0} />
        <Hero x={32} y={32} />
        <Hero x={0} y={32} />
        <Hero x={0} y={64} />
        <Hero x={0} y={32 + 64} />
        <Hero x={32} y={32 + 64} />
        <Hero x={64} y={32 + 64} />
        <Hero x={64 + 32} y={32 + 64} />
        <Hero x={64} y={32 + 64} />
      </Container>
    </Stage>
  );
};

export default Experience;
