import Header from "./components/Header";
import { GlobalStyle } from "./global/styles";
import About from "./sections/About";
import Carousel from "./sections/Carousel";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Carousel />
      <About />
    </>
  );
}

export default App;
