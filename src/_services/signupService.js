

import {baseUrl} from './baseUrl';

const signupUser = (user) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/signup`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "Origin": baseUrl
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
            const result = { message: "It is not possible to create a new family user. Try later!" };
            return reject(result);
        });
    })
}

export const signupService = {
    signupUser
};

