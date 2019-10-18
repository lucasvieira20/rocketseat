const express = require('express');

const server = express();

server.use(express.json());

//Query Params = ? teste=1
//Route Params = /users/1
//Request Body = { 'name': 'Lucas'}
//CRUD - Create, Read, Update, Delete

const users = ['Diego Alves','Claudio','Victor'];

server.use((req,res, next) => {    
    console.log(`Método : ${req.method}; URL: ${req.url}`);
    return next();
});

function checkUserExists(req,res,next){
    if(!req.body.name){
    
        return res.status(400).json({
            error: 'User not found on Request Body'
        });
    
    }

    return next();
}

function checkUserInArray(req,res, next){
    if(!users[req.params.index]){
        return res.status(400).json({
            error: 'User does not exists'
        });
    }

    return next();
}


server.get('/users', (req,res) => {
    return res.json(users);
});

server.get('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params;
    return res.json(users[index]);
});

server.post('/users', checkUserExists, (req,res) => {
    const { name } = req.body;
    users.push(name);
    return res.json(users);
});

server.put('/users/:index', checkUserExists, checkUserInArray, (req,res) => {
    const { index } = req.params;
    const { name } = req.body;
    
    users[index] = name;

    return res.json(users);

});

server.delete('/users/:index', checkUserExists, checkUserInArray, (req,res) =>{
    const { index } = req.params;

    users.splice(index,1);

    return res.json(users);

});

server.listen(3000);
