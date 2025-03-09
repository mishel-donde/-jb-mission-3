import axios from "axios";
import Team from "../models/team/team";
import TeamDraft from "../models/team/teamDraft";

class Teams {
  async getAll(): Promise<Team[]> {
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

  async getById(teamId: string): Promise<Team> {
    try {
      const response = await axios<Team>(
        `${import.meta.env.VITE_REST_SERVER_URL}/teams/${teamId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching team by ID:", error);
      throw new Error("Failed to fetch team");
    }
  }

  async add(draft: TeamDraft): Promise<Team> {
    try {
      const response = await axios.post<Team>(
        `${import.meta.env.VITE_REST_SERVER_URL}/teams`,
        draft
      );
      return response.data;
    } catch (error) {
      console.error("Error adding team:", error);
      throw new Error("Failed to add team");
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      const response = await axios.delete<boolean>(
        `${import.meta.env.VITE_REST_SERVER_URL}/teams/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error removing team:", error);
      throw new Error("Failed to remove team");
    }
  }
}

const teamsService = new Teams();
export default teamsService;
