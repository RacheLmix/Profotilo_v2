import TextPressure from "./TextPressure";

import React from 'react'

const HookMaluaText = () => {
    return (
        <div style={{ position: 'relative', height: '300px' }}>

            <TextPressure

                text="WELL COME TO MY PROJECTS"

                flex={true}

                alpha={false}

                stroke={true}

                width={true}

                weight={true}

                italic={true}

                textColor="black"

                strokeColor="#CC99FF"

                minFontSize={36}

            />

        </div>
    )
}

export default HookMaluaText
