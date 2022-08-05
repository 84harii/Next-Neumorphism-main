import { useContext, useState, useEffect } from "react";
import { FormContext } from "../../context/FormContext";
import style from "./Neumorphism.module.css";

export const Neumorphism = () => {
  const { state, modifyPosition } = useContext(FormContext);
  const [position, setPosition] = useState({
    top: "",
    right: "-",
    left: "",
    bottom: "-",
  });
  const { background, size, radius, blur, distance, colors } = state;
  const { top, left, right, bottom } = position;

  useEffect(() => {
    modifyPosition(position);
  }, [position]);

  const onclick = (direction: string) => {
    switch (direction) {
      case "top":
        setPosition((position) => ({
          ...position,
          top: "",
          right: "-",
          left: "",
          bottom: "-",
        }));

        break;
      case "bottom":
        setPosition((position) => ({
          ...position,
          top: "",
          right: "",
          left: "-",
          bottom: "-",
        }));
        break;
      case "right":
        setPosition((position) => ({
          ...position,
          top: "-",
          right: "-",
          left: "",
          bottom: "",
        }));
        break;
      case "left":
        setPosition((position) => ({
          ...position,
          top: "-",
          right: "",
          left: "-",
          bottom: "",
        }));
        break;

      default:
        break;
    }
  };

  let boxShadow = { boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%", //400media
        height: "500px", //400media
        borderRadius: "100px",
        background,
      }}
      className={style.boxshadow}
    >
      <button
        className={style.btn}
        style={{
          top: 0,
          left: 0,
        }}
        onClick={() => onclick("top")}
      ></button>
      <button
        className={style.btn}
        style={{ top: 0, right: 0 }}
        onClick={() => onclick("right")}
      ></button>
      <button
        className={style.btn}
        style={{ bottom: 0, right: 0 }}
        onClick={() => onclick("left")}
      ></button>
      <button
        className={style.btn}
        style={{ bottom: 0, left: 0 }}
        onClick={() => onclick("bottom")}
      ></button>
      <div
        style={{
          width: size,
          height: size,
          background,
          borderRadius: radius,
          boxShadow: `${bottom}${distance}px ${right}${distance}px ${blur}px ${colors.first}, ${top}${distance}px ${left}${distance}px ${blur}px  ${colors.second}`,
        }}
      ></div>
    </div>
  );
};
