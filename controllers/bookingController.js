const Booking = require('../models/booking')
const Event = require('../models/event')

function createBooking(req, res) {
  const { eventId, sector, quantity } = req.body
  const event = Event.getById(eventId)
  if (!event) {
    return res.status(400).send('Nieprawidłowe ID wydarzenia')
  }
  const sectorObj = event.sectors.find(s => s.name === sector)
  if (!sectorObj) {
    return res.status(400).send('Nieprawidłowy sektor')
  }
  if (!quantity || isNaN(quantity) || quantity < 1) {
    return res.status(400).send('Nieprawidłowa ilość biletów')
  }
  const booking = Booking.create({
    eventId,
    sector,
    quantity: Number(quantity)
  })
  res.redirect(`/rezerwacje/potwierdzenie/${booking.id}`)
}

function showConfirmation(req, res) {
  const booking = Booking.getById(req.params.id)
  if (!booking) {
    return res.status(404).send('Rezerwacja nie znaleziona')
  }
  const event = Event.getById(booking.eventId)
  res.render('bookings/confirmation', { booking, event, title: 'Potwierdzenie rezerwacji' })
}

function cancelBooking(req, res) {
  const bookingId = req.params.id
  const success = Booking.cancel(bookingId)
  if (!success) {
    return res.status(404).send('Nie znaleziono rezerwacji do anulowania')
  }
  res.render('bookings/cancel', { title: 'Anulowano rezerwację' })
}

module.exports = { createBooking, showConfirmation, cancelBooking }