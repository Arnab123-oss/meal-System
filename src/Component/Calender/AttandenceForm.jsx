import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "../container/Coniner";

const AttandenceForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  return (
    <Container>
      <div className="font-mono text-2xl font-bold tracking-wide flex justify-center items-center mt-2 mb-10">
        <p className="bg-emerald-200 px-5 py-2 rounded-full">Attendence</p>
      </div>
      <div className=" py-4 shadow-2xl bg-slate-300 rounded-md">
        <div className="flex flex-row text-center font-mono text-2xl font-bold tracking-wide  divide-x-2 divide-dashed divide-black">
          <div className="basis-1/3">Date</div>
          <div className="basis-1/3">Lunch</div>
          <div className="basis-1/3">Dinner</div>
          <div className="basis-1/3"></div>
        </div>
        <div className="flex flex-row text-center font-mono text-xl font-bold tracking-wide mt-5 divide-x-2 divide-dashed divide-black">
          <div className="basis-1/3 text-black">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-7/12 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-300"
              calendarClassName="rounded-lg shadow-lg"
            />
          </div>
          <div className="basis-1/3">
            <label>
              <input
                type="checkbox"
                checked={lunch}
                onChange={(e) => setLunch(e.target.checked)}
                className="transform scale-150 mr-2 accent-green-300"
              />
            </label>
          </div>
          <div className="basis-1/3">
            <label>
              <input
                type="checkbox"
                checked={dinner}
                onChange={(e) => setDinner(e.target.checked)}
                className="transform scale-150 mr-2 accent-green-300"
              />
            </label>
          </div>
          <div className="basis-1/3">
            <input
              type="submit"
              value="Submit"
              className="border-none bg-[rgb(110,202,172)] text-balck font-bold text-[1.2vmax] font-mono w-1/2 p-[0.5vmax] cursor-pointer rounded-[25px] outline-none hover:bg-[rgb(79,158,137)] transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AttandenceForm;
