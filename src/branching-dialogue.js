// work in progress...

module.exports = {
  get: getDialogue
}

function getDialogue (convo, dialogueId) {
  return convo.dialogue[dialogueId]
}

// TODO: Write other sister modules

// verbal-compare .. compare values using a comparison DSL
// pass in comparison 'numRats > 2 AND numBears < 5'
// pass in dictionary.. rats === 'foo.bar.property'
// pass in data.. {foo: {bar: {property: 3}}}

// TODO: Support a conditional start text

// Demo should have two faces and render text boxes next to both.
// Have them positioned Pokemon style (bottom left corner and top right corner)
//
// Maybe also provide a visual conversation testing tool via browser or command
// line. Browser would let you pass in your state for conditional responses
//
// Maybe generate a visual dialogue directed graph image or ASCII representation
// could use require('gl') + node
//
// branching-dialogue-linter to make sure that a conversation is valid
