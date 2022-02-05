import Api from '@/service/Api'

export default {
    async getCompetitions() {
        const response = await Api.get('/competitions');
        return response.data.competitions
    },
    async getMatches(competitionID, params = "") {
        const response = await Api.get(`/competitions/${competitionID}/matches${params}`);
        return response.data
    },
    async getTeams() {
        const response = await Api.get(`/teams`);
        return response.data
    },
    async getTeamData(teamID) {
        const response = await Api.get(`/teams/${teamID}`);
        return response.data
    },
    async getTeamMatches(teamID, params = "") {
        const response = await Api.get(`/teams/${teamID}/matches${params}`);
        return response.data.matches
    }
}