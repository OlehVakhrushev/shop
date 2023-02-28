import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "./Form";
import './Form.css'


const Products = (props) => {


    return (
        <div className="container-fluid">
            <div className="row align-items">
                {props.products.map(el =>
                    <Form key={el.id}
                          product={el}
                          putToBasket={props.putToBasket}
                    />
                )}
            </div>
        </div>


    )
}
export default Products;