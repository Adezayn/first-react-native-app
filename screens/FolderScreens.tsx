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
import Folder from "./Folder";
import { colorsPicker } from "../data/folders";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";


const FolderScreens = () => {

    const navigation = useNavigation<StackNavigationProp<any>>();

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
                        foldersList.map((folder: any, index: number) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => { 
                                    navigation.navigate("Page", {folder, index})
                                }}>
                                    <Folder folder={folder} index={index} deleteFolder={deleteFolder}/>
                                </TouchableOpacity>
                            );
                        })
                    ) : (
                        <Text style={{ color: "#000" }}>There is no notes currently!</Text>
                    )}

                </ScrollView>

                <Modal isVisible={isModalVisible} onBackdropPress={() => handleModal()}>
                    <View  className="bg-slate-50 h-1/2 py-6 items-center rounded-sm">
                        <Text>Add a New Folder!</Text>
                        {/* <Button title="Hide modal" onPress={handleModal} /> */}
                        <View className="m-5">

                            <TextInput
                                value={name}
                                onChangeText={(e) => {
                                    setName(e)
                                }}
                                className="text-xl border-2 border-slate-500 mb-5 w-60 bg-slate-300,
                                p-4 rounded-md"
                                placeholder="Enter name"
                            />

                            <TextInput
                                multiline={true}
                                numberOfLines={10}
                                value={description}
                                onChangeText={(e) => {
                                    setDescription(e);
                                }}
                                 className="text-xl border-2 border-slate-500 mb-5 w-60 h-40 bg-slate-300,
                                p-4 rounded-md"
                                placeholder="Enter description"
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => {
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
    addNewButton: {
        backgroundColor: "#000",
        height: 50,
        width: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    }
});

export default FolderScreens;
