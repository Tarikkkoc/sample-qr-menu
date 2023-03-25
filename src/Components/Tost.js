import React from "react";
import TostData from "../json/Tost.json";

const Tost = () => {
  return (
    <div className="border-double border-4 border-yellow-900 pb-2 m-2">
      <div className="flex w-full p-4 justify-center items-center flex-col">
        <div className="text-center w-44 grid place-items-center rounded-2xl pt-2 pb-2 bg-yellow-00">
          <img
            className="w-40 h-40 rounded-2xl"
            src="https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kavurmali-tost-one-cikan.jpg"
            alt=""
          />
          <h3 className="font-serif font-medium">Tost Çeşitleri</h3>
        </div>
      </div>
      {TostData.map((toast) => (
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <div className="pl-4 pt-2 underline underline-offset-4">
              {toast.title}
            </div>
            <div className="pr-4 pt-2">{toast.price}</div>
          </div>
          <div className="pr-4 pl-4 indent-2 text-sm">{toast.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Tost;
