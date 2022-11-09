//https://youtu.be/CGpu7TWM0cI?t=1237
import { ThemeContext } from "./context/Themecontext";
import { useState, useEffect } from "react";
import { Appearance } from "react-native";
import RootStack from "./navigators/RootStack";
import { storeData, getData } from "./config/asyncStorage";
import * as SplashScreen from "expo-splash-screen";

//keep splash screen whilst accessing other resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        const systemColorScheme = Appearance.getColorScheme();
        mode = systemColorScheme === "dark" ? "dark" : "light";
        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
    storeData("newsFeedTheme", newTheme);
  };

  //monitor system for changes
  if (theme.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ system: true, mode: colorScheme });
    });
  }

  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData("newsFeedTheme");
      if (themeData) {
        updateTheme(themeData);
      }
    } catch ({ message }) {
      alert("FetchStoredTheme catch",message);
    } finally {
      await setTimeout(() =>  SplashScreen.hideAsync(), 1000);
    }
  };

  useEffect(() => {
    fetchStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <RootStack />
    </ThemeContext.Provider>
  );
}
