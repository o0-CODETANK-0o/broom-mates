import React from 'react';

const Item = (props) => {

    const { text, status, _id, date } = props.info;

    return (
        <div>{ text }</div>
    )
};

export default Item;