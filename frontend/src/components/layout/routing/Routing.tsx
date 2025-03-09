import { Navigate, Route, Routes } from "react-router-dom";
// import DisplayTeamsProps from "../../team/DisplayTeams";
import Meeting from "../../meeting/MeetingsList";
import AddMeetingForm from "../../newMeeting/AddMeetingForm";
import NotFound from "../not-found/NotFound";

export default function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/teams" />} />
      {/* <Route path="/teams" element={<DisplayTeamsProps />} /> */}
      <Route path="/teams/:teamId/meetings" element={<Meeting teamId={""} />} />
      <Route
        path="/teams/:teamId/add-meeting"
        element={<AddMeetingForm teamId={""} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
