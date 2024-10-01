import { useState } from "react";
import StatusFilter from "./filter";
import Invoice from "./Invoice";
import Modal from "./InvoiceModal";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

const bill = [
  {
    id: "RY4125",
    client: "Atanu Manna",
    amount: 1000,
    date: "01/09/2024",
    status: "Updated",
  },
  {
    id: "DS1542",
    client: "Rittic Ghosh",
    amount: 1500,
    date: "02/09/2024",
    status: "Pending",
  },
  {
    id: "LK5186",
    client: "Rafik Sarkar",
    amount: 2000,
    date: "03/09/2024",
    status: "Updated",
  },
  {
    id: "YH8549",
    client: "Arnab Ghosh",
    amount: 2500,
    date: "04/09/2024",
    status: "Pending",
  },
  {
    id: "MV5142",
    client: "Atanu Manna",
    amount: 3000,
    date: "05/09/2024",
    status: "Draft",
  },
  {
    id: "HK4196",
    client: "Atanu Manna",
    amount: 3500,
    date: "06/09/2024",
    status: "Pending",
  },
  {
    id: "UK8521",
    client: "Atanu Manna",
    amount: 4000,
    date: "07/09/2024",
    status: "Draft",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Delay before children start animating
      staggerChildren: 0.2, // Staggering the appearance of each child
    },
  },
};

const AllBill = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // const navigate = useNavigate();

  // Handle click event to toggle visibility
  const handleClick = () => {
    setIsVisible(false); // Trigger reverse animation
  };

  // const handleAnimationComplete = (id) => {
  //   if (!isVisible) {
  //     console.log(id);

  //     navigate(`/bill/${id}`); // Only navigate if condition is met
  //   }
  // };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-lightPurple h-screen">
      <div className="w-1/2 m-auto p-5">
        <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 25,
            duration: 2.5,
          }}
          className="flex flex-row justify-between my-12"
        >
          <div className="w-1/2">
            <p className="font-sans font-bold text-3xl mb-1">Invoices</p>
            <p className="font-sans font-semibold text-xs text-customColor mb-1">
              There are 7 total invoices
            </p>
          </div>
          <div className="w-1/2 flex flex-row justify-evenly ">
            <div>
              <StatusFilter />
            </div>
            <div
              className="bg-violet-400 w-5/12 h-11 rounded-3xl flex p-2.5 space-x-4"
              onClick={openModal}
            >
              <div className="w-2/12  bg-[url('/icon-plus.svg')] bg-white rounded-full bg-no-repeat bg-center"></div>
              <div className="text-white font-semibold">New Invoice</div>
              <AnimatePresence>
                {isModalOpen && (
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="my-5"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"} // Toggle between "show" and "hidden"
          onClick={handleClick}
        >
          {bill.map((item) => (
            <Invoice
              key={item.id}
              id={item.id}
              client={item.client}
              date={item.date}
              amount={item.amount}
              status={item.status}
              isVisible={isVisible}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AllBill;
