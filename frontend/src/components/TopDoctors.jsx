import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full cursor-pointer">
        {doctors.slice(0, 8).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="flex flex-col items-center gap-2 border rounded-lg hover:shadow-lg border-gray-200"
            key={index}
          >
            <img
              className="bg-blue-50 rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex flex-col items-start gap-1 text-sm p-2">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p className="text-sm">Available</p>
              </div>
              <p className="text-gray-900 text-[16px] font-medium">
                {item.name}
              </p>
              <p className="text-gray-600 text-xs">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer"
      >
        View All Doctors
      </button>
    </div>
  );
};

export default TopDoctors;
