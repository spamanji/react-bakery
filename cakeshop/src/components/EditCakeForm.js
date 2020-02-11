import React, { useState, useEffect } from 'react';

const EditCakeForm = props => {

    const [cake, setCake] = useState(props.currentCake)

    useEffect(() => {
        setCake(props.currentCake)
    }, [props]);


    const handleInputChange = event => {
        event.preventDefault();
        let { name, value } = event.target
        setCake({ ...cake, [name]: value })
    }

    return <form
        onSubmit={event => {
            event.preventDefault()
            if (!cake.name || !cake.imageUrl) return

            props.updateCake(cake.id, cake)
        }}
    >
        <div>
            <label>Yum Factor for {cake.name}</label>
            <input type='number' name='yumFactor' value={cake.yumFactor}
                onChange={handleInputChange} min='1' max='5' />
            <label>Comments </label>
            <input type="text" name='comments' value={cake.comments} onChange={handleInputChange} />
        </div>
        <button>Update Cake</button>
        <button onClick={() => props.setEditMode(false)} className="button muted-button">Cancel</button>
    </form>
}

export default EditCakeForm;