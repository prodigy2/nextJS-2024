import React from 'react';
import {IUser} from "@/models/IUser";
import {userService} from "@/services/api.user.service";
import UserComponent from "@/components/UserComponent";

const usersPage = async () => {
    const allUsers = await userService.getAllUsers();

    return (
        <div>
            <ul>
                <li>

                {
                    allUsers.map((user:IUser) => (<div key={user.id}>
                        <UserComponent user={user}/>
                    </div>))
                }
                </li>

            </ul>
        </div>
    );
};

export default usersPage;