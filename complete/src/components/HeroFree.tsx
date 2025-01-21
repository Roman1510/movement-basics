import { useState } from "react";
import { Sprite, useTick } from "@pixi/react";
import heroAsset from "../assets/hero.png";
import { useControls } from "../hooks/useControls";

interface IHeroProps {
  x: number;
  y: number;
}


const HeroFree = ({ x: initialX, y: initialY }: IHeroProps) => {
  const { getControlsDirection } = useControls();
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  useTick(() => {
    const { pressedKeys } = getControlsDirection();

    setPosition((prev) => {
      const { x, y } = prev;

      let dx = 0;
      let dy = 0;

      if (pressedKeys.includes("UP")) dy -= 1;
      if (pressedKeys.includes("DOWN")) dy += 1;
      if (pressedKeys.includes("LEFT")) dx -= 1;
      if (pressedKeys.includes("RIGHT")) dx += 1;

      const magnitude = Math.sqrt(dx * dx + dy * dy);

      if (magnitude > 0) {
        dx = dx / magnitude;
        dy = dy / magnitude;
      }

      return { x: x + dx, y: y + dy };
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

export default HeroFree;
