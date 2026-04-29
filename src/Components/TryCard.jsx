import { useState } from "react";

const TryCard = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white p-5 rounded-4xl">
      {submitted ? (
        <h2 className="font-bold text-2xl text-green-600 text-center py-5">Request Sent!</h2>
      ) : (
        <>
          <div className="card-header flex justify-center items-center font-bold text-3xl">
            <span>🎮</span>
            <h1>Try This Toy!</h1>
          </div>
          <div className="my-4 text-violet-900 font-medium">
            <label htmlFor="name">Your Name</label>
            <br />
            <input type="text" id="name" placeholder="Google User" className="w-full rounded-xl p-2" required />
          </div>
          <div className="mb-4 text-violet-900 font-medium">
            <label htmlFor="email">Your Email</label>
            <br />
            <input type="email" id="email" placeholder="googleuser@gmail.com" className="w-full rounded-xl p-2" required />
          </div>
          <button type="submit" className="btn btn-primary w-full rounded-3xl">Try Now</button>
        </>
      )}
    </form>
  );
};

export default TryCard;