import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import Swal from "sweetalert2";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-theta.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Coffee has been deleted.", "success");

              const remaining = coffees.filter((coffee) => coffee._id !== id);

              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Coffee List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <li
            key={coffee._id}
            className="bg-white shadow-lg rounded-lg p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{coffee.name}</h3>
            </div>
            <div className="flex">
              <Link to={`/updatecoffee/${coffee._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Edit
                </button>
              </Link>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2"
                onClick={() => handleDelete(coffee._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
