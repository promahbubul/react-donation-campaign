import React, { useState } from "react";
import { useParams } from "react-router-dom";

const HomeCard = ({ donate }) => {
  const [donated, setDonated] = useState([]);

  const {
    title,
    card_bg,
    category,
    category_bg,
    id,
    description,
    picture,
    price,
    text_button_bg,
  } = donate;
  // console.log(donate);
  const handleDonate = () => {
    const donateAdded = [];
    const donates = localStorage.getItem("donates");
    if (donates) {
      alert("Donates");
    } else {
      // console.log(donate);
      setDonated([...donated, donate]);
      console.log(donated);
    }
  };

  return (
    <div
      onClick={() => handleDonate()}
      style={{ backgroundColor: card_bg }}
      className={` rounded-lg cursor-pointer`}
    >
      <img className="w-full" src={picture} alt="" />
      <div className="p-4 space-y-3">
        <span
          style={{ backgroundColor: category_bg, color: text_button_bg }}
          className="text-[#0052FF] px-4 py-1 font-medium text-sm rounded-md "
        >
          {category}
        </span>
        <p style={{ color: text_button_bg }} className=" font-bold text-xl">
          {title}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
