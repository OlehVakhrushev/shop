import React from 'react';



const Header = (props) => {
    return (
        <div>
            <h1> Store </h1>
            <div className="input-group mb-3">
                <input  value={props.searchInput} onChange={(event)=> props.setSearchInput(event.target.value)} type="text" className="form-control" placeholder="enter product"
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>
            </div>
            <div>
                <button className='btn btn-outline-secondary' onClick={props.toggle}>CART</button>
            </div>

        </div>
    );
};

export default Header;