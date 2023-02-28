// import React, {useState} from "react";
// import {Card} from 'react-bootstrap';
// import {v4 as uuidv4} from "uuid";
//
//
// const initialProducts = [
//     {
//         id: uuidv4(),
//         name: 'Food Ration Bars',
//         price: 42,
//         description: 'Emergency Food Ration Bars',
//         img: 'https://m.media-amazon.com/images/I/71mu2Ioll5L._SL1500_.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: `Lions Mane Powder`,
//         price: 22,
//         description: 'Lions Mane (Hericium erinaceus) mycelium',
//         img: 'https://m.media-amazon.com/images/I/71oc8KeD5aL._AC_SL1500_.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: 'ERICKHILL EMF Meter',
//         price: 79,
//         description: 'WiFi Signal Detector',
//         img: 'https://m.media-amazon.com/images/I/81yiPqlj8oL._SL1500_.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: 'Serrano Ham Bone in from Spain',
//         price: 199,
//         description: 'Cured Spanish Jamon',
//         img: 'https://m.media-amazon.com/images/I/914lxeVgaDL._SL1500_.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: 'Signature Truffles',
//         price: 85,
//         description: 'Assorted Chocolate Gift',
//         img: 'https://m.media-amazon.com/images/I/61No3QE9YQL._SL1200_.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: 'Razor Blades',
//         price: 17,
//         description: 'Original Razor Blades Refills for Men',
//         img: 'https://m.media-amazon.com/images/I/71zlgNA4xvL._SL1500_.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: 'Tape',
//         price: 15,
//         description: 'Conductive Tape 2inch x 50Feet',
//         img: 'https://m.media-amazon.com/images/I/71Dir87k6eL._SL1500_.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: 'lack tea Puer fermented',
//         price: 29,
//         description: '500g pakage by traditional method with bamboo leaves pu er tea',
//         img: 'https://m.media-amazon.com/images/I/51dSoTLGQIL.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: 'Golden Star Balm',
//         price: 12,
//         description: 'Aromatic Balsam',
//         img: 'https://m.media-amazon.com/images/I/716aFAyEICL._SL1280_.jpg'
//     },
//     {
//         id: uuidv4(),
//         name: 'Radial Tire',
//         price: 74,
//         description: 'Forceum Hena All-Season Performance Radial Tire',
//         img: 'https://m.media-amazon.com/images/I/71EsHy0rrIL._AC_SL1500_.jpg'
//     },
//     // Добавить здесь другие товары
//
// ];
//
// const[products, setProducts]=useState(initialProducts)
//
// const ProductCard = ({product}) => {
//     return (
//         <div>
//             <Card style={{width: '18rem'}}>
//                 <Card.Img variant="top" src={product.image}/>
//                 <Card.Body>
//                     <Card.Title>{product.name}</Card.Title>
//                     <Card.Text>{product.description} {product.price}</Card.Text>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// };
//
// export default ProductCard;