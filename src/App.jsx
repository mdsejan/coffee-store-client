import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className="text-6xl text-purple-600">All Coffe {coffees.length}</h1>
      <div>
        {coffees.map((coffee) => (
          <h2 key={coffee._id}>{coffee.name}
          
          </h2>
        ))}
      </div>
    </>
  );
}

export default App;
