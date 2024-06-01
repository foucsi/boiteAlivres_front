import {View, Text, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import {Link} from "expo-router";

export default function Welcome() {

    useEffect(() => {
       setTimeout(() => {
           <Link href={"/login"}/>;
       }, 3000)

        // Cleanup function to clear the timeout if the component unmounts before the timeout finishes

    }, []); // Add navigation to the dependency array

    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
