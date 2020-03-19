import React from 'react';

function Image({ imgUrl }) {
    if (!imgUrl) return <h3>Loading...</h3>;

    return (
        <div className="dailyImage">
            <img style={{ maxWidth: "100%" }} src={imgUrl} alt={'Stellar view from outer space'}/>
        </div>
    );
}

export default Image;