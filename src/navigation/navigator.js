import {
    createStackNavigator
} from 'react-navigation-stack';
import userList from '../home/container/userList';
import userDetail from '../home/container/userDetail';

const AppNavigator = createStackNavigator({
    userList: {
        screen: userList,
        navigationOptions: {
            title: 'Listado de Usuarios',
            headerTintColor: '#000',
            headerTitle: 'Listado de Usuarios',
        }
    },
    userDetail: {
        screen: userDetail,
        navigationOptions: ({ navigation}) => ({
            title: 'Detalle de Usuario',
            headerTintColor: '#000',
            headerTitle: `${navigation.state.params.user.name.first} ${navigation.state.params.user.name.last}`,
        })
    },
});

export default AppNavigator;
