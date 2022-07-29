import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput, Button
} from "react-native";
import { foldersContainer } from "../data/folders";
import { colorsPicker } from "../data/folders";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

// const FolderScreens = (props: any) => {
//     console.log(props)
//     const {name} = props
//     return(
//         <View style={styles.folderContainer}>
//             <Text style={{color: '#fff'}}>Folder 1</Text>
//             <Text style={styles.text2}> Name: {name}</Text>
//         </View>
//     )
// }

const FolderScreens = () => {

    const navigation = useNavigation();

    const [foldersList, setFolders] = useState(foldersContainer);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const deleteFolder = (id: any) => {
        setFolders(foldersList.filter((item, index) => index != id));
    };
    const addIcon = () => {
        handleModal();
    };
    const addNewFolder = () => {
        handleModal();
        if (name != "" && description != ""){
            setFolders([...foldersList, { name: name, description: description }])
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ height: "90%" }}>
                <ScrollView style={{ width: "100%"}}>
                    {foldersList && foldersList != [] ? (
                        foldersList.map((folder, index) => {
                            return (
                                <View
                                    style={[
                                        styles.folderContainer,
                                        { backgroundColor: `${colorsPicker[index % 3]}` },
                                    ]}
                                    key={index}
                                >
                                    <Text style={{ color: "#fff", fontSize: 10 }}>
                                        Folder {index + 1}
                                    </Text>
                                    <Text style={styles.text2}> Name: {folder.name}</Text>
                                    <Text style={styles.text3}>
                                        {" "}
                                        Description: {folder.description}
                                    </Text>

        
                                        <View>
                                        <TouchableOpacity
                                        onPress={() => {
                                           
                                        }}
                                    >
                                            <View style={[styles.imgContainer, {left: 5}]}>
                                                <Image
                                                    style={styles.img}
                                                    source={require("../assets/pen.png")}
                                                />
                                            </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                        onPress={() => {
                                            deleteFolder(index);
                                        }}
                                    >

                                            <View style={styles.imgContainer}>
                                                <Image
                                                    style={styles.img}
                                                    source={require("../assets/delete.png")}
                                                />
                                            </View>

                                            </TouchableOpacity>
                                        </View>
                                  
                                </View>
                            );
                        })
                    ) : (
                        <Text style={{ color: "#000" }}>There is no notes currently!</Text>
                    )}

                </ScrollView>

                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={() => handleModal()}
                >
                    <View
                        style={{
                            backgroundColor: "#fff",
                            height: "50%",
                            paddingVertical: 30,
                            alignItems: "center",
                            borderRadius: 5
                        }}
                    >
                        <Text>Add a New Folder!</Text>
                        {/* <Button title="Hide modal" onPress={handleModal} /> */}
                        <View style={{ margin: 30 }}>

                            <TextInput
                                value={name}
                                onChangeText={(e) => {
                                    setName(e)
                                }}
                                style={{
                                    fontSize: 20,
                                    // alignSelf: 'stretch',
                                    borderWidth: 1,
                                    borderColor: "#000",
                                    padding: 10,
                                    borderRadius: 5,
                                    backgroundColor: "white",
                                    marginBottom: 30,
                                    width: 300
                                }}
                                placeholder="Enter name"
                            />

                            <TextInput
                                multiline={true}
                                numberOfLines={10}
                                value={description}
                                onChangeText={(e) => {
                                    setDescription(e);
                                }}
                                style={{
                                    fontSize: 20,
                                    borderWidth: 1,
                                    borderColor: "#000",
                                    padding: 25,
                                    borderRadius: 5,
                                    color: '#000',
                                    width: 300
                                }}
                                placeholder="Enter description"
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => {
                                // console.log(index);
                                addNewFolder();
                            }}
                        >
                            <View style={[styles.addNewButton, { width: 80, height: 40, backgroundColor: `${colorsPicker[foldersList.length % 3]}` }]}>
                                <Text style={{ fontSize: 15, color: "white" }}>Add</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </Modal>

            </View>
            <TouchableOpacity
                onPress={() => {
                    setName("")
                    setDescription("")
                    addIcon()
                }}
            >
                <View style={[styles.addNewButton]}>
                    <Text style={{ fontSize: 30, color: "white" }}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 70,
        marginHorizontal: 20,
        flex: 1,
        position: "relative",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
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
    },
    addNewButton: {
        backgroundColor: "#000",
        height: 50,
        width: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    },
});

export default FolderScreens;
