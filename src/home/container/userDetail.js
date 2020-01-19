import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const userDetail = ({ navigation }) => {

    const [isDetail, setDetail] = useState([]);

    useEffect(() => {
        setDetail({ 'user': navigation.state.params.user });
    }, []);
    console.log('isDetail', isDetail);
    if (isDetail.length === 0) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <View style={[styles.itemContainer, isDetail.user.gender == 'male' ? styles.male : styles.female]}>
            <Image
                style={styles.itemImage}
                source={{ uri: isDetail.user.picture.large }}
            />
            <Text style={styles.itemText}>Nombre: {isDetail.user.name.first + ' ' + isDetail.user.name.last}</Text>
            <Text style={styles.itemText}>Email: {isDetail.user.email}</Text>
            <Text style={styles.itemText}>País: {isDetail.user.location.country}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    itemImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginVertical: 10,
    },
    itemText: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 5,
        color: '#fff',
    },
    male: {
        backgroundColor: '#0093bf',
    },
    female: {
        backgroundColor: '#cf0092',
    }
});

export default userDetail;