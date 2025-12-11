import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: false,


    register: async (username, email, password) => {
        set({ isLoading: true });
        try {
            // console.log("Sending:", { username, email, password });

            const response = await fetch("https://book-matrix-server.onrender.com/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
                ,
                body: JSON.stringify({
                    username: username.trim(),
                    email: email.trim(),
                    password: password
                })
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Something went wrong");

            // Persist in AsyncStorage
            await AsyncStorage.setItem("user", JSON.stringify(data.user));
            await AsyncStorage.setItem("token", data.token);

            // Update Zustand state
            set({ user: data.user, token: data.token, isLoading: false });

            return { success: true };
        } catch (error) {
            set({ isLoading: false });
            return { success: false, error: error.message };
        }
    },


    login: async (email, password) => {
        set({ isLoading: true });
        try {
            const response = await fetch("https://book-matrix-server.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Something want wrong");

            await AsyncStorage.setItem("user", JSON.stringify(data.email));
            await AsyncStorage.setItem("token", data.token)


            set({ token: data.token, user: data.user, isLoading: false })
        } catch (error) {
            set({ isLoading: false });
            return { success: false, error: error.message };
        }
    },

    checkAuth: async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            const userJson = await AsyncStorage.getItem("user");
            const user = userJson ? JSON.parse(userJson) : null;

            set({ token, user })
        } catch (error) {
            console.log("Auth check failed", error)
        }
    },


    logout: async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");

        set({ token: null, user: null })
    }


}))