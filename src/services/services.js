import axios from 'axios';

const usersUrl = 'https://randomuser.me/api/?results=50';

const userService = () => axios.get(usersUrl);

export default userService;