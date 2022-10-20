const express = require('express');
const routes = express.Router();
const con = require('./database');

let db = [
    {'1': {Nome: 'Cliente 1', Idade: '20'}},
    {'2': {Nome: 'Cliente 2', Idade: '20'}},
    {'3': {Nome: 'Cliente 3', Idade: '20'}}
];

//Buscar Dados
routes.get('/', (req, res) => {
    return res.json(db)
});

routes.get('/recados', (req, res) => {
    
    con.query("SELECT * FROM tb_recados", function (err, result, fields) {
        if (err) throw err;
        
        res.send(result)
    });
    
})

//Inserir Dados
routes.post('/add', (req, res) => {
    const body = req.body;

    if(!body){
        return res.status(400).end();
    }

    db.push(body);
    return res.json(body)
});

//Deletando Dados
routes.delete('/:id', (req, res) => {
    const id = req.params.id;

    let newDB = db.filter(item => {
        if(!item[id]){
            return item
        }
    })

    db = newDB;

    return res.send(newDB)
})

module.exports = routes;