import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { colors } from "./../../config/theme";
import { useNavigation } from "@react-navigation/native";
import StyledText from "../Texts/StyledText";
import { useContext } from 'react';
import { ThemeContext } from "../../context/Themecontext";

const NewsItem = ({
  image,
  title,
  author,
  avatar,
  date,
  content,
  ...props
}) => {

  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", {
          image,
          title,
          author,
          avatar,
          date,
          content,
        });
      }}
      style={[{ backgroundColor: activeColors.secondary }, styles.container]}
      {...props}
    >
      <Image source={image} style={styles.image} />
      <View style={styles.bottomSection}>
        <StyledText
          numberOfLines={3}
          bold
          style={[{ color: activeColors.accent }, styles.title]}
        >
          {title}
        </StyledText>
      </View>
      <View style={styles.authorRow}>
        <View style={styles.author}>
          <Image style={styles.avatar} source={avatar} />
          <StyledText numberOfLines={2} bold>
            {author}
          </StyledText>
        </View>

        <StyledText
          style={[{ color: activeColors.tertiary }, styles.date]}
          small
        >
          {date}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 370,
    width: 300,
    borderRadius: 25,
    marginRight: 20,
  },
  image: {
    width: 300,
    height: 190,
    borderRadius: 25,
  },
  bottomSection: {
    padding: 25,
    // flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 19,
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    flex: 3,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: 15,
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  date: {
    textAlign: "right",
    marginRight: 15,
    flex: 2,
  },
});

export default NewsItem;
