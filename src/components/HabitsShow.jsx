import React from "react";
import styles from "./HabitsShow.module.css";

export default function HabitsShow({ habits, handleDelete}) {

  const deleteHabit = (index) => {
    handleDelete(index);
  }
  return (
    <div className={styles.habitList}>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Action</th>
            <th>Motivation</th>
            <th>Environment</th>
            <th>Date</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {habits.map((habit, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{habit.action}</td>
              <td>{habit.motivation}</td>
              <td>{habit.environment}</td>
              <td>{habit.date}</td>
              <td>{habit.time}</td>
              <td><button onClick={() => deleteHabit(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
