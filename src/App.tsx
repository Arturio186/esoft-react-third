import React from 'react'
import './App.scss'

import CountdownTimer from '#components/CountdownTimer/CountdownTimer'
import UserList from '#components/UserList/UserList'
import WindowSize from '#components/WindowSize/WindowSize'

const App : React.FC = () => {
    return (
        <>
            <CountdownTimer timerStart={10} />
            <UserList />
            <WindowSize />
        </>
    )
}

export default App
