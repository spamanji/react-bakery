import React, { useState } from 'react';

const AddCakeForm = props => {
    const initialFormState = { id: null, name: '', imageUrl: '', yumFactor: '', comments: [] }
    const [cake, setCake] = useState(initialFormState)

    const handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target
        setCake({ ...cake, [name]: value })
    }

    return <form
        onSubmit={event => {
            event.preventDefault()
            if (!cake.name || !cake.imageUrl) return

            props.addCake(cake)
            setCake(initialFormState)
        }}
    >
        <div>
            <label>Name </label>
            <input type="text" name='name' value={cake.name} onChange={handleInputChange} required />
            <label>Image URL </label>
            <input type="url" name='imageUrl' value={cake.imageUrl} onChange={handleInputChange} required />
            <label>Yum Factor </label>
            <input type='number' name='yumFactor' value={cake.yumFactor} min='1' max='5'
                onChange={handleInputChange} />
            <label>Comments </label>
            <input type="text" name='comments' value={cake.comments} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Cake</button>
    </form>
}

export default AddCakeForm;