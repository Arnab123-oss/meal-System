import { useState } from "react";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const BillForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [billDate, setBillDate] = useState("");
  const [items, setItems] = useState([]); // Starts with no items
  const [category, setCategory] = useState(""); // New select state

  // Handle changes for name and bill date


  // Handle adding a new item
  const handleAddItem = () => {
    setItems([...items, { itemName: "", weight: "", price: "" }]);
  };

  // Handle removing an item
  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index); // Remove the item at the given index
    setItems(newItems);
  };

  // Handle item change in the item list
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  // Handle form submission (for demonstration purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, billDate, items });
    onClose(); // Close the modal when form is submitted
  };

  const handleDiscard = () => {
    onClose();
  };
  return (
    <div className="">
      <h1 className="text-2xl font-bold font-mono antialiased mb-4 text-center underline underline-offset-4 ">
        Bill Form
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="text-gray-500 font-semibold antialiased font-mono mb-2 text-base">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            className="w-full appearance-none outline-none border-b-2 border-violet-500 bg-transparent rounded-t-lg px-2 py-1 text-gray-900 font-semibold"
            placeholder="Enter name"
            required
          />
        </div>

        {/* Bill Date */}
        <div className="mb-4">
          <label className="text-gray-500 font-semibold antialiased font-mono mb-2 text-base">
            Bill Date:
          </label>
          <input
            type="date"
            value={billDate}
            onChange={(e)=>{setBillDate(e.target.value)}}
            className="calender-icon w-full appearance-none outline-none border-b-2 border-violet-500 bg-transparent rounded-t-lg px-2 py-1 text-gray-900 font-semibold"
            required
          />
        </div>

        {/* Category Select */}
        <div className="mb-4">
          <label className="text-gray-500 font-semibold antialiased font-mono mb-2 text-base">
            Category:
          </label>
          <select
            value={category}
            onChange={(e)=>{setCategory(e.target.value)}}
            className="w-full appearance-none outline-none border-b-2 border-violet-500 bg-transparent rounded-t-lg px-2 py-1 text-gray-900 font-semibold"
            required
          >
            <option value="Vegetables">Vegetables</option>
            <option value="Non Veg">Non Veg(eg.Chicken,egg)</option>
            <option value="Oil & Spices">Oil & Spices</option>
            <option value="Groceries">Groceries</option>
          </select>
        </div>

        {/* Items */}
        <div className="mb-6">
          <label className="text-gray-500 font-bold antialiased font-mono text-base underline underline-offset-4 ">
            Items List:
          </label>

          {/* Heading Row for Field Labels */}
          {items.length > 0 && (
            <div className="flex space-x-4 my-2  text-center text-gray-500 font-semibold antialiased font-mono text-sm">
              <div className="w-1/3">
                Item Name
              </div>
              <div className="w-1/3">
              Weight(Kg)
              </div>
              <div className="w-1/3 text-left">
                Price
              </div>
            </div>
          )}

          {items.length > 0 &&
            items.map((item, index) => (
              <div key={index} className="flex space-x-4 mb-4 items-center ">
                <input
                  type="text"
                  value={item.itemName}
                  onChange={(e) =>
                    handleItemChange(index, "itemName", e.target.value)
                  }
                  className="w-1/2 appearance-none outline-none border-b-2 border-violet-500 bg-transparent rounded-t-lg px-2 py-1 text-gray-900 font-semibold "
                  placeholder="Item name"
                  required
                />
                <input
                  type="number"
                  value={item.weight}
                  onChange={(e) =>
                    handleItemChange(index, "weight", e.target.value)
                  }
                  className="w-1/4 appearance-none outline-none border-b-2 border-violet-500 bg-transparent rounded-t-lg px-2 py-1 text-gray-900 font-semibold"
                  placeholder="Kg"
                  min="1"
                  required
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(index, "price", e.target.value)
                  }
                  className="w-1/4 appearance-none outline-none border-b-2 border-violet-500 bg-transparent rounded-t-lg px-2 py-1 text-gray-900 font-semibold"
                  placeholder="Price"
                  min="0"
                  step="1"
                  required
                />
                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className=" bg-violet-200 text-gray-500 px-3 py-3 rounded-full hover:bg-violet-200 hover:text-red-700 "
                >
                  <MdDelete size={20} />
                </button>
              </div>
            ))}
        </div>

        {/* Add Item Button */}

        <button
          type="button"
          onClick={handleAddItem}
          className=" w-full mb-4 bg-transparent px-4 py-2 rounded-full text-gray-500 font-semibold antialiased font-mono text-base transition-all duration-500 ease-in-out delay-200 hover:bg-violet-300"
        >
          +Add New Item
        </button>

        {/* Submit Button */}
        <div className="w-full flex ">
          <div className="w-1/3">
            <button
              type="button"
              className="bg-white-500 text-gray-500 font-semibold antialiased font-mono text-base px-4 py-2 rounded-full transition-all duration-500 ease-in-out delay-200 hover:bg-violet-300"
              onClick={handleDiscard}
            >
              Discard
            </button>
          </div>
          <div className="w-9/12 flex justify-evenly">
            <button
              type="submit"
              className="bg-gray-800 text-gray-500 font-bold antialiased font-mono text-base px-4 py-2 rounded-full transition-all duration-500 ease-in-out delay-200 hover:bg-gray-950"
            >
              Save as draft
            </button>
            <button
              type="submit"
              className="bg-violet-500 text-white font-bold antialiased font-mono text-sm px-4 py-2 rounded-full transition-all duration-500 ease-in-out delay-200 hover:bg-violet-600"
            >
              Save & Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillForm;
