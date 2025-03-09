import Team from "../team/team";

export default interface Meeting {
  id: string;
  groupId: string;
  startDatetime: string;
  endDatetime: string;
  meetingDescription: string;
  meetingRoom: string;
  createdAt: string;
  updatedAt: string;
  team: Team;
}
