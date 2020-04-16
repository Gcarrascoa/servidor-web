const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

//EXPRESS HBS engine
app.set('view engine', 'hbs');


// app.get('/', function(req, res) {

//     let salida = {
//         nombre: 'Giovanni',
//         edad: 18,
//         url: req.url
//     }
//     res.send(salida)
// })

// app.get('/data', function(req, res) {

//     res.send('Hola data')
// })

app.get('/', (req, res) => {
    res.render('home', {
        name: 'giovanni cloud',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));