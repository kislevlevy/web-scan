// imports
import { useAppContext } from "@/context/AppContext";
import ShapeBlur from "../background/ShapeBlur";

// component
export default function Background() {
  // retrive context state
  const { result } = useAppContext();

  // render square animation only when there is no result
  return (
    <div className="fixed w-[100vw] h-[100vh] overflow-hidden bg-black -z-10 brightness-40">
      {!result && (
        <ShapeBlur
          variation={0}
          shapeSize={1}
          roundness={0.5}
          borderSize={0.05}
          circleSize={0.01}
          circleEdge={1}
        />
      )}
    </div>
  );
}
