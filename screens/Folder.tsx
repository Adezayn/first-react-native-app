import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput, Button
} from "react-native";
import { colorsPicker } from "../data/folders";

import React, { FormEventHandler } from 'react'

// // interface Folder {
// //     folder?: {
// //       name: string;
// //       description: string;
// //     };
// //   } ;
//   interface Folder {
//     name: string;
//     description: string;
//   } 


const Folder: any = ({folder, index, deleteFolder}: any ) => {
  return (
        <View style={[styles.folderContainer, {backgroundColor: `${colorsPicker[index % 3]}` }]}>
            <Text style={{ color: "#fff", fontSize: 10 }}>
                Folder {index + 1}
            </Text>

            <Text style={styles.text2}> 
                 Title: {folder.name}
            </Text>

            <Text style={styles.text3}>
                Description: {folder.description}
            </Text>


            <View>
                <TouchableOpacity onPress={() => {}}>

                    <View style={[styles.imgContainer, {left: 5}]}>
                        <Image
                            style={styles.img}
                            source={require("../assets/pen.png")}
                        />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => { deleteFolder(index)}}>

                    <View style={styles.imgContainer}>
                        <Image
                            style={styles.img}
                            source={require("../assets/delete.png")}
                        />
                    </View>

                </TouchableOpacity>
            </View>
        </View>
  )
};

const styles = StyleSheet.create({
    folderContainer: {
        width: "100%",
        height: 150,
        display: "flex",
        marginBottom: 30,
        justifyContent: "space-between",
        paddingTop: 20,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    text2: {
        color: "#fff",
        fontSize: 12,
    },
    text3: {
        color: "#fff",
        fontSize: 15,
        paddingBottom: 50,
    },
    imgContainer: {
        backgroundColor: "#fff",
        position: "absolute",
        right: 5,
        bottom: 10,
        height: 30,
        width: 30,
        borderRadius: 5,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        height: 15,
        width: 15,
    }

});

export default Folder;