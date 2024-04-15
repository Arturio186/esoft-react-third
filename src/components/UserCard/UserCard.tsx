import React from "react";
import './UserCard.scss'

import IUserCardProps from "#interfaces/props/IUserCardProps";

const UserCard : React.FC<IUserCardProps> = ({ user }) => {
    return (
        <div className="user">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}

export default UserCard;