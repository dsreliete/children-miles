import {baseUrl} from './baseUrl';

// return authorization header with jwt token
let token = localStorage.getItem('token');
let familyId = localStorage.getItem('familyId');

const registerNewUserRole = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/users`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "Origin": baseUrl,
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else if (response.status !== 200 ) {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }   
        },
        error => { throw error; })
        .then(response => response.json())
        .then(response => {return resolve(response)})
        .catch(error => {
            const result = { success: false, message: "It is not possible to create a new user role. Try later!" };
            return reject(result);
        });
    })
}

const getAllUsers = () => {

    const bodyContent = {
        family: familyId
    }
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/users`, {
            method: "POST",
            body: JSON.stringify(bodyContent),
            headers: {
                "Content-Type": "application/json",
                "Origin": baseUrl,
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else if (response.status !== 200 ) {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }   
        },
        error => { throw error; })
        .then(response => response.json())
        .then(response => {return resolve(response)})
        .catch(error => {
            const result = { success: false, message: "It is not possible to get family users. Try later!" };
            return reject(result);
        });
    })
}

export const newUserService = {
    registerNewUserRole,
    getAllUsers
};

