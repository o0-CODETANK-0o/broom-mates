import React from 'react';


const HubChar = (props) => {

    let data = props.data;
        console.log(data)

    let allChar = data.map((char) => {
        return (
            <div className="avatar-card-container">
                <img src={char.avatar} alt={char.name} className=""/>
                <h4>{char.name}</h4>
                <p>{char.xp}XP</p>
                <p>{char.status}</p>
            </div>
        )
    });

    return (
        <div className="all-chars">
            {allChar}
        </div>
    )
};

export default HubChar