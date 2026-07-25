import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080",
});

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

export default api;