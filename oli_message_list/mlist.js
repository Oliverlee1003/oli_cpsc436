
var JSONStr = '[{"message": "first message!"},{"message": "second message"}]';
var JSONobj = JSON.parse(JSONStr);

for (var i=0; i< JSONobj.length; i++){
	var value = JSONobj[i].message;
	var li = document.createElement('li');
	li.innerHTML = value;
	document.getElementById("messages").appendChild(li);
}

function addAMessage(){
	var message = document.getElementById("addMessage");
	var newMessage = {
		"message": message.value
	}
	if (message.value != "") {
      // add message to list
      JSONobj.push(newMessage);
      var res = JSON.stringify(newMessage);

      // render message to display
      var li = document.createElement('li');
      li.innerHTML = message.value;
      document.getElementById("messages").appendChild(li);
      message.value = "";

  } else {
  	alert('Message cannot be empty!');
  }
}

function clearForm(){
	var message = document.getElementById("addMessage");
    message.value = "";
   
}

function clearMessages(){
	document.getElementById("messages").innerHTML = "";
	}



