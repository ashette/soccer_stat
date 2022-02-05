export default {
    handleError(error) {
        const response = error.response;
        if (response && response.status) {
            return response.status;
        }

        return 'Network error'
    }
}