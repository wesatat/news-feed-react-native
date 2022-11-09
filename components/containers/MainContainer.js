import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "./../../config/theme";
import { ThemeContext } from "../../context/Themecontext";
import { useContext } from "react";

const MainContainer = ({ children, style, ...props }) => {
  const {theme} = useContext(ThemeContext)
  let activeColors = colors[theme.mode];


  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView
        style={[
          {
            backgroundColor: activeColors.primary,
          },
          style,
        ]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
        <StatusBar style={theme.mode==="dark" ? "light" : "dark"}/>

      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainContainer;
