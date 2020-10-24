import Axios from 'axios';


const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "4ba3a673-2ea1-4e6a-a408-4afb1dedd59a" },
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}

export const authMe = () => {
    return instance.get('auth/me')
}

export const getProfile = (userId) => {
    return instance.get(`profile/` + userId,)
}

