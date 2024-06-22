import { useState } from "react";
import "./header.css";

const Header = ({ UserData }) => {
  const [year, setYear] = useState(2017);

  const renderOptions = () => {
    return (
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        {UserData.map((each) => (
          <option key={each.id} value={each.year}>
            {each.year}
          </option>
        ))}
      </select>
    );
  };
  return (
    <header style={{ backgroundColor: "grey", padding: "10px" }}>
      <h1>Dashboard app</h1>
      <div className="header-sub-container">
        <p>Select Year</p>
        {renderOptions()}
      </div>
    </header>
  );
};

export default Header;
