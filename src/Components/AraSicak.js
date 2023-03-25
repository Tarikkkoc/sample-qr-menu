import React from "react";
import AraSicakData from "../json/AraSicak.json";

const AraSicak = () => {
  return (
    <div className="border-double border-4 border-yellow-900 pb-2 m-2">
      <div className="flex w-full p-4 justify-center items-center flex-col">
        <div className="text-center w-44 grid place-items-center rounded-2xl pt-2 pb-2 bg-yellow-00">
          <img
            className="w-40 h-40 rounded-2xl"
            src="https://cdn.yemek.com/uploads/2022/04/firinda-citir-kabak-nisan-2022.jpg"
            alt=""
          />
          <h3 className="font-serif font-medium">Ara Sıcaklar</h3>
        </div>
      </div>
      {AraSicakData.map((warmStarter) => (
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <div className="pl-4 pt-2 underline underline-offset-4">
              {warmStarter.title}
            </div>
            <div className="pr-4 pt-2">{warmStarter.price}</div>
          </div>
          <div className="pr-4 pl-4 indent-2 text-sm">{warmStarter.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default AraSicak;
