import React, { useEffect, useState } from "react";

interface Team {
  id: string;
  name: string;
}

interface DisplayTeamsProps {
  onSelectTeam: (teamId: string) => void;
}

const DisplayTeams: React.FC<DisplayTeamsProps> = ({ onSelectTeam }) => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    // Fetching team data
    fetch("http://localhost:3005/teams") // Change the URL to your API
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error fetching teams:", error));
  }, []);

  return (
    <div>
      <h3>Select a Development Team</h3>
      <select onChange={(e) => onSelectTeam(e.target.value)} defaultValue="">
        <option value="" disabled>
          Select a team
        </option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DisplayTeams;
