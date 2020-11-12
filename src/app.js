const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { dirname } = require('path')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(path.join(publicDirectoryPath)))

app.get('', (req, res) => {
    res.render('index', {title: "Weather App", name: "Michael Mottola"})
})

app.get('/about', (req, res) => {
    res.render('about', {title: "About Me", name: "Michael Mottola"})
})

app.get('/help', (req, res) => {
    res.render('help', {title: "Help", name: "Michael Mottola", message: "Allow us to help you"})
})


app.get('/weather', (req, res) => {
    res.send({forecast: "Cloudy", location: "RVC"})
})

app.get('/help/*', (req, res) => {
    res.render('404', {title: '404', errorMessage: 'Help article not found', name: 'Michael Mottola'})
})

app.get('*', (req, res) => {
    res.render('404', {title: '404', errorMessage: 'Page Not Found', name: 'Michael Mottola'})
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})
