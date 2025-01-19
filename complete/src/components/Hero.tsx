import { Sprite } from "@pixi/react";
import heroAsset from "../assets/hero.png";

interface IHeroProps {
  x: number;
  y: number
}

const Hero = ({ x, y }: IHeroProps) => {

  return (
    <Sprite
      image={heroAsset}
      scale={2}
      x={x}
      y={y}
      anchor={[0, -0.08]}
    />

  );
};

export default Hero;