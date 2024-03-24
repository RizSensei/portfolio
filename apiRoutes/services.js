import { BASE_URL, ENDPOINTS } from "../apiRoutes/apiRoutes";

export const getProfileInfo = async () => {
    const response = await fetch(`${BASE_URL}/${ENDPOINTS.PROFILE}`);
    const allData = await response.json();
    // console.log(allData);
    const data = allData.data.length > 0 ? allData.data[0] : [];
    // console.log(data);
    return data;
};
