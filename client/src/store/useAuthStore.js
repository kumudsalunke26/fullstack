import { create } from "zustand";
import { persist } from "zustand/middleware";

// Update to use import.meta.env
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const useAuthStore = create(persist(
  (set, get) => ({
    authUser: null,
    stories: null,
    token: null,

    initializeAuth: () => {
      const persistedState = JSON.parse(localStorage.getItem("auth-token"));
      if (persistedState?.state?.token) {
        set({ token: persistedState.state.token });
      }
    },


    setUser: (user) => {
      set({ authUser: user });
    },

    setToken: (id) => {
      set({ token: id });
    },

    checkAuth: async () => {
      try {
        const token = get().token;
        if (!token) {
          return null
        }
        console.log("token in checkAuth", token);
        const response = await fetch("http://localhost:8401/api/auth/checkAuth", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });

        if (!response.ok) {
          const data = await response.json();
          console.log("data", data);
          return data; // Return error details
        }
        const data = await response.json();
        console.log(data)
        set({ authUser: data.user });
        return data;
      } catch (error) {
        console.log("error", error.message);
      }
    },

    login: async (details) => {
      try {
        const response = await fetch("http://localhost:8401/api/auth/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(details),
          credentials: "include",
        });

        if (!response.ok) {
          const data = await response.json();
          return data;
        }

        const data = await response.json();
        console.log("msg :", data.message)
        set({ authUser: data.user });
        console.log(data)
        return data;
      } catch (error) {
        console.log("Error", error.message);
      }
    },

    logout: async () => {
      try {
        const response = await fetch("http://localhost:8401/api/auth/logout", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          const data = await response.json();
          return data;
        }

        const data = await response.json();
        set({ authUser: null });
        return data;
      } catch (error) {
        console.log("error", error.message);
      }
    },

    signup: async (details) => {
      try {
        const response = await fetch("http://localhost:8401/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(details),
          credentials: "include",
        });

        if (!response.ok) {
          const data = await response.json();
          return data;
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.log("Error", error.message);
      }
    },

    publishStory: async (story) => {
      const token = get().token
      if (!token) {
        return null
      }
      console.log("Bearer in publishstory", token)
      try {
        const response = await fetch("http://localhost:8401/api/stories/publish", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(story),
          credentials: "include",
        });

        if (!response.ok) {
          const data = await response.json();
          console.log(data)
          return data;
        }

        const data = await response.json();
        return data
      } catch (error) {
        console.log("error while publishing story", error.message);
      }
    },

    fetchPendingStories: async () => {
      const token = get().token
      if (!token) {
        return null
      }
      console.log("token while fetching", token)
      try {
        const response = await fetch('http://localhost:8401/api/stories/pending', {
          method: 'GET',
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include', // For session-based auth
        });
        if (!response.ok) {
          const data = await response.json();
          console.log(data)
          return data;
        }

        const data = await response.json();
        console.log(data);
        return data.pendingStories
      } catch (error) {
        console.error('Error fetching pending stories:', error);
      }
    },

    approveStory: async (storyId) => {
      const token = get().token
      if (!token) {
        return null
      }
      const storyID = { storyId };
      try {
        const response = await fetch(`http://localhost:8401/api/stories/approve/${storyId}`, {
          method: 'PATCH',
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(storyID),
          credentials: 'include', // For session-based auth
        });
        const data = await response.json();
        return data
      } catch (error) {
        console.error('Error sending approval request:', error);
      }
    },

    fetchapprovedStory: async () => {
      try {
        const response = await fetch("http://localhost:8401/api/stories/approved", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        });

        // Check the raw response to see if it's valid JSON
        const rawData = await response.text(); // Read response as text first
        console.log("Raw response:", rawData); // Log the raw response

        // Handle unsuccessful responses
        if (!response.ok) {
          try {
            const errorData = JSON.parse(rawData); // Try parsing the error response
            console.error("Failed to fetch approved stories:", errorData);
          } catch (e) {
            // If JSON parsing fails, it might be an HTML error page
            console.error("Error parsing response as JSON:", e);
            console.error("Raw error response:", rawData);
          }
          return null; // Return null or any error object you prefer
        }

        // Try to parse the successful response
        let data;
        try {
          data = JSON.parse(rawData);
        } catch (e) {
          console.error("Error parsing the successful response as JSON:", e);
          return null;
        }

        // If the response is valid, set the stories
        set({ stories: data.approvedStories });
        return data;

      } catch (error) {
        console.error("Error while fetching approved stories:", error.message);
        return null; // Return null or an error object to indicate failure
      }
    }


  }),
  {
    name: "auth-token", // Store name
    getStorage: () => localStorage, // Use localStorage to persist the state
  }
));
