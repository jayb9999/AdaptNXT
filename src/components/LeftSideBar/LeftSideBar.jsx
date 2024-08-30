import React, { useState } from 'react';
import './LeftSideBar.css';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  const [stateOptn, setStateOptn] = useState(0);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    setIsSidebarOpen(false);
  };

  const onClickHandle = (index) => {
    setStateOptn(index);
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <div className="menu-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </div>
      <ul className={`left-sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
    </div>
  );
};

export default LeftSideBar;
