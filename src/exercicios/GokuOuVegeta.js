import React, { useState } from 'react'

export default function GokuOuVegeta() {
    const [personagem, setpersonagem] = useState(false);

    function GokuOuVegeta() {
        setpersonagem(!personagem)

    }

    return (

        <div>
            <h2>Goku ou vegeta</h2>
            {
                !personagem &&
                <img alt="goku" style={{ height: '300px' }} src={'https://cdn.discordapp.com/attachments/208647663577464832/658680835355967501/dragon-ball-super-broly-ssb-goku-1145923.jpeg'} />
            }

            {
                personagem &&
                <img alt="vegeta" style={{ height: '300px' }} src={'https://cdn.discordapp.com/attachments/208647663577464832/658680940842975273/maxresdefault.jpg'} />
            }
            <button onClick={GokuOuVegeta}>Trocar Personagem</button>
        </div>
    )


}