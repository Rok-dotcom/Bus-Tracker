import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080",
});


// Request Interceptor
api.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/// 401 handler
api.interceptors.response.use(

    (response) => {
        return response;
    },

    (error) => {

        if (error.response && error.response.status === 401) {

            localStorage.removeItem("token");

            window.location.href = "/login";
        }

        return Promise.reject(error);
    }

);


            /// User

// POST User Login
export const loginUser = (user) => {
    return api.post("/user/login", user);
};
// POST User Register
export const registerUser = (user) => {
    return api.post("/user/register", user);
};

            /// for bus
// GET
export const getAllBuses = () => {
    return api.get("/bus/busInfo");
}

// GET by route
export const getBusByRoute = (keyword) => {
    return api.get(`bus/getByRoute/${keyword}`);
}

// POST 
export const addBus = (bus) => {
    return api.post(`bus/addBus`,bus);
}

// PUT
export const editBus = (updatedBus,id) => {
    return api.put(`bus/updateBusInfo/${id}`,updatedBus);
}

// DELETE
export const deleteBusById = (id) => {
    return api.delete(`/bus/deleteBus/${id}`);
}

        /// for User Feedback Or Suggestions

// Post suggestion
export const addSuggestion = (suggestion) => {
    return api.post(`/userHelp/suggestion`,suggestion);
}

// Post feedback
export const addFeedback  = (feedback) => {
    return api.post(`/userHelp/feedback`,feedback);
}


export default api;