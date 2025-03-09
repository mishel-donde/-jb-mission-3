import React, { useEffect, useState } from "react";

interface Meeting {
  id: string;
  meetingDescription: string;
  meetingRoom: string;
  startDatetime: string;
  endDatetime: string;
}

interface MeetingsListProps {
  teamId: string;
}

const MeetingsList: React.FC<MeetingsListProps> = ({ teamId }) => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    if (!teamId) return;

    // Fetching meetings for the selected team
    fetch(`http://localhost:3001/meetings/team/${teamId}`)
      .then((response) => response.json())
      .then((data) => setMeetings(data))
      .catch((error) => console.error("Error fetching meetings:", error));
  }, [teamId]);

  return (
    <div>
      {teamId && (
        <div>
          <h3>Meetings for the selected team</h3>
          <table>
            <thead>
              <tr>
                <th>Meeting Description</th>
                <th>Meeting Room</th>
                <th>Start Date & Time</th>
                <th>End Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting) => (
                <tr key={meeting.id}>
                  <td>{meeting.meetingDescription}</td>
                  <td>{meeting.meetingRoom}</td>
                  <td>{meeting.startDatetime}</td>
                  <td>{meeting.endDatetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MeetingsList;
