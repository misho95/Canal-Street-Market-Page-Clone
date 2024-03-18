import { useState } from "react";
import PageContainer from "./components/page.container";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <PageContainer active={{ activePage, setActivePage }} value="home">
        1
      </PageContainer>
      <PageContainer
        active={{ activePage, setActivePage }}
        value="food"
        symbol={"餐饮"}
      >
        2
      </PageContainer>
      <PageContainer
        active={{ activePage, setActivePage }}
        value="retail"
        symbol={"零售"}
      >
        3
      </PageContainer>
      <PageContainer
        active={{ activePage, setActivePage }}
        value="community"
        symbol={"社区"}
      >
        4
      </PageContainer>
    </div>
  );
}

export default App;
