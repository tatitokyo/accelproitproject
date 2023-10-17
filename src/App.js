import { Header } from "./components/header";
import { MainSection } from "./components/main-section/main-section";
import { Wrapper } from "./components/wrapper";
import { Route, Routes } from "react-router-dom";
import PagesRootComponent from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<PagesRootComponent />} />
        <Route path="/register" element={<PagesRootComponent />} />
        <Route path="/" element={
            <Wrapper>
              <Header />
              <MainSection />
            </Wrapper>} />
      </Routes>
    </div>
  );
}

export default App;
