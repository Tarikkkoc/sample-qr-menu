import React from "react";
import CayData from "../json/Cay.json";
const Cay = () => {
  //   const result = CayData.map((tea) => {
  //     return {
  //       title: tea.title,
  //       price: tea.price,
  //     };
  //   });
  //   console.log(result);
  return (
    <div className="border-double border-4 border-yellow-900 pb-2 mr-2 ml-2 mb-2 mt-14">
      <div className="flex w-full p-4 justify-center items-center flex-col">
        <div className="text-center w-44 grid place-items-center rounded-2xl pt-2 pb-2 bg-yellow-00">
          <img
            className="w-40 h-40 rounded-2xl"
            src="https://mehtaperturk.com/wp-content/uploads/2022/04/turkish-tea.jpg"
            alt=""
          />
          <h3 className="font-serif font-medium">Çaylar</h3>
        </div>
      </div>
      {CayData.map((tea) => (
        <div className="flex justify-between w-full">
          <div className="pl-4 pt-2">{tea.title}</div>
          <div className="pr-4 pt-2">{tea.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Cay;
