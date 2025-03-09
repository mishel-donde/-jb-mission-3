import axios from "axios";
import Meeting from "../models/meeting/meeting";
import Draft from "../models/meeting/meetingDraft";
import Team from "../models/team/team";

class Meetings {
  async getByTeamId(teamId: string): Promise<Meeting[]> {
    try {
      const response = await axios<Meeting[]>(
        `${import.meta.env.VITE_REST_SERVER_URL}/meetings/team/${teamId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching meetings by team:", error);
      throw new Error("Failed to fetch meetings by team");
    }
  }

  async add(draft: Draft): Promise<Meeting> {
    try {
      const response = await axios.post<Meeting>(
        `${import.meta.env.VITE_REST_SERVER_URL}/meetings`,
        draft
      );
      return response.data;
    } catch (error) {
      console.error("Error adding meeting:", error);
      throw new Error("Failed to add meeting");
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      const response = await axios.delete<boolean>(
        `${import.meta.env.VITE_REST_SERVER_URL}/meetings/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error removing meeting:", error);
      throw new Error("Failed to remove meeting");
    }
  }

  async getAllTeams(): Promise<Team[]> {
    try {
      const response = await axios<Team[]>(
        `${import.meta.env.VITE_REST_SERVER_URL}/teams`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching teams:", error);
      throw new Error("Failed to fetch teams");
    }
  }
}

const meetingsService = new Meetings();
export default meetingsService;
