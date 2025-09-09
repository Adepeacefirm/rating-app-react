import React, { useState } from "react";
import { assets } from "./assets/assets";

const App = () => {
  const [rating, setRating] = useState(null);
  const [submit, setSubmit] = useState(false);
  const handleRating = (value) => {
    setRating(value);
  };
  const handleSubmit = () => {
    if (rating) {
      setSubmit(true);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-black ">
        {!submit ? (
          <main className="bg-[hsl(213,19%,18%)] w-4/5 sm:w-2/5 lg:w-1/4 mx-auto p-4 rounded-2xl">
            <div className="rounded-full w-6 h-6 bg-[hsl(213,19%,30%)] flex justify-center items-center">
              <img className="w-3 h-3" src={assets.icon_star} alt="" />
            </div>
            <h1 className="text-white text-xl font-bold my-4">
              How did we do?
            </h1>
            <p className="text-[hsl(217,12%,63%)] text-xs mb-3 leading-5">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex justify-center">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  onClick={() => {
                    handleRating(num);
                  }}
                  key={num}
                  className={`mx-2 rounded-full w-8 h-8 text-center text-sm text-[hsl(217,12%,63%)] flex justify-center items-center hover:cursor-pointer hover:transition-colors duration-300 ${
                    num === 5 ? "hover:bg-[hsl(25,97%,53%)] hover:text-black" : "hover:bg-white hover:text-black"
                  } ${
                    rating === num
                      ? num === 5
                        ? "bg-[hsl(25,97%,53%)] text-black"
                        : "bg-white text-black"
                      : "bg-[hsl(213,19%,30%)]"
                  } 
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="my-5 w-full bg-[hsl(25,97%,53%)] rounded-2xl py-2 font-medium hover:bg-white hover:cursor-pointer hover:transition-colors duration-300"
            >
              {" "}
              SUBMIT{" "}
            </button>
          </main>
        ) : (
          <div>
            <section className="bg-[hsl(213,19%,18%)] w-4/5 sm:w-[49%] mx-auto p-5 rounded-2xl">
              <img
                className="mx-auto w-2/5 my-3"
                src={assets.illustration_thank_you}
                alt=""
              />
              <span className="block text-center mx-auto text-xs text-[hsl(25,97%,53%)] bg-[hsl(213,19%,28%)] rounded-2xl w-35 py-1 px-2 my-5">
                You selected {rating} out of 5{" "}
              </span>
              <h1 className="text-center text-white text-lg mb-3">
                Thank you!
              </h1>
              <p className="text-center text-xs text-[hsl(217,12%,63%)]">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
