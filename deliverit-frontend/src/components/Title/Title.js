import React from 'react';
import './Title.css';

const Title = (props) => {
    return (
        <div className="title-component">
            {props.title}
        </div>
    );
}

export default Title;