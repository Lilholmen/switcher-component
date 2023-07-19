import React, { useState } from "react";
import Switcher from "./components/Switcher";

const App = () => {
  const [demoText, setDemoText] = useState("Switxh the switcher!");

  const handleSwetcherToggle = (enabled: boolean): void =>
    setDemoText(`Swicher is ${enabled ? "on" : "off"}`);

  const variants = [
    <Switcher onChange={handleSwetcherToggle} />,
    <Switcher onChange={handleSwetcherToggle} defaultOn />,
    <Switcher onChange={handleSwetcherToggle} label="Text example" />,
    <Switcher onChange={handleSwetcherToggle} disabled />,
    <Switcher onChange={handleSwetcherToggle} defaultOn disabled />,
    <Switcher onChange={handleSwetcherToggle} label="Text example" disabled />,
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-sky-50">
      <div className="w-96 rounded-xl bg-white py-5 text-center text-xl shadow-lg ">
        {demoText}
      </div>
      <div className="grid grid-cols-3 gap-5 rounded-xl bg-white p-12 shadow-lg">
        {variants.map((Element, index) => (
          <span key={index}>{Element}</span>
        ))}
      </div>
    </div>
  );
};

export default App;
