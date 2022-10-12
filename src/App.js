import Analytics from "./components/analytics/Analytics,";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import News from "./components/news/News";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <Analytics/>
        <News/>
        <Cards/>
        <Footer/>
    </div>
  );
}

export default App;
