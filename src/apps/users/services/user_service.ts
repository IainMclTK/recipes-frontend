import { request, Method } from '../../../shared/helpers/api_helper';
import { User } from '../types';

export const createUser = async (user: User): Promise<User> => {
    const request_url: string = process.env.REACT_APP_USER_URL ? process.env.REACT_APP_USER_URL.toString() : '';
    if (!request_url) {
        console.error('REACT_APP_USER_URL not set');
        return {} as User;
    }
    const created_user = await request(request_url, Method.POST, user) as User;
    return created_user;
}

export const getUser = async (email: string): Promise<User> => {
    let request_url: string = process.env.REACT_APP_USER_URL ? process.env.REACT_APP_USER_URL.toString() : '';
    if (!request_url) {
        console.error('REACT_APP_USER_URL not set');
        return {} as User;
    }
    request_url += `?email=${email}`;
    const user = await request(request_url, Method.GET) as User;
    return user;
}

export const saveUserState = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUserState = (): User | null => {
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user) as User;
    }
    return null;
}

export const deleteUserState = () => {
    localStorage.removeItem('user');
}
