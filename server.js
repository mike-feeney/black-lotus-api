const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const alpha = {
    'air elemental': {
        'manaCost': '3BB',
        'type': 'Summon Elemental',
        'cardText': 'Flying',
        'flavorText': 'These spirits of the air are winsome and wild and cannot be truly contained. Only marginally intelligent, they often substitute whimsy for strategy, delighting in mischief and mayhem.',
        'power': 4,
        'toughness': 4,
        'illustrator': 'Richard Thomas',
        'artAddress': 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=94&type=card'
    },
    'ancestral recall': {
        'manaCost': 'B',
        'type': 'Instant',
        'cardText': 'Draw 3 cards or force opponent to draw 3 cards.',
        'flavorText': '',
        'illustrator': 'Mark Poole',
        'artAddress': 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=95&type=card'
    },
    'animate artifact': {
        'manaCost': '3B',
        'type': 'Enchant Non Creature Artifact',
        'cardText': 'Target artifact is now a creature with both power and toughness equal to its casting cost; target retains all its original abilities as well. This will destroy artifacts with 0 casting cost.',
        'flavorText': '',
        'illustrator': 'Douglas Schuler',
        'artAddress': 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=96&type=card'
    },
    'black lotus': {
        'manaCost': '0',
        'type': 'Mono Artifact',
        'cardText': 'Adds 3 mana of any single color of your choice to your mana pool, then is discarded. Tapping this artifact can be played as an interupt.',
        'flavorText': '',
        'illustrator': 'Christopher Rush',
        'artAddress': 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3&type=card'
    },
    'unknown': {
        'manaCost': 'unknown',
        'type': 'unknown',
        'cardText': 'unknown',
        'flavorText': 'unknown',
        'power': 0,
        'toughness': 0,
        'illustrator': 'unknown',
        'artAddress': 'unknown'
    }
    // '': {
    //     'manaCost': '',
    //     'type': '',
    //     'cardText': '',
    //     'flavorText': '',
    //     'power': 0,
    //     'toughness': 0,
    //     'illustrator': '',
    //     'artAddress': ''
    // },
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const cardName = request.params.name.toLowerCase()
    if (alpha[cardName]) {
        response.json(alpha[cardName])
    }else{
        response.json(alpha['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Better go catch it!`)
})
