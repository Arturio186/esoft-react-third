import React from 'react'
import './App.scss'

import CountdownTimer from '#components/CountdownTimer/CountdownTimer'
import UserList from '#components/UserList/UserList'

const App : React.FC = () => {
    return (
        <>
            <CountdownTimer timerStart={10} />
            <UserList />
        </>
    )
}

export default App
