import React from 'react';

const Cake = props => {
    const cake = props.cake;

    const heartStyle = {
        color: 'red'
    }

    return (
        <div>
            <img className={props.className} src={cake.imageUrl} alt={cake.name} />
            <h5>{cake.name}</h5>
            <h6><i className="fas fa-heart" style={heartStyle}></i> {cake.yumFactor}</h6>
            <button className="button muted-button" onClick={() => props.editCake(cake)}>Edit</button>
            <button className="button muted-button" onClick={() => props.deleteCake(cake.id)}>Delete</button>
        </div >
    )
};

export default Cake;