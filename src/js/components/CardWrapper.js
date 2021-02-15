import React from 'react';

const CardWrapper = (props) => {
    return (<div className="row py-2">
        <div className="col-8 mx-auto">
            {props.children}
        </div>
    </div>);
}

export default CardWrapper;