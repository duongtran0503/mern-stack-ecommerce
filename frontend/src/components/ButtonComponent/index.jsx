import React from 'react';
import { Button } from 'antd';
const index = ({
    size,
    styleButton,
    styleTextButton,
    textbutton,
    disabled,
    ...rests
}) => {
    return (
        <Button
            style={{
                ...styleButton,
                background: disabled ? '#ccc' : styleButton.background,
            }}
            size={size}
            {...rests}
        >
            <span style={styleTextButton}>{textbutton}</span>
        </Button>
    );
};

export default index;
