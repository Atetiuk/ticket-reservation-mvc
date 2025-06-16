const express = require('express')
const path = require('path')
const ejsLocals = require('ejs-locals');
const app = express()

const eventController = require('./controllers/eventController')
const bookingController = require('./controllers/bookingController')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.engine('ejs', ejsLocals);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', eventController.listEvents)
app.get('/wydarzenia', eventController.listEvents)
app.get('/wydarzenia/:id', eventController.showEvent)

app.post('/rezerwacje', bookingController.createBooking)
app.get('/rezerwacje/potwierdzenie/:id', bookingController.showConfirmation)
app.post('/rezerwacje/anuluj/:id', bookingController.cancelBooking)

app.listen(3000, () => {
  console.log('Serwer działa na http://localhost:3000')
})