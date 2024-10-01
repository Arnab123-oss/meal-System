import { motion } from "framer-motion";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const KPICharts = () => {
  const pieData = {
    labels: ["Dinner", "Both", "Lunch"],
    datasets: [
      {
        label: "Meals done",
        data: [20, 10, 40],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Vegitables",
        data: [400, 600, 800, 1000],
        backgroundColor: "green",
      },
      {
        label: "Non-Veg",
        data: [300, 500, 700, 200],
        backgroundColor: "red",
      },
      {
        label: "Oil & Spices",
        data: [100, 200, 500, 400],
        backgroundColor: "orange",
      },
      {
        label: "Groceries",
        data: [100, 200, 500, 400],
        backgroundColor: "pink",
      },
    ],
  };

  const pieVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const barVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#5a189a",
      color: "#fff",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "40px 20px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #e9ecef, #f8f9fa)",
      }}
    >
      {/* Attendance Button */}
      <motion.button
        variants={buttonVariants}
        initial={false}
        whileHover="hover"
        whileTap="tap"
        style={{
          position: "absolute",
          top: "10px",
          right: "7%",
          width:"3rem",
          height: "3rem",
          // transform: 'translateX(-50%)',
          // padding: "15px 30px",
          fontSize: "28px",
          fontWeight: "",
          color: "#fff",
          backgroundColor: "#7209b7",
          border: "none",
          borderRadius: "100%",
          cursor: "pointer",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    
        }}
      >
       ↓
      </motion.button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "1200px",
          marginTop: "100px",
          gap: "50px",
        }}
      >
        {/* Animated Bar Chart */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={barVariants}
          style={{
            width: "900px",
            height: "450px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "10px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            Monthly Expenses on Meals
          </h3>
          <Bar data={barData} />
        </motion.div>

        {/* Animated Pie Chart */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pieVariants}
          style={{
            width: "450px",
            height: "450px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "10px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            Meals Done
          </h3>
          <Pie data={pieData} />
        </motion.div>
      </div>
      {/* 
      <footer style={{
        position: 'absolute',
        bottom: '20px',
        textAlign: 'center',
        width: '100%',
        color: '#555',
        fontSize: '14px',
      }}>
     
      </footer> */}
    </div>
  );
};

export default KPICharts;
