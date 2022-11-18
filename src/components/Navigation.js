import { useState, useContext } from "react";
import profile from "../assets/profile.svg";
import "./Navigation.css";
import NameContext from "../context/NameContext";
import OptionContext from "../context/OptionContext";
import BirthdayContext from "../context/BirthdayContext";

function Navigation() {
  const [page, setPage] = useState(1);
  const { name, setName } = useContext(NameContext);
  const { options, setOptions } = useContext(OptionContext);
  const { birthday, setBirthday } = useContext(BirthdayContext);

  const handleOnChange = (e) => {
    if (e.target.name === "month") {
      //let month = Number(e.target.value);
      if (e.target.value >= 0 && e.target.value <= 12) {
        setBirthday({ ...birthday, month: e.target.value });
      }
    } else if (e.target.name === "day") {
      //can add more validation to different months. example: Feb from 1 to 29 for leap years
      if (e.target.value >= 0 && e.target.value <= 31) {
        setBirthday({ ...birthday, day: e.target.value });
      }
    } else {
      setBirthday({ ...birthday, year: e.target.value });
    }
  };
  const handlePaginationClicked = (e) => {
    if (e.target.name === "page1") {
      setPage(1);
    } else if (e.target.name === "page2") {
      setPage(2);
    } else if (e.target.name === "page3") {
      setPage(3);
    }
  };
  const handleLeftArrow = () => {
    if (page === 3) {
      setPage((currPage) => currPage - 1);
    } else if (page === 2) {
      setPage((currPage) => currPage - 1);
    } else if (page === 1) {
      setPage(3);
    }
  };
  const handleRighArrow = () => {
    if (page === 1) {
      setPage((currPage) => currPage + 1);
    } else if (page === 2) {
      setPage((currPage) => currPage + 1);
    } else if (page === 3) {
      setPage(1);
    }
  };

  return (
    <div
      className="navigation"
      style={{
        marginTop: 100,
      }}
    >
      <div className="image">
        {page !== 1 ? (
          <i
            className="fas fa-chevron-circle-left"
            style={{
              color: "#cccabc",
              fontSize: 25,
              position: "absolute",
              marginRight: 400,
              marginTop: 25,
            }}
            onClick={handleLeftArrow}
          ></i>
        ) : null}
        <hr />
        <img src={profile} alt="profile" />
        {page !== 3 ? (
          <i
            className="fas fa-chevron-circle-right"
            style={{
              color: "#cccabc",
              fontSize: 25,
              position: "absolute",
              marginLeft: 400,
              marginTop: 25,
            }}
            onClick={handleRighArrow}
          ></i>
        ) : null}
      </div>
      {page === 1 ? (
        <div className="form">
          <h2>What's your name?</h2>
          <input
            className="input-name"
            type="text"
            placeholder="John Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      ) : page === 2 ? (
        <div className="form">
          <h2>What do you need help with?</h2>
          <span>(Choose all that apply)</span>
          <div className="checkbox-container">
            <input
              id="optionA"
              type="checkbox"
              checked={options.optionA}
              onChange={() =>
                setOptions({ ...options, optionA: !options["optionA"] })
              }
            />
            <label htmlFor="optionA">Option A</label>
          </div>
          <div className="checkbox-container">
            <input
              id="optionB"
              type="checkbox"
              checked={options.optionB}
              onChange={() =>
                setOptions({ ...options, optionB: !options["optionB"] })
              }
            />
            <label htmlFor="optionB">Option B</label>
          </div>
          <div className="checkbox-container">
            <input
              id="optionC"
              type="checkbox"
              checked={options.optionC}
              onChange={() =>
                setOptions({ ...options, optionC: !options["optionC"] })
              }
            />
            <label htmlFor="optionC">Option C</label>
          </div>
          <div className="checkbox-container">
            <input
              id="optionD"
              type="checkbox"
              checked={options.optionD}
              onChange={() =>
                setOptions({ ...options, optionD: !options["optionD"] })
              }
            />
            <label htmlFor="optionD">Option D</label>
          </div>
        </div>
      ) : page === 3 ? (
        <div className="form">
          <h2>What date?</h2>
          <div className="date">
            <div className="date-containter">
              <div>Month</div>
              <input
                type="text"
                name="month"
                onChange={handleOnChange}
                value={birthday.month}
                style={{ width: 55 }}
              />
            </div>
            <div className="date-containter">
              <div>Day</div>
              <input
                type="text"
                name="day"
                onChange={handleOnChange}
                value={birthday.day}
                style={{ width: 55 }}
              />
            </div>
            <div className="date-containter">
              <div>Year</div>
              <input
                className="input-year"
                type="text"
                onChange={handleOnChange}
                value={birthday.year}
                style={{ width: 55 }}
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="paginations">
        <button
          className={page === 1 ? "button-active" : ""}
          type="button"
          onClick={handlePaginationClicked}
          name="page1"
        ></button>
        <button
          className={page === 2 ? "button-active" : ""}
          type="button"
          onClick={handlePaginationClicked}
          name="page2"
        ></button>
        <button
          className={page === 3 ? "button-active" : ""}
          type="button"
          onClick={handlePaginationClicked}
          name="page3"
        ></button>
      </div>
    </div>
  );
}

export default Navigation;
