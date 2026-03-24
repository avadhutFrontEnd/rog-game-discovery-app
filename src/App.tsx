import React from "react";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout
      children={{
        nav: <div>GameNav</div>,
        aside: <div>Sidebar</div>,
        main: <div>Main Game feed</div>,
      }}
    />
  );
}

export default App;
