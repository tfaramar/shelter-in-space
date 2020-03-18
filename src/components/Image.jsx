import React from 'react';

function Image({ imgUrl }) {
    return (
        <div className="dailyImage">
            <img style={{ maxWidth: "100%" }} src={imgUrl} alt={'Stellar view from outer space'}/>
        </div>
    );
}

export default Image;