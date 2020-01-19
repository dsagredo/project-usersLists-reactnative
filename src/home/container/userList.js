import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import userService from '../../services/services';

const userList = ({ navigation }) => {

    const [isUsers, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getUser = async () => {
        const response = await userService();
        setUsers(response.data.results);
        setLoading(false);
    };

    const Item = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('userDetail', {
                        'user': item
                    });
                }}
                style={styles.itemContainer}
            >
                <Image
                    style={[styles.itemImage, item.gender == 'male' ? styles.male : styles.female]}
                    source={{
                        uri: item.picture.large,
                    }}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.itemTitle}>{item.name.title}</Text>
                    <Text style={styles.itemTitle}>Toca para más detalles</Text>
                </View>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        getUser();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <FlatList
            data={isUsers}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id.value !== null ? item.id.value : ''}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 1,
        backgroundColor: '#ccc',
    },
    itemTitle: {
        fontSize: 20,
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: 10,
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'contain',
        borderWidth: 3.0,
    },
    male: {
        borderColor: '#0093bf'
    },
    female: {
        borderColor: '#cf0092'
    },
});

export default userList;
