// import { create } from "zustand";


// export const useAuthStore = create((set, get) => ({
//     authUser: null,
//     stories: null,
//     checkAuth: async () => {
//         try {
//             const baseUrl = import.meta.env.MODE === "development" 
//                 ? 'http://localhost:8401/api/auth/checkAuth' 
//                 : '/api';
    
//             const response = await fetch(baseUrl, {
//                 method: "GET",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 credentials: "include"
//             });
    
//             const data = await response.json();
    
//             if (!response.ok) {
//                 return data; // Return error details
//             }
    
//             set({ authUser: data.user });
//             return data;
//         } catch (error) {
//             console.log("error", error.message);
//         }
//     },


//     login: async (details) => {
//         try { const baseUrl = import.meta.env.MODE === "development" 
//             ? 'http://localhost:8401/api/auth/login' 
//             : '/api';

//         const response = await fetch(baseUrl, {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 body: JSON.stringify(details),
//                 credentials: "include"
//             })

//             if (!response.ok) {
//                 const data = await response.json()
//                 console.log(data.success);
//                 console.log("id",data);
//                 return data
//             }

//             const data = await response.json()
//             console.log(data.success);
//             console.log("name",data);
//             set({ authUser: data.user })
//             console.log("Authuser from store : ", data.user);

//             return data
//         } catch (error) {
//             console.log("Error", error.message)
//         }
//     },


//     logout: async () => {
//         try {
//             const baseUrl = import.meta.env.MODE === "development" 
//                 ? 'http://localhost:8401/api/auth/logout' 
//                 : '/api';
    
//             const response = await fetch(baseUrl, {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 credentials: "include"
//             })

//             if (!response.ok) {
//                 const data = await response.json()
//                 return data
//             }

//             const data = await response.json()
//             set({ authUser: null })
//             return data
//         } catch (error) {
//             console.log("error", error.message)
//         }
//     },



//     signup: async (details) => {
//         console.log("details in authstore",details);
//         try {
//             const baseUrl = import.meta.env.MODE === "development" 
//                 ? 'http://localhost:8401/api/auth/signup' 
//                 : '/api';
    
//             const response = await fetch(baseUrl, {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 body: JSON.stringify(details),
//                 credentials: "include"
//             })

//             if (!response.ok) {
//                 const data = await response.json()
//                 return data
//             }
//             const data = await response.json()
//             return data
//         } catch (error) {
//             console.log("Error", error.message)
//         }
//     },

//     publishStory: async (story) => {
//         try {
//             const baseUrl = import.meta.env.MODE === "development" 
//                 ? 'http://localhost:8401/api/stories/publish' 
//                 : '/api';
    
//             const response = await fetch(baseUrl, {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 body: JSON.stringify(story),
//                 credentials: "include"
//             })

//             if (!response.ok) {
//                 const data = await response.json()
//                 console.log(data.message)
//                 return data
//             }
//             const data = await response.json()
//             console.log(data.message)
//         } catch (error) {
//             console.log("error while publishing story", error.message)
//         }
//     },

//     approvedStory: async () => {
//         try {
//             const baseUrl = import.meta.env.MODE === "development" 
//             ? 'http://localhost:8401/api/stories/approved' 
//             : '/api';

//         const response = await fetch(baseUrl, {
//                 method: "GET",
//                 headers: {
//                     "Content-type": "application/json"
//                 },
//                 credentials: "include"
//             })

//             if (!response.ok) {
//                 console.log("hii");
//                 const data = await response.json()
//                 return data
//             }

//             console.log("hiiiii");
//             const data = await response.json()
//             set({ stories: data.approvedStories });
//             console.log("data stories", data);
//             return data
//         } catch (error) {
//             console.log("error while approved fetching story", error.message)
//         }
//     }
// }))



import { create } from "zustand";

// Update to use import.meta.env
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const useAuthStore = create((set, get) => ({
  authUser: null,
  stories: null,

  // Dynamically determine the backend URL
  getBaseUrl: () => {
    return import.meta.env.MODE === "development"
      ? 'http://localhost:8401' // Local backend URL for development
      : backendUrl; // Use VITE_BACKEND_URL for production
  },

  checkAuth: async () => {
    try {
      const baseUrl = get().getBaseUrl() + '/api/auth/checkAuth';
      const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        return data; // Return error details
      }

      set({ authUser: data.user });
      return data;
    } catch (error) {
      console.log("error", error.message);
    }
  },

  login: async (details) => {
    try {
      const baseUrl = get().getBaseUrl() + '/api/auth/login';
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(details),
        credentials: "include"
      });

      if (!response.ok) {
        const data = await response.json();
        console.log(data.success);
        return data;
      }

      const data = await response.json();
      set({ authUser: data.user });
      console.log("Authuser from store: ", data.user);
      return data;
    } catch (error) {
      console.log("Error", error.message);
    }
  },

  logout: async () => {
    try {
      const baseUrl = get().getBaseUrl() + '/api/auth/logout';
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        credentials: "include"
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
    console.log("details in authstore", details);
    try {
      const baseUrl = get().getBaseUrl() + '/api/auth/signup';
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(details),
        credentials: "include"
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
    try {
      const baseUrl = get().getBaseUrl() + '/api/stories/publish';
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(story),
        credentials: "include"
      });

      if (!response.ok) {
        const data = await response.json();
        console.log(data.message);
        return data;
      }
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log("error while publishing story", error.message);
    }
  },

  approvedStory: async () => {
    try {
      const baseUrl = get().getBaseUrl() + '/api/stories/approved';
      const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        credentials: "include"
      });

      if (!response.ok) {
        const data = await response.json();
        return data;
      }

      const data = await response.json();
      set({ stories: data.approvedStories });
      console.log("data stories", data);
      return data;
    } catch (error) {
      console.log("error while approved fetching story", error.message);
    }
  }
}));
