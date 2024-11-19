import React from 'react';

const HeadingWithLine = ({ text }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        margin: '20px 0',
        width:'100%'
    };

    const headingStyle = {
        fontSize: '1.5rem',
        color: '#1f499d',
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const lineStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '300px', // 원하는 선 길이
        height: '1px',
        backgroundColor: '#1f499d',
        position: 'relative',
    };

    const dotStyle = {
        width: '6px',
        height: '6px',
        backgroundColor: '#1f499d',
        borderRadius: '50%',
        position: 'absolute',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>{text}</h2>
            <div style={lineStyle}>
                <span style={{ ...dotStyle, left: '-5px' }}></span>
                <span style={{ ...dotStyle, right: '-5px' }}></span>
            </div>
        </div>
    );
};

export default HeadingWithLine;
