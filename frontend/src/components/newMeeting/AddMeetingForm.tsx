import React, { useState } from "react";

interface AddMeetingFormProps {
  teamId: string;
}

const AddMeetingForm: React.FC<AddMeetingFormProps> = ({ teamId }) => {
  const [meetingData, setMeetingData] = useState({
    groupId: teamId,
    startDatetime: "",
    endDatetime: "",
    meetingDescription: "",
    meetingRoom: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(meetingData).includes("")) {
      alert("All fields are required!");
      return;
    }

    fetch("http://localhost:3001/meetings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meetingData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Meeting added successfully");
        setMeetingData({
          groupId: teamId,
          startDatetime: "",
          endDatetime: "",
          meetingDescription: "",
          meetingRoom: "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      })
      .catch((error) => {
        console.error("Error adding meeting:", error);
        alert("Error adding meeting");
      });
  };

  return (
    <div>
      <h3>Add New Meeting</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Meeting Description:
          <input
            type="text"
            name="meetingDescription"
            value={meetingData.meetingDescription}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Meeting Room:
          <input
            type="text"
            name="meetingRoom"
            value={meetingData.meetingRoom}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Start Date & Time:
          <input
            type="datetime-local"
            name="startDatetime"
            value={meetingData.startDatetime}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          End Date & Time:
          <input
            type="datetime-local"
            name="endDatetime"
            value={meetingData.endDatetime}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Meeting</button>
      </form>
    </div>
  );
};

export default AddMeetingForm;
