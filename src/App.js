import { Header } from "./components/header";
import { MainSection } from "./components/main-section/main-section";
import { Wrapper } from "./components/wrapper";
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../src/pages/login';
import RegisterPage from '../src/pages/register';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
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
