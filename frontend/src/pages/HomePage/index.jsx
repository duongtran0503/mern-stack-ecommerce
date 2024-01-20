import TypeProduct from '../../components/TypeProduct';
import SliderComponent from '../../components/SliderComponent';
import CardComponent from '../../components/CardComponent';
import {
    WrapperTypeProduct,
    WrapperSliderContent,
    WrapperContainer,
} from './style';
import { nanoid } from 'nanoid';
import slider1 from '../../assets/images/slider1.webp';
import slider2 from '../../assets/images/slider2.webp';
import slider3 from '../../assets/images/slider3.webp';
const HomePage = () => {
    const typeProduct = ['tivi', 'điện thoại', 'máy tính', 'tai nghe'];
    return (
        <div>
            <div
                style={{
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#fff',
                }}
            >
                <WrapperTypeProduct>
                    {typeProduct.map((type) => {
                        return <TypeProduct key={nanoid()} type={type} />;
                    })}
                </WrapperTypeProduct>
            </div>
            <div
                style={{
                    width: '100%',
                    height: 'auto',
                    background: '#f4f4f4',
                }}
            >
                <WrapperSliderContent>
                    <SliderComponent images={[slider1, slider2, slider3]} />
                </WrapperSliderContent>
                <WrapperContainer>
                    <CardComponent />
                </WrapperContainer>
            </div>
        </div>
    );
};
export default HomePage;
