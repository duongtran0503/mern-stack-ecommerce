import React from 'react';
import ButtonInputSearch from '../ButtonInputSearch';
import { Col } from 'antd';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import {
    WrapperHeader,
    WrapperTextHeader,
    WrapperAccount,
    WrapperSmall,
} from './style';
const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={4}>
                    <WrapperTextHeader>
                        Tiki{' '}
                        <span style={{ color: 'black', fontSize: '20px' }}>
                            shop
                        </span>
                    </WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch size={'large'} placeholder={'search'} />
                </Col>
                <Col
                    span={8}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <WrapperAccount
                        style={{ marginLeft: '10px', cursor: 'pointer' }}
                    >
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <span style={{ cursor: 'pointer' }}>
                                đăng nhập/đăng ký
                            </span>
                            <div>
                                <span style={{ cursor: 'pointer' }}>
                                    Tài Khoản
                                </span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperAccount>
                    <WrapperSmall>
                        <ShoppingCartOutlined
                            style={{ fontSize: '30px', cursor: 'pointer' }}
                        />
                        <div>giở hàng</div>
                    </WrapperSmall>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;
