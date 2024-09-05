import React from "react";

function Footer() {
  return (
    <div className="bg-gray-600  ">
      <div className="p-[50px] grid grid-cols-3 text-white">
      <div>Roter</div>
      <div>
        <h1>Quick links</h1>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div>
        <h1>News</h1>
        <p>
          The clinic is modern, clean, and well-organized. They made me feel
          confident in the quality of care I was receiving. Plus, the little
          touches, like the waiting area added to the positive experience.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
