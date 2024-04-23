import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import LineChart from "./Components/LineChart/LineChart";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptionsss from "./Components/PriceOptionsss/PriceOptionsss";

//44-1 Setup Tailwind Css With Create React App

function App() {
  return (
    <>
      <Navbar></Navbar>
      <DaisyNav></DaisyNav>
      <PriceOptionsss></PriceOptionsss>
      <LineChart></LineChart>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
