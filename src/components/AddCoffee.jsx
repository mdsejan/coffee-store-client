import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const CoffeeDetails = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // fetch("https://coffee-store-server-theta.vercel.app/coffees",)

    fetch("https://coffee-store-server-theta.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(CoffeeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Coffee Added Successfully",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-3 md:mx-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-4 max-w-screen-lg bg-slate-100 md:p-24">
          <div className="w-full mb-16">
            <h1 className="text-4xl font-bold mt-16">Add Coffee</h1>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8"
              htmlFor="chef"
            >
              Chef
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="chef"
              type="text"
              placeholder="Chef"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8"
              htmlFor="supplier"
            >
              Supplier
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="supplier"
              type="text"
              placeholder="Supplier"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8"
              htmlFor="taste"
            >
              Taste
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="taste"
              type="text"
              placeholder="Taste"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="category"
              type="text"
              placeholder="Category"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8"
              htmlFor="details"
            >
              Details
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="details"
              type="text"
              placeholder="Details"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block text-left text-gray-600 font-bold text-md mb-2 mt-8"
              htmlFor="photo"
            >
              Photo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="photo"
              type="text"
              placeholder="Photo"
            />
          </div>
          <div className="w-full px-4 mt-12">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Coffee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
