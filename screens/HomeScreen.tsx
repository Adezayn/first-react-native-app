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
import {ArrowCircleRightIcon} from "react-native-heroicons/outline";


const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
return (
    <View style={{height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image   style={{height: 200, width: 200, marginBottom: 50}} source={require("../assets/pen.png")}/>
        <Text className="text-blue-800 pb-8 text-2xl font-bold">Welcome to the Notes App.  
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
            <View className="flex-row items-center border-2 border-blue-500 px-3">
                <Text className="text-blue-500 text-xl p-1">Next</Text>
                <ArrowCircleRightIcon size={20}/>
            </View>
        </TouchableOpacity>
        
    </View>
)
};

export default HomeScreen;