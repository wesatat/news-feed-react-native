import { FlatList } from "react-native";
import { colors } from "./../../config/theme";
import NewsItem from "./NewsItem";
const NewsSection = ({ data }) => {

  return (
    <FlatList
    data={data}
    renderItem={({item})=><NewsItem {...item}/>}
    keyExtractor = {({id})=> id.toString()}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingLeft:25,
        paddingTop:25
    }}
    />
  );
};



export default NewsSection;
