import { Input } from 'antd';
const InputSearch = ({ size, placeholder, bordered, style, ...rests }) => {
    return (
        <Input
            size={size}
            placeholder={placeholder}
            bordered={bordered}
            style={style}
            {...rests}
        />
    );
};

export default InputSearch;
