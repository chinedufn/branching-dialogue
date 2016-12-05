var branchingDialogue = require('../')
var convo = require('./dialogue-fixture.json')

var test = require('tape')

test('Walk conversation directed graph', function (t) {
  t.plan(1)
  var currentDialogue = branchingDialogue.get(convo, convo.start[0].dialogueId)

  // Reply to everything with the second option
  while (currentDialogue.responses) {
    currentDialogue = branchingDialogue.get(convo, currentDialogue.responses[1].next)
  }

  if (currentDialogue.action === 'receive-gift') {
    t.ok('Chose conversation path that led to a gift')
  }
})
