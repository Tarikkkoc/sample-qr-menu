import React from "react";

const Logo = () => {
  return (
    <div className="w-full grid place-items-center pt-2 pb-2 bg-green-800 opacity-80 rounded-bl-lg rounded-br-lg fixed">
      {/* <img
        className="h-52"
        src="https://media.istockphoto.com/id/1267681505/tr/vektör/kahve-logo-tasarım-vektör-illüstrasyon-kafe-ve-restoran-için-vintage-kahve-logo-vektör.jpg?s=612x612&w=0&k=20&c=DPpJiN5iUNLeFDjpofFJhYEpRAxHyvj48mBkSDMGwGM="
        alt=""
      /> */}
      <span className="italic font-semibold">
        Bizi tercih ettiğiniz için teşekkürler
      </span>
    </div>
  );
};

export default Logo;
