import React, { useState } from "react";
import styles from "./InputHabits.module.css";

export default function InputHabits({ onAddHabit , handleClearAll}) {
  const [action, setAction] = useState("");
  const [motivation, setMotivation] = useState("");
  const [environment, setEnvironment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!action || !motivation || !environment || !date || !time) {
      alert("Enter Proper Data to Add Task...");
      return;
    }

    const newHabit = {
      action,
      motivation,
      environment,
      date,
      time,
    };

    onAddHabit(newHabit);

    setAction('');
    setMotivation('');
    setEnvironment('');
    setDate('');
    setTime('');
  };

  const handleClean = () => {
    handleClearAll();
  }

  return (
    <div>
      <form className={styles.form}>
        <input
        className={styles.what}
          type="text"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          placeholder="What to do ?"
        />
        <input
        className={styles.why}
          type="text"
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="Where to do ?"
        />
        <input
        className={styles.where}
          type="text"
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
          placeholder="Why to do ?"
        />
        <input
        className={styles.date}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
        className={styles.time}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit} className={styles.save}>Save</button>
        <button onClick={handleClean} className={styles.clear}>Clean All Habits</button>
      </form>
    </div>
  );
}