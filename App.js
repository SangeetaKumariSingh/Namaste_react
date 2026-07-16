import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      {" "}
      <Header />
      <Body />
      <Footer />
    </>
  );
};
root.render(<App />);
//
