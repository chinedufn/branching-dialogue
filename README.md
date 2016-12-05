branching-dialogue [![npm version](https://badge.fury.io/js/branching-dialogue.svg)](http://badge.fury.io/js/branching-dialogue) [![Build Status](https://travis-ci.org/chinedufn/branching-dialogue.svg?branch=master)](https://travis-ci.org/chinedufn/branching-dialogue)
===============

> A stateless API for modeling branching dialogue in role-playing games

## Background / Initial Motivation

## To Install

```sh
$ npm install --save branching-dialogue
```

## Usage

Conversations are directed graphs are stored as `JSON`

```json
{
  dialogue: {
    1: {
      "text": "I'm doing fantastic! Want to get some dinner?",
      "responses": [
        {
          "next": 4,
          "reply": "Absolutely! I'll meet you at La Marina"
        }
      ]
    },
    2: {
      "text": "Hey how are you?",
      "responses": [
        {
          next: 1,
          reply: 'Great how are you?'
        },
        {
          next: 3,
          reply: "Not so good :("
        }
      ]
    },
    3: {
      "text": "Oh no, do you need anything from me?",
      "responses": [
        {
          next: 5,
          reply: "Nah, I'm alright thank you."
        }
      ]
    },
    4: {
      action: 'go-to-dinner',
      "text": "Sounds great!"
    },
    5: {
      action: null,
      "text": "Alright, well feel better."
    }
  },
  "start": [
    {
      "dialogueId": 2,
      "if": true
    }
  ]
  }
}
```

```js
// The example convo.json file from above
var convo = require('./convo.json')

var branchingDialogue = require('branching-dialogue')
// We start at dialogue id #2
var startText = branchingDialogue.get(
  convo,
  convo.start[0].dialogueId
)

// We choose the second response, "Not so good :("
var nextText = branchingDialogue.get(convo, startText.responses[1].next)
// We choose the first response, "Nah, I'm alright thank you"
var nextText = branchingDialogue.get(convo, startText.responses[0].next)

// This gets executed based on the above replies
if (!nextText.action) {
  console.log(nextText.text)
  // Alright, well feel better.
}

// This does not get executed
if (nextText.action === 'go-to-dinner') {
  // Your code might send your player to the dinner venue
}
```

## TODO:

- [ ] Implement the module
- [ ] Figure out API for conditional start / responses

## API

### `branchingDialogue.get(convo, dialogueId)` -> `Object`

#### convo

*Required*

Type: `object`

A JSON representation of the conversation.

#### dialogueId

*Required*

Type: `Number` || `String`

The id of the part of the conversation that you are retrieving

## See Also

// TODO: Link to the module for parsing the conditional response DSL

## License

MIT
