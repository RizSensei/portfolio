import { BASE_URL, ENDPOINTS } from "../apiRoutes/apiRoutes";

export const getProfileInfo = async () => {
    const response = await fetch(`${BASE_URL}/${ENDPOINTS.PROFILE}`);
    const allData = await response.json();
    const data = allData.data[0]
    return data;
};
