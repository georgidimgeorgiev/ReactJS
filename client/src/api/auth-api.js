import requester from './requester';

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    console.log(email);
    console.log(password);
    const authData = await requester.post(`${BASE_URL}/login`, {email, password});

    return authData;
}
