import { useRoute} from "@react-navigation/native";
import { colorsPicker } from "../data/folders";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
    SafeAreaView,
} from "react-native";
import { SearchIcon, CameraIcon, ColorSwatchIcon, ShareIcon } from "react-native-heroicons/outline";


const PagesScreen = () => {
const navigation = useNavigation();
    const {params: {
        folder: { name,
          description
        }, index
    }} : any = useRoute();
    const [value, setValue] = useState(`${description}`);
    const color = colorsPicker[index % 3] ;
    // const {name, description}: {name: string; description: string} = routes.params;

    return(
        <SafeAreaView style={{backgroundColor: `#fff`, flex: 1}} className="relative">
            <View className="border-b-2 border-b-slate-300 items-end pt-8 flex-row space-x-4 justify-center">
            <Text className='text-stone-800 text-center text-2xl'>Title:</Text>
            <Text className='text-stone-900 text-center text-3xl'>{name}</Text>
            </View>

            <ScrollView>
            <TextInput className="w-full py-6 px-2 cursor-text" 
                     multiline={true} 
                     placeholder={description}
                     value = {value}
                     onChangeText={(e) => {
                        setValue(e)
                    }}
                     >

          </TextInput>
            </ScrollView>
          
          <View className="bg-neutral-100 border border-y-slate-1000 flex-row flex space-x-12 justify-center absolute bottom-10 w-full py-3">
                <SearchIcon size={20} color={color}/>
                <ShareIcon size={20} color={color}/>
                <CameraIcon size={20} color={color}/>
                <ColorSwatchIcon size={20} color={color}/>
          </View>
        </SafeAreaView>
    )
};

export default PagesScreen;