
const filename = '../data/cakes.json';
let cakes = require(filename)
const helper = require('../helpers/helper')

function getCakes() {
    return new Promise((resolve, reject) => {
        if (cakes.length === 0) {
            reject({
                message: 'no cakes available',
                status: 202
            })
        }
        resolve(cakes)
    })
}

function getCake(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(cakes, id)
            .then(cake => resolve(cake))
            .catch(err => reject(err))
    })
}

function insertCake(newCake) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(cakes) }
        newCake = { ...id, ...newCake };
        cakes.push(newCake);
        helper.writeJSONFile(filename, cakes);
        resolve(newCake);
    })
}

function updateCake(id, newCake) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(cakes, id)
            .then(cake => {
                const index = cakes.findIndex(p => p.id == cake.id)
                id = { id: cake.id }
                cakes[index] = { ...id, ...newCake }
                helper.writeJSONFile(filename, cakes)
                resolve(cakes[index])
            })
            .catch(err => reject(err))
    })
}

function deleteCake(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(cakes, id)
            .then((cake) => {
                cakes = cakes.filter(c => c.id !== cake.id)
                helper.writeJSONFile(filename, cakes)
                resolve()
            })
            .catch(err => reject(err))
    })
}
module.exports = {
    insertCake,
    getCakes,
    getCake,
    updateCake,
    deleteCake
}