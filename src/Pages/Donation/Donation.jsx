import React from "react";
import DonnerCardContainer from "../../components/DonationCard/DonnerCardContainer";
import { useLoaderData } from "react-router-dom";

const Donation = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <DonnerCardContainer donates={data} />
    </div>
  );
};

export default Donation;
