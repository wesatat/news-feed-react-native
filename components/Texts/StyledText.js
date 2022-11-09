import { Text } from "react-native";
import { colors } from "../../config/theme";
import { ThemeContext } from "../../context/Themecontext";
import { useContext } from "react";

const StyledText = ({ children, style,small,big,bold, ...props }) => {
  const {theme} = useContext(ThemeContext)
  let activeColors = colors[theme.mode];
 
    return (
      <Text
        style={[
          {
            color: activeColors.tint,
            fontSize: small ? 14 : big ? 24 : 16,
            fontWeight: bold || big ? "bold" : "normal"
          },
          style,
        ]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}

    </Text>

  );
};


export default StyledText;
