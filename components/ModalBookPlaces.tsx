import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native'
import React, {useEffect} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import moment from "moment";
import { MaterialIcons } from '@expo/vector-icons';
import {useSelector} from "react-redux";
import ContainerComments from "@/components/ContainerComments";
import {useGetAllCommentsByBookPlace} from "@/hooks/useGetAllCommentsByBookPlace";

// @ts-ignore
export default function ModalBookPlaces({modalVisible, setModalVisible, selectedMarker}) {
    const momentDate = moment(selectedMarker.date).format('DD/MM/YYYY')

    const {comments, error, loading} = useGetAllCommentsByBookPlace(selectedMarker.id)

    const user = useSelector((state: any) => state.user.value)
    return (
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.firstView}>
                            <Image source={{uri: selectedMarker.photo}} style={styles.photo}/>
                            <View style={styles.containerClosed}>
                                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                                    <AntDesign name="closecircle" size={28} color="#F7F9F9" />
                                </TouchableOpacity>
                            </View>
                            {user.uniqueId === selectedMarker.uniqueId && <View style={styles.containerUpdatePhoto}>
                                <TouchableOpacity>
                                    <FontAwesome name="photo" size={28} color="#F7F9F9" />
                                </TouchableOpacity>
                            </View>}
                        </View>
                        <View style={styles.secondView}>
                            <View>
                                <Text>Posté le {momentDate} </Text>
                            </View>
                            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <Image source={{uri: selectedMarker.photoUser}} style={{width: 30, height: 30, borderRadius: 50}}/>
                                <Text>{selectedMarker.username}</Text>
                            </View>

                        </View>
                        <View style={styles.thirdView}>
                            <View style={styles.containerIcon}>
                                <TouchableOpacity>
                                    <MaterialIcons name="assistant-direction" size={48} color="#294C60" />
                                </TouchableOpacity>
                                <Text>direction</Text>
                            </View>
                            <View style={styles.containerIcon}>
                                <TouchableOpacity>
                                    <FontAwesome name="share-alt-square" size={48} color="#294C60" />
                                </TouchableOpacity>
                                <Text>Partager</Text>
                            </View>
                            <View style={styles.containerIcon}>
                                <TouchableOpacity>
                                    <FontAwesome5 name="pen-square" size={48} color="#294C60" />
                                </TouchableOpacity>
                                <Text>Avis</Text>
                            </View>

                        </View>
                            <ScrollView>
                                <View style={styles.lastView}>
                                    <Text>{selectedMarker.description}</Text>
                                </View>
                                <View style={styles.containerComments}>
                                    <Text style={{fontWeight:"bold"}}>Moyenne : ({comments.length} Avis)</Text>
                                    {comments.map((com: any) => {
                                        return (
                                            <ContainerComments key={com._id} comment={com.comment} user={com.added_by}/>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                    </View>
                </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    firstView: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
    },
    secondView:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
        height: '5%',
        backgroundColor: "#F7F9F9",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#294C60',
        opacity: 0.9,
    },
    photo:{
        width: "100%",
        height: "100%",
    },
    containerClosed:{
        position: 'absolute',
        top: 50,
        right: 0,
        width: 30,
        left:10,
    },
    containerUpdatePhoto:{
        position: 'absolute',
        bottom:10,
        right: 10,
        width: 30,
    },
    thirdView:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '10%',
        backgroundColor: '#F7F9F9',
        borderBottomWidth: 1,
        borderColor: '#294C60',
    },
    containerIcon:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    lastView:{
        paddingTop:20,
        alignItems: 'center',
        width: '100%',
        height: 260,
        backgroundColor: '#F7F9F9',
    },
    containerComments:{
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: '100%',
        height: 1000,
        marginTop: -100,
        padding:10,
        backgroundColor: '#FEFEFC',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});
