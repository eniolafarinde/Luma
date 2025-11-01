import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("jwtToken", token);
  } catch (err) {
    console.log("Error storing token:", err);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("jwtToken");
    return token;
  } catch (err) {
    console.log("Error getting token:", err);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("jwtToken");
  } catch (err) {
    console.log("Error removing token:", err);
  }
};
