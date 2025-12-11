import React from 'react'
import BirdPicture from '../assets/eurasian-wren.jpg'

const BirdInfoPage = () => {
    return (
        <div className="bird-card">
            <img src={BirdPicture} alt="Eurasian wren" width="500px auto"/>
            <p class="bird-name">Eurasian Wren</p>
            <p class="scientific-name">Troglodytes troglodytes</p>
            
        </div>
    )
}

export default BirdCard