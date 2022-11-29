/*********************************************************************/
/***************************** ALUMNO.js ********************************/
/*********************************************************************/
/*
const express = require('express');
const appRouter = express.Router();
var bodyParser = require('body-parser');

const con = require("../config/connection");

appRouter.use(bodyParser.urlencoded({extended:true}));
appRouter.use(bodyParser.json());

let sql_all = `call sp_listar()`;

appRouter.get('/albums', (req,res)=>{
    con.query(sql_all,(error, results)=>{
        if(error) throw error;

        res.send(results);
    });
});




module.exports = appRouter;

*/

/*********************************************************************/
/************************ mascota y futbol.js ************************/
/*********************************************************************/
const express = require('express');
const appRouter = express.Router();
var bodyParser = require('body-parser');

const con = require("../config/connection");

appRouter.use(bodyParser.urlencoded({ extended: true }));
appRouter.use(bodyParser.json());

let sql_all = `call sp_listar_mascotas()`;
let sql_all2 = `call sp_listar_futbolistas()`;

appRouter.get('/mascotas', (req, res) => {
    con.query(sql_all, (error, results) => {
        if (error) throw error;

        res.send(results);
    });
});



appRouter.get('/futbolistas', (req, res) => {
    con.query(sql_all2, (error, results) => {
        if (error) throw error;

        res.send(results);
    });
})


let sql_all3 = `call sp_insertar_futbolistas(?,?,?,?)`;
appRouter.get('/insertar', (req, res) => {
    const FUT = {
        id: req.body.Nid,
        nombre: req.body.Nnombre,
        nacionalidad: req.body.Nnacionalidad,
        edad: req.body.Nedad
    }

    con.query(sql_all3, [FUT.id, FUT.nombre, FUT.nacionalidad, FUT.edad], (error, results) => {
        if (error) throw error;

        res.send(results[0]);
    });
})


const jwt = require('jsonwebtoken');


appRouter.post('/login',(req, res) => {
    const user = {
        id: 1,
        username : "jeanpierre.chipana",
        email:"jeanpierre.chipana@ucsm.edu.pe"
    }
    jwt.sign({user},'secretkey',{expiresIn:'30s'},(err, token) => {
        res.json({
            token        
        });
    });

})

function verifiToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

appRouter.post('/postseguro',verifiToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            res.json({
                mensaje:"Post Creado",
                authData
            });
        }
    });
});


appRouter.post('/verFutbolistas',verifiToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            con.query(sql_all2, (error, results) => {
                if (error) throw error;
        
                res.send(results);
            });
        }
    });
});

appRouter.post('/verMascotas',verifiToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            con.query(sql_all, (error, results) => {
                if (error) throw error;
        
                res.send(results);
            });
        }
    });
});


module.exports = appRouter;