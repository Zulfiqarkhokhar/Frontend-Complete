import React from "react";

const Events = () => {
  return (
    <div>
      <ClickMeButton />
      <RandomNumberButton />
      <Copy />
    </div>
  );
};

const ClickMeButton = () => {
  return (
    <button
      onClick={() => {
        console.log("You clicked me");
      }}
    >
      click me
    </button>
  );
};
const RandomNumberButton = () => {
  const handleClick = () => {
    const random = Math.round(Math.random() * 100);
    console.log(random);
  };
  return <button onClick={handleClick}>Generate Number</button>;
};

const Copy = () => {
  function handleCopy() {
    console.log("Your are trying to copy my content");
  }
  return (
    <p onCopy={handleCopy}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis
      ipsum ipsam dignissimos nihil necessitatibus porro minima, expedita quasi
      consequuntur fugiat veritatis cumque quos velit quaerat nobis, repudiandae
      error laudantium!
    </p>
  );
};

export default Events;
