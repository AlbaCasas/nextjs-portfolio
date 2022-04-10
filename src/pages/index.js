import Layout from "../components/Layout";
import About from "../views/About";
import Home from "../views/Home";
import { useState } from "react";

const Index = () => {
  const [view, setView] = useState("home");
  return (
    <Layout setView={setView}>
      {view === "home" && <Home />}
      {view === "about" && <About />}
    </Layout>
  );
};

export default Index;
