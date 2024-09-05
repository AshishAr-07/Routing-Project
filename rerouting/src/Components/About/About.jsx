import React from "react";

function About() {
  return (
    <>
      <div className=" max-w-screen-xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 py-5 gap-5 border-2 p-10">
          <div className="flex flex-col">
            <h1 className="text-4xl text-center">About Us</h1>
            <div className="min-h-0.5 bg-black w-1/4 mx-auto mt-2 "></div>
            <p className="py-5">
              We craft digital experiences that not only look stunning but are
              also user-friendly, functional, and designed to convert. With
              years of experience in the web design industry, we take pride in
              creating websites that help businesses establish a strong online
              presence and achieve their goals.<br></br>Our team of creative
              designers, skilled developers, and digital strategists work
              closely with clients to deliver tailored solutions. Whether you're
              a startup looking to build your first website or a large
              enterprise in need of a digital revamp, we are here to turn your
              vision into reality.
            </p>
            <p className="pt-5">
             Our team of creative
              designers, skilled developers, and digital strategists work
              closely with clients to deliver tailored solutions. Whether you're
              a startup looking to build your first website or a large
              enterprise in need of a digital revamp, we are here to turn your
              vision into reality.
            </p>
          </div>
          <img src="/banner.jpeg" className="w-full h-[80%]"></img>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default About;
