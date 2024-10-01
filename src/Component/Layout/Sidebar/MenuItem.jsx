/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TbHomeHeart } from "react-icons/tb";
import { RiBillLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const link = [
  {
    path: "",
    icon: <TbHomeHeart />,
  },
  {
    path: "Bill",
    icon: <RiBillLine />,
  },
  {
    path: "Calender",
    icon: <SlCalender />,
  },
];


export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <>
    <motion.li
      variants={variants}
      whileHover={{ scale: 0.96 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
      <Link to={`/${link[i].path}`}>{link[i].icon}</Link> 
      </div>
      {/* <div className="text-placeholder" style={style} /> */}
      <Link to={`/${link[i].path}`} className="text-base font-bold">
        {link[i].path == "" ? "Home" : link[i].path}
      </Link>
    </motion.li>
    
    </>
  );
};
