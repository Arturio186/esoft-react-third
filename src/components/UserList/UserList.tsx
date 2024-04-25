import React, { useEffect, useState } from "react";
import './UserList.scss'

import { getUsers } from "#api/UserAPI";

import UserCard from "#components/UserCard/UserCard";
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
        <>
            <h2 className="title">Пользователи</h2>
            <div className="users">
            {users.map(user => <UserCard key={user.id} user={user} />)}
            </div>
        </>
    )
}

export default UserList;