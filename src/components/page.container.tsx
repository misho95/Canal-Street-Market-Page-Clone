import clsx from "clsx";
import { ReactNode, useContext } from "react";
import Logo from "./logo";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimateContext } from "../App";

type PropsType = {
  children: ReactNode;
  value: string;
  symbol?: string;
};

const PageContainer = ({ children, value, symbol }: PropsType) => {
  const location = useLocation();
  const activeLink = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const { animate } = useContext(AnimateContext);

  const handleNavigation = () => {
    navigate(`/${value}`);
  };

  return (
    <div
      onClick={handleNavigation}
      className={clsx(`w-[60px] duration-300 relative`, {
        "w-[calc(100%-60px*3)] h-full": activeLink === value,
        "cursor-pointer": activeLink !== value,
        "animate-[slideBar_0.8s_linear]":
          activeLink !== value && value === "" && !animate,
        "animate-[slideBar_0.6s_linear]":
          activeLink !== value && value === "food" && !animate,
        "animate-[slideBar_0.4s_linear]":
          activeLink !== value && value === "retail" && !animate,
        "animate-[slideBar_0.2s_linear]":
          activeLink !== value && value === "community" && !animate,
        "bg-[#fff]": value === "",
        "bg-[#5ea3ec]": value === "food",
        "bg-[#f64444]": value === "retail",
        "bg-[#ffb400]": value === "community",
      })}
    >
      {!symbol && (
        <div
          style={
            activeLink === value
              ? { transform: "matrix(1, 0, 0, 1, 55, 0)" }
              : { transform: "matrix(0.833333, 0, 0, 0.833333, 0, 0)" }
          }
          className="fixed top-[60px] left-[1px] z-10 w-full max-w-[50px] duration-300"
        >
          <Logo />
        </div>
      )}
      <div
        className={clsx(
          "duration-300 flex flex-col items-center pt-[100px] absolute w-[60px] h-full",
          {
            "opacity-0": activeLink === value,
          }
        )}
      >
        {symbol && (
          <div className="text-xl select-none font-ApercuMonoProLight">
            {symbol}
          </div>
        )}
        {value !== "home" && (
          <div className="absolute top-1/2 rotate-90 text-[20px] capitalize select-none font-ApercuMonoProRegular">
            {value}
          </div>
        )}
      </div>
      {activeLink === value && children}
    </div>
  );
};

export default PageContainer;
