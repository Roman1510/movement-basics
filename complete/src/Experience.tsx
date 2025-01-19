import { Stage } from "@pixi/react";
import { useCallback, useEffect, useState } from "react";


const calculateCanvasSize = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  return { width, height }
}

const Experience = () => {
  const [canvasSize, setCanvasSize] = useState(calculateCanvasSize())

  const updateCanvasSize = useCallback(() => {
    setCanvasSize(calculateCanvasSize())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateCanvasSize)
    return () => window.removeEventListener('resize', updateCanvasSize)
  }, [updateCanvasSize])


  return (
    <Stage width={canvasSize.width} height={canvasSize.height} ></Stage>
  );
};

export default Experience;