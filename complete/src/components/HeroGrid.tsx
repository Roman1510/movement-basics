import { useState } from "react";
import { Sprite, useTick } from "@pixi/react";
import heroAsset from "../assets/hero.png";
import { useControls } from "../hooks/useControls";

interface IHeroProps {
  x: number;
  y: number;
}


const HeroGrid = ({ x: initialX, y: initialY }: IHeroProps) => {
  const { getControlsDirection } = useControls();
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  useTick(() => {
    const { currentKey } = getControlsDirection();

    setPosition((prev) => {
      let { x, y } = prev;

      switch (currentKey) {
        case "UP":
          y -= 1;
          break;
        case "DOWN":
          y += 1;
          break;
        case "LEFT":
          x -= 1;
          break;
        case "RIGHT":
          x += 1;
          break;
        default:
          break;
      }

      return { x, y };
    });
  });

  return (
    <Sprite
      image={heroAsset}
      x={position.x}
      y={position.y}
      scale={0.5}
    />
  );
};

export default HeroGrid;
