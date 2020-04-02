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

const resendEmail = (email) => {

    const bodyContent = {
        email
    }
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/resendEmail`, {
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
            const result = { message: "It is not possible to send a new email verification. Try again!" };
            return reject(result);
        });
    });
}

const verifyEmail = (token) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/verifyEmail/${token}`, {
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
            const result = { message: "It is not possible to activate your account. Try to request another email verification!" };
            return reject(result);
        });
    });
}

const login = (user) => {

    const bodyContent = {
        email: user.email,
        password: user.password
    }

    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/login`, {
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

const updatePassword = (email) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/recoverPassword`, {
            method: "POST",
            body: JSON.stringify(email),
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

const requestNewPassword = (email) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/resetCredentials/${email}`, {
            method: "POST",
            body: JSON.stringify(email),
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

export const signupService = {
    signupUser, resendEmail, verifyEmail, login, requestNewPassword, updatePassword
};

