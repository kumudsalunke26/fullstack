import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
    authUser: null,
    stories: null,
    checkAuth: async () => {
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
                return data
            }
            const data = await response.json()
            set({ authUser: data.user })
            return data
        } catch (error) {
            console.log("error", error.message)
        }
    },


    login: async (details) => {
        try {
            const response = await fetch('http://localhost:8401/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(details),
                credentials: "include"
            })

            if (!response.ok) {
                const data = await response.json()
                console.log(data.success);
                console.log("id",data);
                return data
            }

            const data = await response.json()
            console.log(data.success);
            console.log("name",data);
            set({ authUser: data.user })
            console.log("Authuser from store : ", data.user);

            return data
        } catch (error) {
            console.log("Error", error.message)
        }
    },


    logout: async () => {
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
            set({ authUser: null })
            return data
        } catch (error) {
            console.log("error", error.message)
        }
    },



    signup: async (details) => {
        console.log("details in authstore",details);
        try {
            const response = await fetch('http://localhost:8401/api/auth/signup', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(details),
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
    },

    publishStory: async (story) => {
        try {
            const response = await fetch("http://localhost:8401/api/stories/publish", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(story),
                credentials: "include"
            })

            if (!response.ok) {
                const data = await response.json()
                console.log(data.message)
                return data
            }
            const data = await response.json()
            console.log(data.message)
        } catch (error) {
            console.log("error while publishing story", error.message)
        }
    },

    approvedStory: async () => {
        try {
            const response = await fetch("http://localhost:8401/api/stories/approved", {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include"
            })

            if (!response.ok) {
                console.log("hii");
                const data = await response.json()
                return data
            }

            console.log("hiiiii");
            const data = await response.json()
            set({ stories: data.approvedStories });
            console.log("data stories", data);
            return data
        } catch (error) {
            console.log("error while approved fetching story", error.message)
        }
    }
}))

