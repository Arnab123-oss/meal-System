

// eslint-disable-next-line react/prop-types
const Status = ({status}) => {
  return (
<div className="bg-lightPeach p-2  rounded-md flex flex-row items-center gap-2">
      <div
        className={`w-2 h-2  rounded-lg ${
          status == "Updated"
            ? "bg-green-500"
            : status == "Pending"
            ? "bg-orange-500"
            : "bg-gray-500"
        }`}
      ></div>
      <span
        className={
          status == "Updated"
            ? "text-green-500"
            : status == "Pending"
            ? "text-orange-500"
            : "text-gray-500"
        }
      >
        {status}
      </span>
    </div>
  )
}

export default Status
