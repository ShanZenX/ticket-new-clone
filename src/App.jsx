import "./App.css";
import Header from "./Header";
import MoviesBanner from "./MoviesBanner";
import Minibar from "./SearchBar";
import Content from "./Content";
import Upcoming from "./Upcoming";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <MoviesBanner />
      <Minibar />
      <Content />
      <Upcoming />
      <Footer />
    </>
  );
}

export default App;
