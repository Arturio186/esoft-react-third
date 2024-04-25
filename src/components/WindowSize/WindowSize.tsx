import React, { useState, useEffect } from "react";
import './WindowSize.scss'

import IWindowSize from "#interfaces/IWindowSize";

const WindowSize : React.FC = () => {
    const [size, setSize] = useState<IWindowSize>({
        width: window.innerWidth,
        height: window.innerHeight
    })
    
    const updateWindowSize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize)

        return () => removeEventListener('resize', updateWindowSize)
    }, [])


    return (
        <>
            <h2 className="title">Размер окна</h2>
            <div className="sizes">
                <p>Ширина: {size.width}</p>
                <p>Высота: {size.height}</p>
            </div>
        </>
    )
}

export default WindowSize;