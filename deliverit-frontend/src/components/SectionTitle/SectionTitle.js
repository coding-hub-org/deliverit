import React from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
    return (
        <div className="section-title-component">
            {props.title}
        </div>
    );
}

export default SectionTitle;