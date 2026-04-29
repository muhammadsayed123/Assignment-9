// import React from 'react';

const TryCard = () => {
  return (
    <div>
      <form action="" className="bg-white p-5 rounded-4xl">
        <div className="card-header flex justify-center items-center font-bold text-3xl">
          <span>🎮</span>
          <h1>Try This Toy!</h1>
        </div>

        <div class="my-4 text-violet-900 font-medium">
          <label for="name">Your Name</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Google User"
            className="w-full rounded-xl p-2"
          ></input>
        </div>

        <div class="mb-4 text-violet-900 font-medium">
          <label for="email">Your Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="googleuser@gmail.com"
            className="w-full rounded-xl p-2"
          ></input>
        </div>

        <button class="btn btn-primary w-full rounded-3xl">Try Now</button>
      </form>
    </div>
  );
};

export default TryCard;
