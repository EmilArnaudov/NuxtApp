import User from '../models/User';

export default function useAuth() {
    let user = useState('user', () => null);
    let allUsers = useState('allUsers', () => [new User('Emil Arnaudov', 'emil@mail.bg', '123', 'admin')])

    const login = (email, password) => {
        console.log(email, password);
        let usersArr = allUsers.value;
        let currentUser = usersArr.find(x => x.email === email);
    

        if (currentUser && currentUser.password === password) {
            user.value = currentUser;
        } else {
            throw new Error('Username or password is incorrect.')
        }
    }

    const register = (fullName, password, email) => {
        const newUser = new User(fullName, email, password, 'client');
        allUsers.value.push(newUser);
        user.value = newUser;

        console.log(toRaw(allUsers.value));

    }

    return {
        user,
        login,
        register,
    }
}