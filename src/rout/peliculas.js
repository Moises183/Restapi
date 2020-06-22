const {Router} = require('express');
const router = Router();
const _ = require ('underscore');

const peliculas = require('../ejemplo');

router.get('/peliculas', (req, res) => {
    res.json(peliculas);
});

router.post('/peliculas', (req, res) => {
    const {title, director} = req.body;
    if (title && director){
        const id = peliculas.length + 1;
        const nuevaPelicula = {...req.body, id};
        peliculas.push(nuevaPelicula);
        res.json(peliculas);
    }
    else{
        res.send('error request');
    }
    res.send('received');
})

router.delete('/peliculas/:id', (req, res) => {
    const {id} = req.params;
    _.each(peliculas,(peliculas, i) => {
        if(peliculas.id==id){
            peliculas.splice(i, 1);
        }
    });
    res.send(peliculas);
})

module.exports=router;