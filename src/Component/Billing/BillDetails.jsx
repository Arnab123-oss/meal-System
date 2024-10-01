import Status from "./Status";
import { useParams } from "react-router-dom";

const BillDetails = () => {
  const category = "Oil & Spices";
  const { id } = useParams();
  return (
    <div className="bg-gray-50 min-h-screen p-10 ">
      {/* Back Button */}
      <div className="w-1/2 m-auto">
        <div className="flex items-center space-x-2 mb-6">
          <button className="text-purple-600 ">← Go back</button>
        </div>

        {/* Header */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-semibold">Status</span>
              <span className="font-semibold font-base">
                <Status status="Pending" />
              </span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <span
                className={`w-4 h-4 rounded-full  + ${
                  category === "vegitables"
                    ? "bg-green-500"
                    : category === "Non Veg"
                    ? "bg-red-500"
                    : category === "Oil & Spices"
                    ? "bg-yellow-500"
                    : category === "Groceries"
                    ? "bg-red-800"
                    : "bg-gray-400"
                }`}
              ></span>
              <button className="bg-gray-200 text-gray-500 hover:bg-violet-300 font-semibold antialiased font-mono px-6 py-2 rounded-full">
                Edit
              </button>
              <button className="bg-red-400 text-white font-semibold antialiased font-mono px-4 py-2 rounded-full hover:bg-red-500">
                Delete
              </button>
              <button className="bg-purple-500 text-white font-semibold antialiased font-mono px-4 py-2 rounded-full hover:bg-purple-600">
                Mark as Paid
              </button>
            </div>
          </div>
        </div>

        {/* Invoice Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg antialiased font-mono">
          {/* Invoice Details */}
          <div className="mb-4">
            <h1 className="text-base font-bold mb-2">
              <span className="text-gray-500">#</span>
              {id}
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-500 font-semibold">Invoice Date</p>
              <p className="text-xl font-bold">21 Aug 2021</p>
            </div>

            <div>
              <p className="text-gray-500 font-semibold">Bill to</p>
              <p className="text-xl font-bold">Atanu Manna</p>
              <p className="text-gray-500">84 Church Way</p>
            </div>
          </div>

          {/* Items Table */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500">
                  <th className="pb-4">Item Name</th>
                  <th className="pb-4">Weight(kg)</th>
                  <th className="pb-4">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold py-2">Banner Design</td>
                  <td className="py-2">1</td>
                  <td className="py-2">£156.00</td>
                </tr>
                <tr>
                  <td className="font-bold py-2">Email Design</td>
                  <td className="py-2">2</td>
                  <td className="py-2">£200.00</td>  
                </tr>
              </tbody>
            </table>
          </div>

          {/* Amount Due */}
          <div className="text-gray-500 bg-violet-300 antialiased font-mono p-4 mt-8 rounded-xl text-xl font-bold">
            <div className="flex justify-between">
              <span>Amount Due</span>
              <span>£556.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
