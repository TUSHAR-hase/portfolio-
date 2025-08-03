import Home from "../components/pages/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from "../components/pages/projectdetail";
import Navbar from "../components/ui/navigation";

export default function Page() {
  
  return (

      <div className="min-h-screen bg-gradient-to-br w-full from-gray-900 to-blue-900 text-white">
        <Navbar />
        
         <Home></Home>
         {/* <ProjectDetails></ProjectDetails> */}
      
      </div>
   
  );
}