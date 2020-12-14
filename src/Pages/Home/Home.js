import React from 'react';
import Header from '../../Components/Header/Header';
import Product from '../../Components/Product/Product';
import './Home.css';

export default function Home() {
    return (
        <React.Fragment>
        
            <Header />

            <div className="home">

                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="" />
                <div className="home__row" id="firstRow">
                    <Product
                        id={1}
                        title={'A granel mayorista de 13.3 Pulgadas Intel Core i7 win10 computadora portátil 16GB+512GB SSD Soporte Touch'}
                        image={'https://http2.mlstatic.com/D_NQ_NP_944413-MLA42937681675_072020-V.webp4'}
                        price={438.99}
                        rating={5}
                    />
                    <Product
                        id={2}
                        title={'A granel mayorista de 13.3 Pulgadas Intel Core i7 win10 computadora portátil 16GB+512GB SSD Soporte Touch'}
                        image={'https://http2.mlstatic.com/D_NQ_NP_944413-MLA42937681675_072020-V.webp4'}
                        price={438.99}
                        rating={5}
                    />
                    <Product
                        id={3}
                        title={'A granel mayorista de 13.3 Pulgadas Intel Core i7 win10 computadora portátil 16GB+512GB SSD Soporte Touch'}
                        image={'https://http2.mlstatic.com/D_NQ_NP_944413-MLA42937681675_072020-V.webp4'}
                        price={438.99}
                        rating={5}
                    />
                    <Product
                        id={4}
                        title={'A granel mayorista de 13.3 Pulgadas Intel Core i7 win10 computadora portátil 16GB+512GB SSD Soporte Touch'}
                        image={'https://http2.mlstatic.com/D_NQ_NP_944413-MLA42937681675_072020-V.webp4'}
                        price={438.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={5}
                        title={"A granel mayorista de 13.3 Pulgadas Intel Core i7 win10 computadora portátil 16GB+512GB SSD Soporte Touch"}
                        image={'https://http2.mlstatic.com/D_NQ_NP_918314-MLA43402716917_092020-V.webp'}
                        price={438.99}
                        rating={5}
                    />
                    <Product
                        id={6}
                        title={"A granel mayorista de 13.3 Pulgadas Intel Core i7 win10 computadora portátil 16GB+512GB SSD Soporte Touch"}
                        image={'https://http2.mlstatic.com/D_NQ_NP_918314-MLA43402716917_092020-V.webp'}
                        price={438.99}
                        rating={5}
                    />
                    <Product
                        id={7}
                        title={"A granel mayorista de 13.3 Pulgadas Intel Core i7 win10 computadora portátil 16GB+512GB SSD Soporte Touch"}
                        image={'https://http2.mlstatic.com/D_NQ_NP_918314-MLA43402716917_092020-V.webp'}
                        price={438.99}
                        rating={5}
                    />
                    <Product
                        id={8}
                        title={"A granel mayorista de 13.3 Pulgadas Intel Core i7 win10 computadora portátil 16GB+512GB SSD Soporte Touch"}
                        image={'https://http2.mlstatic.com/D_NQ_NP_918314-MLA43402716917_092020-V.webp'}
                        price={438.99}
                        rating={5}
                    />

                </div>
                <div className="home__row">
                    <Product
                        id={9}
                        title={"Levi's Men's Classic Logo Hoodie"}
                        image={'https://dafitistaticar-a.akamaihd.net/p/levis-7476-103584-1-product.jpg'}
                        price={59.50}
                        rating={5}
                    />
                    <Product
                        id={10}
                        title={"Levi's Men's Classic Logo Hoodie"}
                        image={'https://dafitistaticar-a.akamaihd.net/p/levis-7476-103584-1-product.jpg'}
                        price={59.50}
                        rating={5}
                    />
                    <Product
                        id={11}
                        title={"Levi's Men's Classic Logo Hoodie"}
                        image={'https://dafitistaticar-a.akamaihd.net/p/levis-7476-103584-1-product.jpg'}
                        price={59.50}
                        rating={5}
                    />
                    <Product
                        id={12}
                        title={"Levi's Men's Classic Logo Hoodie"}
                        image={'https://dafitistaticar-a.akamaihd.net/p/levis-7476-103584-1-product.jpg'}
                        price={59.50}
                        rating={5}
                    />
                </div>

            </div>
        </React.Fragment>
    )
}
