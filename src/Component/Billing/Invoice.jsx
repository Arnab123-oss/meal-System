
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Status from "./Status";
const childVariants = {
  hidden: { opacity: 0, y: 30 }, // Starts with more offset for a smoother transition
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Increased duration for smoothness
      ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoother easing
    },
  },
};

const Invoice = ({ id, client, amount, status, date}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bill/${id}`)
  };

  
  return (
    <motion.div
      variants={childVariants}
      className="bg-white shadow-lg w-full px-8 py-6 mb-5 grid grid-cols-5 gap-5 font-mono font-bold rounded-lg
    border border-transparent hover:border-violet-500 transition duration-500"
      onClick={handleClick}
    >
      <div className="text-md flex justify-center items-center">
        <span className="text-customColor">#</span>
        {id}
      </div>
      <div className="text-sm text-customColor flex justify-center items-center">
        {date}
      </div>
      <div className="text-sm text-customColor flex justify-center items-center">
        {client}
      </div>
      <div className="text-xl flex justify-center items-center">₹{amount}</div>
      <div className="flex flex-row justify-between items-center">
        <div className="w-5/6">
          <Status status={status} />
        </div>
        <div className="text-violet-600 text-lg px-2 ml-2.5  rounded-full">
          <svg
            className={"w-4 h-4 ml-2 transition-transform -rotate-90"}
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
        </div>
      </div>
    </motion.div>
  );
};

// function Status({ status }) {
//   return (
//     <div className="bg-lightPeach p-2  rounded-md flex flex-row items-center gap-2">
//       <div
//         className={w-2 h-2  rounded-lg ${
//           status == "Updated"
//             ? "bg-green-500"
//             : status == "Pending"
//             ? "bg-orange-500"
//             : "bg-gray-500"
//         }}
//       ></div>
//       <span
//         className={
//           status == "Updated"
//             ? "text-green-500"
//             : status == "Pending"
//             ? "text-orange-500"
//             : "text-gray-500"
//         }
//       >
//         {status}
//       </span>
//     </div>
//   );
// }

export default Invoice;