import { useState } from "react";

export default function Team() {
  const [teamCount, setTeam] = useState(11);

  const handleAdd = () => {
    setTeam(teamCount + 1);
  };

  const handleReset = () => {
    teamCount = 11;
    setTeam(teamCount);
  };

  const teamStyle = {
    border: "2px solid red",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {teamCount}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
