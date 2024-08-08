import "./App.css";
import AnimatedList from "./components/AnimatedList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopProdcast from "./components/TopProdcast";
const App = () => {
    return (
        <div className='bg-black text-white'>
            <Header />
            <Hero />
            <AnimatedList />
            <TopProdcast />
        </div>
    );
};

export default App;
