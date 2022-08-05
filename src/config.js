const token = window.localStorage ? window.localStorage.getItem("authToken") : "";


const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};


export default config;