import clsx from "clsx";
import { ReactNode } from "react";
import Logo from "./logo";

type PropsType = {
  children: ReactNode;
  active: {
    activePage: string;
    setActivePage: (arg: string) => void;
  };
  value: string;
  symbol?: string;
};

const PageContainer = ({ children, active, value, symbol }: PropsType) => {
  return (
    <div
      onClick={() => active.setActivePage(value)}
      className={clsx("w-[80px] duration-300 relative ", {
        "w-full h-full pt-[250px] px-[60px] pb-[120px] ":
          active.activePage === value,
        "bg-[#fff]": value === "home",
        "bg-[#5ea3ec]": value === "food",
        "bg-[#f64444]": value === "retail",
        "bg-[#ffb400]": value === "community",
      })}
    >
      {!symbol && (
        <div
          style={
            active.activePage === value
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
          " duration-300 flex flex-col items-center pt-[100px] absolute w-full h-full",
          {
            "opacity-0": active.activePage === value,
          }
        )}
      >
        {symbol && <div className="text-2xl select-none">{symbol}</div>}
        {value !== "home" && (
          <div className="absolute top-1/2 rotate-90 text-4xl uppercase select-none">
            {value}
          </div>
        )}
      </div>
      {active.activePage === value && children}
    </div>
  );
};

export default PageContainer;
