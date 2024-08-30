import React, { useState } from 'react';
import './LeftSideBar.css';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  const [stateOptn, setStateOptn] = useState(0);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [selectedOption, setSelectedOption] = useState(null); // Define selectedOption state

  const LeftSideBarOptions = [
    'Dashboard', 'Inventory', 'Orders', 'Returns', 'Customers', 'Shipping', 
    'Channel', 'Integrations', 'Calculations', 'Reports', 'Account'
  ];
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = (index) => {
    setOpenDropdowns(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const onClickHandle = (index) => {
    setStateOptn(index);
  };

  return (
    <ul className='left-sidebar'>
      {LeftSideBarOptions.map((option, index) => {
        return index < 8 ? (
          <Link to={(index === 0) ? '/' : `/${option.toLowerCase()}`} key={index}>
            <li
              onClick={() => onClickHandle(index)}
              className={stateOptn === index ? 'selected' : ''}
            >
              {option}
            </li>
          </Link>
        ) : (
          <li key={`dropdown-${index}`} onClick={() => toggleDropdown(index)}>
            {selectedOption ? selectedOption : option} ▼
            {openDropdowns[index] && (
              <ul className="dropdown-menu">
                {options.map((opt, subIndex) => (
                  <li key={`${index}-${subIndex}`} onClick={() => handleOptionClick(opt)}>
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default LeftSideBar;
