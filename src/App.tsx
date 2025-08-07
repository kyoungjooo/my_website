import { Outlet } from "react-router-dom";
import Navigation from "./components/common/Navigation";

function App() {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          <Outlet />
        </div>
        <Navigation />
      </section>
    </>
  );
}

export default App;
