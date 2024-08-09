import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className='bg-black text-white'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
