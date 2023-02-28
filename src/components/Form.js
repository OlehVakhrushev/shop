import React from 'react';
import style from './Form.css'

const Form = (props) => {
    console.log(props)
    return (
        <div className='col-sm-4 col-md-2'>
            <div  className="card h-100  text-white bg-success mb-sm-3" style={{border:"3px solid black", margin:"-5px "}}>
                <div className="card-body">
                    <img src={props.product.img}  alt="IMG" className="card-img-top img-fluid" style={{border:"2px solid black"}} width={100}/>
                    <h3 className="card-title"> {props.product.name}</h3>
                    <p className="card-text">$ {props.product.price}</p>
                    <p className="card-text">{props.product.category}</p>
                    <p className="card-text">{props.product.description}</p>
                    <button href="#" className="btn btn-primary" type="button" onClick={()=> props.putToBasket(props.product)}>Add to basket</button>
                </div>
            </div>
        </div>
    );
};

export default Form;