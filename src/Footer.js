import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="flex flex-row gap-2 flex-wrap bg-gray-900 text-white mx-auto px-5 lg:justify-center">
        <div className="flex flex-col w-[350px] mt-5 mx-auto">
          <h3 className="font-extrabold">About Us</h3>
          <div className="mt-5">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam
            </h4>
          </div>
        </div>
        <div className="flex flex-col w-[350px] mt-5 mx-auto">
          <h3 className="font-extrabold mt-5 sm:mt-0">Contact Us</h3>
          <div className="mt-5">
            <h4>Phone : +91 9999999999</h4>
            <h4>Email : erwhgfj@falana.com</h4>
          </div>
        </div>
        <div className="flex flex-col w-[350px] mt-5 mx-auto">
          <h3 className="font-extrabold mt-5 sm:mt-0">Become a Member</h3>
        </div>
        <div className="flex flex-col w-[350px] mt-5 mx-auto">
          <h3 className="font-extrabold mt-5 sm:mt-0">Carrers</h3>
        </div>
      </div>
      <div className="bg-gray-700 p-2">
        <h4 className="text-center text-slate-200">
          @ 2023 Copyright : Quantafile.com
        </h4>
      </div>
    </Fragment>
  );
};

export default Footer;
