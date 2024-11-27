import React, { useEffect } from 'react'

export default function BodyBackground({background}) {

    useEffect(() => {
        document.documentElement.style.setProperty('--backgroundImage', `url(${background})`)
    }, [background])

    
}
