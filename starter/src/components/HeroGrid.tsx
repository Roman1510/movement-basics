
import { Sprite, } from "@pixi/react";
import heroAsset from "../assets/hero.png";

const HeroGrid = () => {


  return (
    <Sprite
      image={heroAsset}
      x={0}
      y={0}
      scale={0.5}
    />
  );
};

export default HeroGrid;
