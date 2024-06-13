import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native'

//LIBRARY
import moment from "moment";

import {handleLinking} from "@/functions/navigationMap";

//ICONS
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//COMPONENTS
import ContainerComments from "@/components/ContainerComments";

//FUNCTIONS
import {uploadPhoto} from "@/functions/uploadPhoto";

//HOOKS
import {useGetAllCommentsByBookPlace} from "@/hooks/useGetAllCommentsByBookPlace";
import {useDispatch, useSelector} from "react-redux";

//import constants
import {iconsMaterial} from "@/constants/icons";
import ContainerDescription from "@/components/ContainerDescription";
import {useEffect, useState} from "react";
import ModalComment from "@/components/ModalComment";

import {getAllBookPlaces} from "@/functions/getAllBookPlaces";

// @ts-ignore
export default function ModalBookPlaces({modalVisible, setModalVisible, selectedMarker, setSelectedMarker}) {
    const momentDate = moment(selectedMarker.date).format('DD/MM/YYYY')
    // const {comments, error, loading} = useGetAllCommentsByBookPlace(selectedMarker.id)

    const [modalCommentVisible, setModalCommentVisible] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user.value)

    useEffect(() => {
        console.log("test")
    }, []);

    const handleUploadPhoto = async () => {
        const newPhotoUrl = await uploadPhoto(selectedMarker.id, dispatch);
        // @ts-ignore
        setSelectedMarker({...selectedMarker,
            photo: newPhotoUrl
        });
    };

    return (
                <Modal animationType="slide" transparent={true} visible={modalVisible}>

                    {/* below modal visible or not comment*/}
                    {modalCommentVisible && <ModalComment setModalCommentVisible={setModalCommentVisible} bookPlaceId={selectedMarker.id}/>}

                    <View style={styles.centeredView}>
                        <View style={styles.firstView}>
                            <Image source={{uri: selectedMarker.photo}} style={styles.photo}/>
                            <View style={styles.containerClosed}>
                                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                                    <AntDesign name="closecircle" size={28} color="#F7F9F9" />
                                </TouchableOpacity>
                            </View>
                            {user.uniqueId === selectedMarker.uniqueId && <View style={styles.containerUpdatePhoto}>
                                <TouchableOpacity onPress={handleUploadPhoto}>
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
                            {iconsMaterial.map((icon: any) => {
                                return (
                                    <View style={styles.containerIcon} key={icon.name}>
                                        <TouchableOpacity onPress={()=> {
                                            if (icon.text === "Commenter"){setModalCommentVisible(icon.onPress)}
                                            else if(icon.text === "Direction"){
                                                handleLinking(selectedMarker.lat, selectedMarker.long)
                                            }
                                        }}>
                                            <FontAwesome5 name={icon.name} size={icon.size} color={icon.color} />
                                        </TouchableOpacity>
                                        <Text>{icon.text}</Text>
                                    </View>
                                )
                            })}
                        </View>
                            <ScrollView>
                                <ContainerDescription selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>
                                <View style={styles.containerComments}>
                                    <View style={styles.moyenne}>
                                        {/*<Text style={{fontWeight:"bold", padding:5}}>Moyenne : ({comments.length} Avis)</Text>*/}
                                    </View>
                                    {/*{comments.length > 0 ? comments.map((com: any) => {*/}
                                    {/*    return (*/}
                                    {/*        <ContainerComments key={com._id} id={com._id} comment={com.comment} user={com.added_by}/>*/}
                                    {/*    )*/}
                                    {/*}):<View style={{padding:10}}>*/}
                                    {/*    <Text>Pas encore de commentaire.Soyez le premier à écrire un avis.</Text>*/}
                                    {/*</View> }*/}
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
    moyenne:{
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EFEFEF',
    },
    lastView:{
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
    },
    containerDescription:{
        padding: 10,
        width: '100%',
        height: "45%",
    },
    containerUpdateDescription:{
        width: "100%",
        padding: 10,
        alignItems: 'flex-end',
    }
});
