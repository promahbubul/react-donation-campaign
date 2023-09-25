import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    
  return (
    <div>
      <div className="w-full rounded-xl  rounded-lg relative ">
        <img
          src=""
          alt=""
          className="w-full object-cover h-[65vh] rounded-xl"
        />
        <div className="p-5 w-full absolute rounded-b-xl  bottom-0 bg-[#0B0B0B80]">
          <button className="bg-red-600 text-white py-3 px-5 rounded-sm">
            Donate $ 2500
          </button>
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-4xl text-[#0B0B0B] font-bold">picture</h2>
        <p className="text-[#0B0B0BB2] text-justify leading-loose	 mt-6">
          There are many things that can be done to ensure that all people have
          access to a good education. Governments can invest in public schools,
          provide financial assistance to students, and make sure that all
          schools have qualified teachers and resources. Families can support
          their children's education by creating a learning environment at home
          and helping them with their schoolwork. Teachers can create a positive
          and supportive learning environment for their students and challenge
          them to reach their full potential.
        </p>
      </div>
    </div>
  );
};

export default DonationDetails;
