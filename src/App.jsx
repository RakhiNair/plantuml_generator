import { useState } from "react";
import Image_display from "./components/Image_display";

function App() {
  return (
    
    <div className="p-4 h-screen w-screen bg-black overflow-auto"> {/* Add bg color to whole page */}
      <h1 className="p-4 mt-7 mb-4 text-4xl text-yellow-50 font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl">
        Plantuml Code Based Image Generator
      </h1>
      <Image_display />
      </div>
    
  );
}

export default App;
