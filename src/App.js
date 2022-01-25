import { useEffect, useState } from "react";
import { FaTimes, FaTrash, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  let showdate = new Date();
  let displaytodaysdate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  console.log(displaytodaysdate);

  const data = [];
  const [newData, setNewData] = useState(data);
  const [info, setInfo] = useState(data);
  const [error, setError] = useState(false);
  const [alarm, setAlarm] = useState(false);
  const handleSubmit = () => {
    if (newData.length > 20) {
      setError(true);
      return;
    }
    info.push(newData);
    console.log(data);
    setNewData("");
  };
  const handleChange = (e) => {
    setNewData(e);
  };
  const handleDelete = (e) => {
    const latest = info.filter((items) => items != e);
    console.log(latest);
    setInfo(latest);
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }

  return (
    <motion.div
      className="main-div"
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="title">
        <h1>Todo List Project</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e.preventDefault())}>
        {error && (
          <motion.div
            className="error-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="error-text">
              <FaExclamationTriangle />
              <p>Only 20 characters allowed </p>
            </div>
          </motion.div>
        )}

        <input
          type="text"
          placeholder="type your entries here"
          onChange={(e) => handleChange(e.target.value)}
          value={newData}
        />
      </form>
      <div className="list">
        {info.map((item) => {
          return (
            <motion.div className="info" key={Math.random()}>
              <div className="upperlayer">
                <span className="item">{item}</span>
                <FaTrash
                  className="react-trash"
                  onClick={() => handleDelete(item)}
                />
              </div>
              <div className="created-date">
                <p>Created At: </p>
                <p>{displaytodaysdate}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default App;
