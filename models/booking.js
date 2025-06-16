const bookings = []

function create({ eventId, sector, quantity }) {
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 8)
  const booking = {
    id,
    eventId,
    sector,
    quantity,
    createdAt: new Date().toISOString()
  }
  bookings.push(booking)
  return booking
}

function getById(id) {
  return bookings.find(b => b.id === id)
}

function cancel(id) {
  const index = bookings.findIndex(b => b.id === id)
  if (index !== -1) {
    bookings.splice(index, 1)
    return true
  }
  return false
}

module.exports = { create, getById, cancel }
