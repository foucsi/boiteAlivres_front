import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import moment from "moment";
import { useSelector} from "react-redux";
import { AntDesign } from '@expo/vector-icons';
import {useDeleteCommentMutation} from "@/helpers/hooks/useDeleteCommentMutation";


// @ts-ignore
export default function ContainerComments({comment, user, id, isLoading, dateComment, error}) {
    const userReducer = useSelector((state: any) => state.user.value)
    const {delComment} = useDeleteCommentMutation( userReducer.uniqueId,id)
    const date = moment(dateComment).format('DD/MM/YYYY')

    if(isLoading){
        return <Text>Loading...</Text>
    }
    if(error){
        return <Text>Error, Something wrong ...</Text>
    }





    // @ts-ignore
    return (
        <View style={styles.container}>
            <View style={styles.firstComponent}>
                <View style={{ width:"50%", display:"flex", flexDirection:"row"}}>
                    <View style={{paddingRight:5}}>
                        <Image source={{uri: user.photo}} style={{width: 30, height: 30, borderRadius: 50}}/>
                    </View>
                    <View>
                        <Text>{user.username}</Text>
                        <Text>{date}</Text>
                    </View>
                </View>
                <View style={{ width:"50%", display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center"}}>
                    {userReducer.uniqueId === user.uniqueId &&
                        // @ts-ignore
                        <TouchableOpacity onPress={delComment}>
                            <AntDesign name="closecircleo" size={22} color="#294C60" />
                        </TouchableOpacity> }
                </View>
            </View>
            <View style={styles.secondComponent}>
                <Text>{comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EFEFEF',
    },
    firstComponent:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    secondComponent:{
        paddingTop: 10,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding:5,
    }
})
