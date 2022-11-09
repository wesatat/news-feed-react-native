import { StyleSheet, View, Image } from "react-native";
import { colors } from "../config/theme";
import StyledText from "../components/Texts/StyledText";
import { ThemeContext } from "../context/Themecontext";
import { useContext } from "react";
//components
import MainContainer from "../components/containers/MainContainer";

export default function Details({ route }) {
  const {theme} = useContext(ThemeContext)
  let activeColors = colors[theme.mode];


  const { image, title, author, avatar, date, content } = route?.params;
  return (
    <MainContainer style={{ backgroundColor: activeColors.secondary }}>
      <Image source={image} style={styles.image} />
      <View
        style={[
          { backgroundColor: activeColors.secondary },
          styles.bottomSection,
        ]}
      >
        <StyledText
          numberOfLines={3}
          style={[{ color: activeColors.accent }, styles.title]}
          big
        >
          {title}
        </StyledText>

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
        <StyledText style={styles.content}>{content}</StyledText>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  bottomSection: {
    padding: 25,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    marginbottom: 20,
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
    marginTop: 15,
  },
  avatar: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 25,
  },
  date: {
    textAlign: "right",
    marginRight: 15,
    flex: 2,
  },
  content: {
    marginTop: 15,
  },
});
