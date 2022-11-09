import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch ({ message }) {
    alert("StoreData", message);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.setItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch ({ message }) {
    alert("GetData", message);
  }
};
