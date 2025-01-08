import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { useAuthStore } from './store/useAuthStore';
import { BrowserRouter as Router } from "react-router-dom";


const queryClient = new QueryClient();

const App = () => {
  const [items, setItems] = useState([])
  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     const res=await fetch('http://localhost:5174/')
  //     const data=await res.json()
  //     setItems(data.items)
  //   }
  //   fetchData();
  // },[])

  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);


  return (

    <QueryClientProvider client={queryClient}>
      <div className="bg-background text-white overflow-hidden">
        <Header />
        <Outlet />
        <Footer />

        {items.map(i => (
          <p>{i.name},{i.description}</p>
        ))}

      </div>
    </QueryClientProvider>
  );
}


export default App;


