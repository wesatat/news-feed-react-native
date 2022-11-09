import { StyleSheet,Text,View } from "react-native";
import { colors } from "../../config/theme";
import StyledText from "../Texts/StyledText";

import { ThemeContext } from './../../context/Themecontext';
import { useContext } from "react";

const SettingsItem = ({ children,label }) => {
  const {theme} = useContext(ThemeContext)
  let activeColors = colors[theme.mode];
  return (
      <View
        style={[
          {
            backgroundColor: activeColors.secondary,
            
          },
          styles.settingsItem,
        ]}
      ><StyledText style={[{color:activeColors.tertiary},styles.label]}>{label}</StyledText>
        {children}

    </View>

  );
};


const styles = StyleSheet.create({
    label:{
        fontStyle:"italic"
    },
    settingsItem:{
 flexDirection:"row",
 justifyContent:"space-between",
 alignItems:"center",
 height:60,
 paddingHorizontal:25,
 marginBottom:2
    }
});

export default SettingsItem;
