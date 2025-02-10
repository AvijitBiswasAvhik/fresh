import axios from "axios";
import metaData from "./MetaData";

const OpenRouter = axios.create({ baseURL: metaData.openRouter });

OpenRouter.interceptors.request.use((config) => {
    config.headers.Authorization = `${metaData.openRouterToken}`;
    return config;
});

OpenRouter.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) { // Fixed "staus" typo
            return Promise.reject(error); // Ensures proper error handling
        }
        return Promise.reject(error);
    }
);

export default OpenRouter;
