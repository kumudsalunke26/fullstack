export const signup = async (authData) => {
    try {
        const response = await fetch('http://localhost:8401/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(authData),
            credentials: "include"
        })

        if (!response.ok) {
            const data = await response.json()
            return data
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error.message)
    }
}



export const login = async (authData) => {
    try {
        const response = await fetch('http://localhost:8401/api/auth/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(authData),
            credentials: "include"
        })

        if (!response.ok) {
            const data = await response.json()
            return data
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error.message)
    }
}

export const logout = async () => {
    try {
        const response = await fetch('http://localhost:8401/api/auth/logout', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        })

        if (!response.ok) {
            const data = await response.json()
            return data
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.log("error", error.message)
    }
}


export const checkAuth = async () => {
    try {
        const response = await fetch('http://localhost:8401/api/auth/checkAuth', {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include"
        })

        if (!response.ok) {
            const data = await response.json()
            return  data
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.log("error", error.message)
    }
}