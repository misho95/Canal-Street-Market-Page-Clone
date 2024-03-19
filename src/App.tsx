import { useLocation } from "react-router-dom";
import PageContainer from "./components/page.container";
import HomePage from "./pages/home-page";
import clsx from "clsx";
import { createContext, useEffect, useState } from "react";
import RetailPage from "./pages/retail-page";

export const AnimateContext = createContext<any>(null);

function App() {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname.split("/")[1];

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 800);
  }, []);

  return (
    <AnimateContext.Provider value={{ animate }}>
      <div
        className={clsx("w-full h-screen flex overflow-hidden", {
          "bg-[#fff]": activeLink === "",
          "bg-[#5ea3ec]": activeLink === "food",
          "bg-[#f64444]": activeLink === "retail",
          "bg-[#ffb400]": activeLink === "community",
        })}
      >
        <PageContainer value="">
          <HomePage />
        </PageContainer>
        <PageContainer value="food" symbol={"餐饮"}>
          2
        </PageContainer>
        <PageContainer value="retail" symbol={"零售"}>
          <RetailPage />
        </PageContainer>
        <PageContainer value="community" symbol={"社区"}>
          4
        </PageContainer>
      </div>
    </AnimateContext.Provider>
  );
}

export default App;
