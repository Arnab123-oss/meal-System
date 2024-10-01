import { useState } from "react";

const StatusFilter = () => {
  // Toggle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState({
    Draft: false,
    Pending: false,
    Paid: false,
  });

  // Toggle selected status
  const toggleStatus = (status) => {
    setSelectedStatuses({
      // ...selectedStatuses,
      [status]: !selectedStatuses[status],
    });
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-bold text-gray-700 hover:text-purple-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter by status
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-10"
          role="menu"
        >
          <div className="py-2">
            {/* Draft */}
            <label className="flex items-center px-4 py-2 text-gray-900 cursor-pointer font-bold text-sm">
              <input
                type="checkbox"
                className="hover:scale-110 hover:shadow-lg transition-all duration-300 mr-2 accent-purple-500 cursor-pointer"
                checked={selectedStatuses.Draft}
                onChange={() => toggleStatus("Draft")}
              />
              <span className="ml-3">Draft</span>
            </label>

            {/* Pending */}
            <label className="flex items-center px-4 py-2 text-gray-900 cursor-pointer font-bold text-sm">
              <input
                type="checkbox"
                className="hover:scale-110 hover:shadow-lg transition-all duration-300  mr-2 accent-purple-500 cursor-pointer"
                checked={selectedStatuses.Pending}
                onChange={() => toggleStatus("Pending")}
              />
              <span className="ml-3">Pending</span>
            </label>

            {/* Paid */}
            <label className="flex items-center px-4 py-2 text-gray-900 cursor-pointer font-bold text-sm">
              <input
                type="checkbox"
                className="hover:scale-110 hover:shadow-lg transition-all duration-300 mr-2 accent-purple-500 cursor-pointer"
                checked={selectedStatuses.Paid}
                onChange={() => toggleStatus("Paid")}
              />
              <span className="ml-3">Updated</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusFilter;
