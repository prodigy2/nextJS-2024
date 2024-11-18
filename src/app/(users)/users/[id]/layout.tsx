import React from 'react';
import {Metadata} from "next";
import {userService} from "@/services/api.user.service";


export const generateMetadata = async ({params}: {params: {id: string} }): Promise<Metadata> => {
    const user  = await userService.getUserById( params.id);
    console.log(user);
    return {title: 'user?.username'}
}
type Props = { children: React.ReactNode }
const UserLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;