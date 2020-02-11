import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/cakeshop.css';
import './styles/moreStyles.css';
import CakesCollection from './components/CakesCollection';
import AddCakeForm from './components/AddCakeForm';
import EditCakeForm from './components/EditCakeForm';

function App() {

  const base_url = 'http://localhost:5000/api/v1/cakes';

  const initialEditFormState = { id: null, name: '', imageUrl: '', yumFactor: '', comments: [] }
  const [cakes, setCakes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentCake, setCurrentCake] = useState(initialEditFormState);

  async function getCakes() {
    const result = await axios(base_url);
    setCakes(result.data);
  }

  useEffect(() => {
    getCakes();
  }, cakes);

  // POST
  const addCake = cake => {
    async function addNewCake(newCake) {
      await axios.post(base_url, newCake).then(res => alert(JSON.stringify(res.data.message)));
    }
    cake.id = cakes.length + 1;
    addNewCake(cake);
    setCakes([...cakes, cake]);
  }

  // DELETE
  const deleteCake = id => {
    setEditMode(false);
    async function deletePresentCake(cakeId) {
      await axios.delete(base_url + `/${cakeId}`).then(res => alert(res.data.message))
    }
    deletePresentCake(id);
    setCakes(cakes.filter(cake => cake.id !== id))
  }

  // PUT
  const editCake = cake => {
    setEditMode(true);
    setCurrentCake({
      id: cake.id, name: cake.name, imageUrl: cake.imageUrl,
      yumFactor: cake.yumFactor, comments: cake.comments
    })
  }

  const updateCake = (id, updatedCake) => {
    setEditMode(false);
    async function updateCurrentCake(cakeId, modifiedCake) {
      await axios.put(base_url + `/${cakeId}`, modifiedCake).then(res => alert(res.data.message))
    }
    updateCurrentCake(id, updatedCake);
    setCakes(cakes.map(cake => { return cake.id == id ? updatedCake : cake }));
  }

  return (
    <div className="App">
      <header className="App-header">
        Bakery
      </header>
      <CakesCollection cakes={cakes} deleteCake={deleteCake} editCake={editCake} />

      <div className="flex-large">
        {editMode ? (
          <div>
            <h2>Edit Cake</h2>
            <EditCakeForm
              editMode={editMode}
              setEditMode={setEditMode}
              currentCake={currentCake}
              updateCake={updateCake}
            />
          </div>
        ) : (
            <div>
              <h2>Add Cake</h2>
              <AddCakeForm addCake={addCake} />
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
