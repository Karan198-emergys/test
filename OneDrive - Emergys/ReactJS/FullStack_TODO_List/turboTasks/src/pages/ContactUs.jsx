import React from "react";

const ContactUs = () => {
  return (
    <div className=" h-screen w-[100%] flex items-center justify-center bg-gray-100">
      <div className="w-3/4 flex flex-col justify-center gap-3 pl-6 pb-20">
        <h1 className=" text-4xl font-semibold pb-20">Contact Us</h1>
        <p>
          Here you can Contact US easily if want to <br />
          Know something about the feature or giving some of the suggestions
        </p>
        <div className="contactSource flex gap-4 text-xl">
          <span>
            {" "}
            <b>Email :</b> KaranDabre198@gmail.com
          </span>
          <span>
            <b>Contact Number :</b> +91-909-6839-022
          </span>
        </div>
      </div>
      <div className="w-1/2">
        <div className=" w-full flex flex-col items-center justify-center  gap-6">
          <div className=" w-full pl-28 text-centre contactUsHeading text-4xl font-semibold">
            Talk to Us
          </div>
          <form
            action=""
            className=" w-full flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className=" ">
              <input
                type="text"
                className=" p-3 h-14 w-[75%] border-0 rounded-3xl shadow-2xl bg-white outline-0"
                placeholder="Please enter your name"
              />
            </div>
            <div className=" ">
              <input
                type="tel"
                className=" p-3 border-0 h-14 w-[75%] rounded-3xl shadow-2xl bg-white outline-0"
                placeholder=" Please enter your contact Number "
              />
            </div>
            <div className=" ">
              <textarea
                name=""
                id=""
                className=" message p-3  h-24 w-[75%]  border-0 rounded-3xl shadow-2xl bg-white outline-0"
                placeholder="Enter Your message to us "
              ></textarea>
            </div>
            <div className=" flex justify-center w-[75%]">
              <button
                type="submit"
                className=" w-[60%] text-white font-medium text-xl shadow-2xl bg-blue-400 h-14 border-0 rounded-2xl cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
