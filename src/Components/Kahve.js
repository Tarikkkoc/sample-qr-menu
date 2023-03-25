import React from "react";
import KahveData from "../json/Kahve.json";

const Kahve = () => {
  return (
    <div className="border-double border-4 border-yellow-900 pb-2 m-2">
      <div className="flex w-full p-4 justify-center items-center flex-col">
        <div className="text-center w-44 grid place-items-center rounded-2xl pt-2 pb-2 bg-yellow-00">
          <img
            className="w-40 h-40 rounded-2xl"
            src="https://www.yongaci.com/wp-content/uploads/2019/11/turkish-coffee-1024x640.jpg"
            alt=""
          />
          <h3 className="font-serif font-medium">Kahveler</h3>
        </div>
      </div>
      {KahveData.map((coffee) => (
        <div className="flex justify-between w-full">
          <div className="pl-4 pt-2">{coffee.title}</div>
          <div className="pr-4">{coffee.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Kahve;
