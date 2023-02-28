import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuidv4} from "uuid";
import Header from "./components/Header";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css"
import ShoppingCart from "./components/ShopingCart";

const initialProducts = [
    {
        id: uuidv4(),
        name: 'Food Ration Bars',
        price: 42,
        description: 'Emergency Food Ration Bars',
        img: 'https://m.media-amazon.com/images/I/71mu2Ioll5L._SL1500_.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: `Lions Mane Powder`,
        price: 22,
        description: 'Lions Mane (Hericium erinaceus) mycelium',
        img: 'https://m.media-amazon.com/images/I/71oc8KeD5aL._AC_SL1500_.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: 'ERICKHILL EMF Meter',
        price: 79,
        description: 'WiFi Signal Detector',
        img: 'https://m.media-amazon.com/images/I/81yiPqlj8oL._SL1500_.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: 'Serrano Ham Bone in from Spain',
        price: 199,
        description: 'Cured Spanish Jamon',
        img: 'https://m.media-amazon.com/images/I/914lxeVgaDL._SL1500_.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: 'Signature Truffles',
        price: 85,
        description: 'Assorted Chocolate Gift',
        img: 'https://m.media-amazon.com/images/I/61No3QE9YQL._SL1200_.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: 'Razor Blades',
        price: 17,
        description: 'Original Razor Blades Refills for Men',
        img: 'https://m.media-amazon.com/images/I/71zlgNA4xvL._SL1500_.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: 'Tape',
        price: 15,
        description: 'Conductive Tape 2inch x 50Feet',
        img: 'https://m.media-amazon.com/images/I/71Dir87k6eL._SL1500_.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: 'lack tea Puer fermented',
        price: 29,
        description: '500g pakage by traditional method with bamboo leaves pu er tea',
        img: 'https://m.media-amazon.com/images/I/51dSoTLGQIL.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: 'Golden Star Balm',
        price: 12,
        description: 'Aromatic Balsam',
        img: 'https://m.media-amazon.com/images/I/716aFAyEICL._SL1280_.jpg',
        count: 1,
    },
    {
        id: uuidv4(),
        name: 'Radial Tire',
        price: 74,
        description: 'Forceum Hena All-Season Performance Radial Tire',
        img: 'https://m.media-amazon.com/images/I/71EsHy0rrIL._AC_SL1500_.jpg',
        count: 1,
    },
    // Добавить здесь другие товары

];

function App() {

    const [products] = useState(initialProducts)
    const [searchInput, setSearchInput] = useState('')
    const [basket, setBasket] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const putToBasket = (choosenProduct) => {

        if(basket.indexOf(choosenProduct) === -1){
            setBasket([...basket, choosenProduct])
        }
    }

    console.log(basket)


    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Header

                searchInput={searchInput}
                setSearchInput={setSearchInput}
                toggle={toggle}
            />
            {isOpen ? <ShoppingCart basket={basket}
                              setBasket={setBasket}
                              toggle={toggle}/> :<Products
                products={products.filter(el =>
                    el.name.toLowerCase().includes(searchInput.toLowerCase())
                )}
                putToBasket={putToBasket}
            />}
            <hr/>

        </div>
    );
}

export default App;