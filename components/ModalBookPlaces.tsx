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

//ICONS
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//COMPONENTS
import ContainerComments from "@/components/ContainerComments";
import ContainerDescription from "@/components/ContainerDescription";
import ModalComment from "@/components/ModalComment";
import ModalDeleteConfirmBookPlace from "@/components/modalDeleteConfirmBookPlace";
import Touchable from "@/components/touchableOpacity/Touchable";

//FUNCTIONS
import {uploadPhoto} from "@/helpers/functions/uploadPhoto";
import {handleLinking} from "@/helpers/functions/navigationMap";
import {shareBookPlace} from "@/helpers/functions/shareBookPlace";

//HOOKS
import {useState} from "react";
import {useGetAllCommentsByBookPlace} from "@/helpers/hooks/useGetAllCommentsByBookPlace";
import {useDispatch, useSelector} from "react-redux";
import {useAddFavorites} from "@/helpers/hooks/useAddFavorites";
import {useGetFavorite} from "@/helpers/hooks/useGetFavorite";

//import constants
import {iconsMaterial} from "@/constants/icons";
import FirstView from "@/components/FirstView";
import SecondView from "@/components/SecondView";


// @ts-ignore
export default function ModalBookPlaces({modalVisible, setModalVisible, selectedMarker, setSelectedMarker}) {

    //Local State
    const [modalDeleteBookPlaceVisible, setModalDeleteBookPlaceVisible] = useState(false)
    const [modalCommentVisible, setModalCommentVisible] = useState(false)

    //Redux
    const user = useSelector((state: any) => state.user.value)
    const dispatch = useDispatch()

    //Customs hooks
    const {comments, error, loading} = useGetAllCommentsByBookPlace(selectedMarker.id)
    const {addFavorite} = useAddFavorites(user.uniqueId, selectedMarker.id)
    const {isFavorite} = useGetFavorite(user.uniqueId, selectedMarker.id)

    //Formated date
    const momentDate = moment(selectedMarker.date).format('DD/MM/YYYY')

    //Functions
    const handleUploadPhoto = async () => {
        const newPhotoUrl = await uploadPhoto(selectedMarker.id, dispatch);
        // @ts-ignore
        setSelectedMarker({...selectedMarker,
            photo: newPhotoUrl
        });
    };

    //Event handlers
    const handleCloseModal = ()=>{setModalVisible(false)}
    const handleModalDeleteBookPlace = ()=>{setModalDeleteBookPlaceVisible(true)}

    return (
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    {/* below modal visible or not comment*/}
                    {modalCommentVisible && <ModalComment setModalCommentVisible={setModalCommentVisible} bookPlaceId={selectedMarker.id}/>}
                    {modalDeleteBookPlaceVisible && <ModalDeleteConfirmBookPlace setModalVisible={setModalVisible} setModalDeleteBookPlaceVisible={setModalDeleteBookPlaceVisible} bookPlaceId={selectedMarker.id}/>}
                    <View style={styles.centeredView}>
                        <FirstView selectedMarker={selectedMarker} handleCloseModal={handleCloseModal} addFavorite={addFavorite} isFavorite={isFavorite} handleUploadPhoto={handleUploadPhoto} handleModalDeleteBookPlace={handleModalDeleteBookPlace}/>
                        <SecondView selectedMarker={selectedMarker} momentDate={momentDate}/>
                        <View style={styles.thirdView}>
                            {iconsMaterial.map((icon: any) => {
                                return (
                                    <View style={styles.containerIcon} key={icon.name}>
                                        <TouchableOpacity onPress={()=> {
                                            if (icon.text === "Commenter"){setModalCommentVisible(icon.onPress)}
                                            else if(icon.text === "Direction"){
                                                handleLinking(selectedMarker.lat, selectedMarker.long)
                                            }else if(icon.text === "Partager"){
                                                shareBookPlace()
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
                                        <Text style={{fontWeight:"bold", padding:5}}>Moyenne : ({comments.length} Avis)</Text>
                                    </View>
                                    {comments.length > 0 ? comments.map((com: any) => {
                                        return (
                                            <ContainerComments loading={loading} error={error} key={com._id} id={com._id} comment={com.comment} user={com.added_by}/>
                                        )
                                    }):<View style={{padding:10}}>
                                        <Text>Pas encore de commentaire.Soyez le premier à écrire un avis.</Text>
                                    </View> }
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
