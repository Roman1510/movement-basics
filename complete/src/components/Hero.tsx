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
      x={x}
      y={y}
      scale={0.5}
    />

  );
};

export default Hero;