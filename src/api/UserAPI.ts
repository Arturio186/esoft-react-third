import { $host } from "./API";

export const getUsers = async () => {
    const { data } = await $host.get('/users');

    return data
}