const dotenv = require('dotenv')
dotenv.config();

const api_port = process.env.PORT;
const api_url = process.env.API_BASE_URL;

export const getUserFoldersAndPlaygrounds = {
    apiEndpoint = `${api_url}:${api_port}/api/get-all-questions`
}