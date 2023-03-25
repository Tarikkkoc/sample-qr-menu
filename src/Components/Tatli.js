import React from "react";
import TatliData from "../json/Tatli.json";

const Tatli = () => {
  return (
    <div className="border-double border-4 border-yellow-900 pb-2 m-2">
      <div className="flex w-full p-4 justify-center items-center flex-col">
        <div className="text-center w-44 grid place-items-center rounded-2xl pt-2 pb-2 bg-yellow-00">
          <img
            className="w-40 h-40 rounded-2xl"
            src="https://www.unileverfoodsolutions.com.tr/konsept-uygulamalarimiz/turk-mutfagi/ramazanda-yapilan-sutlu-tatlilar/jcr:content/parsys/content/image_1301103656.img.jpg/1617192667471.jpg"
            alt=""
          />
          <h3 className="font-serif font-medium">Tatlılar</h3>
        </div>
      </div>
      {TatliData.map((dessert) => (
        <div className="flex justify-between w-full">
          <div className="pl-4 pt-2">{dessert.title}</div>
          <div className="pr-4 pt-2">{dessert.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Tatli;
