import Header from "./components/Header";
import { GlobalStyle } from "./global/styles";
import Carousel from "./sections/Carousel";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Carousel />
    </>
  );
}

export default App;
