import React, { useEffect, useState } from "react";
import './UserList.scss'

import { getUsers } from "#api/UserAPI";

import Loader from "#components/UI/Loader/Loader";

import IUser from "#interfaces/IUser";

const UserList : React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            
            setUsers(response)
            setLoading(false)
        })();

    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div className="users">
           {users.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    )
}

export default UserList;