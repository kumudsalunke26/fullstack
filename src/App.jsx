import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className='bg-[#290324] text-white'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
