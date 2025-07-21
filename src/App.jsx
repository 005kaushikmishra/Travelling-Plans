import { useState } from "react";
import "./App.css";
import Data from "./Data";
import Tours from "./Components/Tours";

function App() {
  const [tour, setTour] = useState(Data);

  function bthandler(id) {
    const newtour = tour.filter((tour) => tour.id !== id);
    setTour(newtour);
  }

  if (tour.length === 0) {
    return (
      <div className="refresh">
        <h2>NO TOURS LEFT</h2>
        <button className="btn-white" onClick={() => setTour(Data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tour={tour} bthandler={bthandler}></Tours>
    </div>
  );
}

export default App;
