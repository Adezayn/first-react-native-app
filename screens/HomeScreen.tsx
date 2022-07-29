import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";


const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
return (
    <View style={{height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image   style={{height: 200, width: 200, marginBottom: 50}} source={require("../assets/pen.png")}/>
        <Text style={{fontSize: 20, marginBottom: 30, fontWeight: 'bold'}}>Welcome to the Notes App.  
           <Image style={{height: 30, width: 30}} source={require("../assets/emoji.png")}/>
        </Text>
        <Button title="Next" onPress={() => navigation.push('Notes')}/>
    </View>
)
};

export default HomeScreen;