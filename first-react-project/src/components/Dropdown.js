import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleSelect(option)}>
        {option.label}
      </div>
    );
  });
  return (
    <>
      <div onClick={handleClick}>
        {!selectedOption ? "선택하기" : selectedOption.label}
      </div>
      {isOpen && <>{renderedOptions}</>}
    </>
  );
};

export default Dropdown;
