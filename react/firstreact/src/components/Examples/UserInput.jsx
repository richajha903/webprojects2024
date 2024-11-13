import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import InputForm from "./InputForm";
import ShowButton from "./ShowButton";

const UserInput = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
    setShowProfileCard(false);
  };

  //for button
  const [showProfileCard, setShowProfileCard] = useState(false);
  const handleClick = () => {
    setShowProfileCard(true);
  };
  // age
  const [age, setAge] = useState("");
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <InputForm
        name={name}
        handleChange={handleChange}
        age={age}
        handleAge={handleAge}
      />
      <br />
      <ShowButton handleClick={handleClick} />
      {showProfileCard && <ProfileCard name={name} age={age} />}
    </>
  );
};

export default UserInput;
