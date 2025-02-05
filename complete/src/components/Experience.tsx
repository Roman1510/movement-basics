import { useRef } from "react";
import { Container, Sprite, Stage } from "@pixi/react";
import levelAsset from "../assets/map.png";
import { GAME_WIDTH, GAME_HEIGHT } from "../consts/game-world";
import useDimensions from "../hooks/useDimensions";
import { IPosition } from "../types/common";
import HeroMouse from "./HeroClick";

const Experience = () => {
  const { width, height, scale } = useDimensions();
  const onClickMove = useRef<((target: IPosition) => void) | null>(null);

  const handleStageClick = (event: React.PointerEvent) => {
    onClickMove.current?.({
      x: event.nativeEvent.offsetX / scale,
      y: event.nativeEvent.offsetY / scale,
    });
  };

  return (
    <Stage width={width} height={height} onPointerDown={handleStageClick}>
      <Container scale={scale}>
        <Sprite image={levelAsset} width={GAME_WIDTH} height={GAME_HEIGHT} />
        <HeroMouse onClickMove={onClickMove} />
      </Container>
    </Stage>
  );
};

export default Experience;
