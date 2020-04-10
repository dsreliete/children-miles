import {baseUrl} from './baseUrl';

const requestNewPassword = (email) => {

    const bodyContent = {
        email
    }
    
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/requestCredentials`, {
            method: "POST",
            body: JSON.stringify(bodyContent),
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
        .then(response => { return resolve(response) })
        .catch(error => {
            const result = { message: "It is not possible to send a reset password link by email. Try again!" };
            return reject(result);
        });
    });
}

const verifyEmailAndUpdatePassword = (token) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/resetCredentials/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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
        .then(response => { return resolve(response) })
        .catch(error => {
            const result = { message: "It is not possible to reset password. Try to request another password!" };
            return reject(result);
        });
    });
}

const updatePassword = (userId, password) => {

    const bodyContent = {
        password,
        userId
    }
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/updateCredentials`, {
            method: "POST",
            body: JSON.stringify(bodyContent),
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
        .then(response => { return resolve(response) })
        .catch(error => {
            const result = { message: "It is not possible to login. Try again!" };
            return reject(result);
        });
    });
}

export const resetPasswordService = {
    requestNewPassword, 
    verifyEmailAndUpdatePassword, 
    updatePassword
};

