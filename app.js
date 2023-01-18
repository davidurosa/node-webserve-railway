const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;

app.set('view engine', 'hbs');

//hanlerbars
hbs.registerPartials(__dirname + '/views/partials');

////Servr contenido eestatico

app.use(express.static('public'));




app.get('/',  (req, res)=> {
    res.render('home',{
        titulo:'Curso de node',
        nombre:'David Urosa'
    });
  })

  app.get('/generic',  (req, res)=> {
    res.render('generic',{
        titulo:'Curso de node',
        nombre:'David Urosa'
    });
  })

  app.get('/elements',  (req, res)=> {
    res.render('elements',{
        titulo:'Curso de node',
        nombre:'David Urosa'
    });
  })

/* app.get('/generic',  (req, res)=> {
    res.sendFile(__dirname +'/public/generic.html');
  })

  app.get('/elements',  (req, res)=> {
    res.sendFile(__dirname +'/public/elements.html');
  }) */
  app.get('*',  (req, res) =>{
    res.sendFile(__dirname +'/public/404.html');
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })