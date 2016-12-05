// work in progress...

module.exports = branchingDialogue

function branchingDialogue (dialogue) {
}

// verbal-compare .. compare values using a verbal DSL
// pass in comparison 'numRats > 2'
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
