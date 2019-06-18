// need to refactor!!!
var express = require('express');
var router = express.Router();


var messages = [
  {
    "message": "Oliver's first message! from API"
  },
  {
    "message": "Oliver's second message! from API"
  },
  {
    "message": "Oliver's third message! from API"
  }
];

router.get('/', function(req, res) {
  res.json(messages);
});

// example starts:
// app.post('/addtask', function (req, res) {
//   var newTask = req.body.newtask;
// //add the new task from the post route into the array
//   task.push(newTask);
// //after adding to the array go back to the root route
//   res.redirect("/");
// });
// example ends:



router.post('/', function (req, res, next) {
  new_msg = req.body;
  messages.push(new_msg);
  res.json(new_msg);
});


router.delete('/:msgId', function (req, res, next) {
  delete_index = req.params.msgID; //
  chosen_msg = Object.assign({}, messages[delete_index]);
  messages.splice(delete_index, 1);
  res.json(chosen_msg);
});

router.delete('/', function (req, res, next) {
  deleted_messages = messages.slice();
  for (let i = 0; i < messages.length; i++) {
    messages.pop();
  }
  res.json(deleted_messages);
});

module.exports = router;