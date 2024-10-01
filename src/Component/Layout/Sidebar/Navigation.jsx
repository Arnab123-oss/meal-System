import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
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

export const Navigation = () => (
  <>
    <motion.ul variants={variants}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
      <div className="w-full flex justify-center gap-3 mt-[350px] absolute">
      <motion.button
        variants={variants2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-5/12  bg-black text-white px-3 py-2 rounded-lg  " 
      >
        Login
      </motion.button>
      <motion.button
        variants={variants2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-5/12  bg-black text-white px-3 py-2 rounded-lg " 
      >
        Signin
      </motion.button>
      </div>
    </motion.ul>
  </>
);

const itemIds = [0, 1, 2];
