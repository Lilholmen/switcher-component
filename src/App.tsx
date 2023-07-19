import { useState } from "react";
import Switcher from "./components/Switcher";

const foo = (enabled: boolean) =>
  console.log(`This switcher is ${enabled ? "on" : "off"}`, enabled);

const App = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-sky-50">
      <div className="grid grid-cols-3 gap-5 rounded-xl bg-white p-12 shadow-lg">
        <Switcher onChange={foo} />
        <Switcher onChange={foo} defaultOn />
        <Switcher onChange={foo} label="Text example" />
        <Switcher onChange={foo} disabled />
        <Switcher onChange={foo} defaultOn disabled />
        <Switcher onChange={foo} label="Text example" disabled />
      </div>
    </div>
  );
};

export default App;
