import {IUser} from "@/models/IUser";


const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    userBaseUrl: '/users',
    allUsers: () => base + urlBuilder.userBaseUrl,
    singleUsers: (id: string | number) => base + urlBuilder.userBaseUrl + '/' + id,
}
const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const users = await fetch( urlBuilder.allUsers())
            .then(value => value.json());
        console.log(users);
        return users;
    },
    getUserById: async (id: string | number): Promise<IUser | null> => {
        const user = await fetch( urlBuilder.singleUsers(id))
            .then(value => value.json());
        console.log(user);
        return user;
    }
}

export { userService };