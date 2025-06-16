const events = [
  {
    id: '1',
    title: 'Koncert Rockowy w Warszawie',
    date: '2024-08-10',
    location: 'Hala Kongresowa, Warszawa',
    sectors: [
      { name: 'Sektor A', price: 120 },
      { name: 'Sektor B', price: 80 },
      { name: 'Sektor C', price: 50 }
    ],
    description: 'Zapraszamy na niesamowity koncert rockowy z udziałem najlepszych zespołów.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35904ede-b0c2-4ad1-9b0d-0a9be3b6a684.png',
    imageAlt: 'Scena koncertowa z muzykami grającymi na instrumentach na tle odbiorców'
  },
  {
    id: '2',
    title: 'Spektakl teatralny "Romeo i Julia"',
    date: '2024-09-05',
    location: 'Teatr Narodowy, Kraków',
    sectors: [
      { name: 'Orchestra', price: 150 },
      { name: 'Balcony', price: 90 }
    ],
    description: 'Klasyczny dramat Szekspira wystawiany przez renomowany teatr.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2d0bd7ef-6d36-4ea8-8567-020a1f60215e.png',
    imageAlt: 'Scena teatralna z aktorami grającymi Romeo i Julię w dramacie'
  },
  {
    id: '3',
    title: 'Festiwal Jazzowy',
    date: '2024-10-12',
    location: 'Centrum Kultury, Gdańsk',
    sectors: [
      { name: 'Sektor 1', price: 100 },
      { name: 'Sektor 2', price: 70 },
      { name: 'Sektor 3', price: 40 }
    ],
    description: 'Trzydniowy festiwal jazzu z udziałem gwiazd i lokalnych artystów.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/225fedf4-d0c7-496b-b567-07bafb5c92bf.png',
    imageAlt: 'Muzycy jazzowi grający na scenie z różnymi instrumentami'
  }
]

function getAll() {
  return events
}

function getById(id) {
  return events.find(e => e.id === id)
}

module.exports = { getAll, getById }
