const Event = require('../models/Event')

function listEvents(req, res) {
  const events = Event.getAll()
  res.render('events/index', { events, title: 'Lista wydarzeń' })
}

function showEvent(req, res) {
  const event = Event.getById(req.params.id)
  if (!event) {
    return res.status(404).send('Wydarzenie nie znalezione')
  }
  res.render('events/show', { event, title: event.title })
}

module.exports = { listEvents, showEvent }
