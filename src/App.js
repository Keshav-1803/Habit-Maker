import React, { useState } from "react";
import ParentContainer from "./components/ParentContainer";
import InputHabits from "./components/InputHabits";
import HabitsShow from "./components/HabitsShow";

export default function App() {
  const [habits, setHabits] = useState([]);
  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const handleDelete = (index) => {
    const updateHabit = habits.filter((_,i) => i !== index);
      setHabits(updateHabit);
    }

  const handleDeleteAll = () =>{
    setHabits([]);
  }

  return (
    <div>
      <ParentContainer>
        <h1>HABHIT MAKER</h1>
        <InputHabits onAddHabit={addHabit} handleClearAll={handleDeleteAll}/>
        <HabitsShow habits={habits} handleDelete={handleDelete}/>
      </ParentContainer>
    </div>
  );
}
