import React from "react";
import DonationCard from "./DonationCard";

const DonnerCardContainer = ({ donates }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {donates.map((donate) => (
        <DonationCard key={donate.id} donate={donate} />
      ))}
    </div>
  );
};

export default DonnerCardContainer;
