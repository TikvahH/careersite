var updateForm = function(e){
    e.preventDefault(); // this line of code effectively stops the form from submitting. When you have a place to send the form data, you can comment this line out
   
    //this is where you would write the code to run the POST request. The beautiful thing about this empty function is that you can write the code to update the modal to say 'Success!!', even before you've written the code to actually send the form data to a server, which is needed to process the form. You could show some hidden that says 'SUCCESS!! 
	var formData = {
            'firstName'              : $('#firstName').val(),
			'lastName'              : $('#lastName').val(),
            'email'             : $('#email').val(),
			'phoneNumber'             : $('#phoneNumber').val(),
			'contactPref'             : $('#contactPref').val(),
			'expLevel'             : $('#expLevel').val(),
            'message'    : $('#message').val()
        };
	$.ajax({
  url: "http://sage-cycling-92017.appspot.com/",
  data:formData,
  method: 'POST',
  context: document.body
}).done(function() {
	$('#successText').show();
});
    
};



/*
var checkForm = function(e) {
            
    var form = (e.target) ? e.target : e.srcElement;
    if(form.name.value == "") {
      alert("Please enter your Name");
      form.name.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return isFormValid; //return false if invalid
    }
    if(form.email.value == "") {
      alert("Please enter a valid Email address");
      form.email.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return isFormValid; //return false if invalid
    }
    if(form.message.value == "") {
      alert("Please enter your comment or question in the Message box");
      form.message.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return isFormValid; //return false if invalid
    }
  };
*/
  var modal_init = function() {

    var modalWrapper = document.getElementById("modal_wrapper");
    var modalWindow  = document.getElementById("modal_window");

    var openModal = function(e)
    {
      modalWrapper.className = "overlay";
      modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
      modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };

    var closeModal = function(e)
    {
      modalWrapper.className = "";
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    };

    var clickHandler = function(e) {
      if(!e.target) e.target = e.srcElement;
      if(e.target.tagName == "DIV") {
        if(e.target.id != "modal_window") closeModal(e);
      }
    };

    var keyHandler = function(e) {
      if(e.keyCode == 27) closeModal(e);
    };

    if(document.addEventListener) {
      document.getElementById("modal_open").addEventListener("click", openModal, false);
      document.getElementById("modal_close").addEventListener("click", closeModal, false);
      document.addEventListener("click", clickHandler, false);
      document.addEventListener("keydown", keyHandler, false);
    } else {
      document.getElementById("modal_open").attachEvent("onclick", openModal);
      document.getElementById("modal_close").attachEvent("onclick", closeModal);
      document.attachEvent("onclick", clickHandler);
      document.attachEvent("onkeydown", keyHandler);
    }

  };


  if(document.addEventListener) {
    document.getElementById("modal_feedback").addEventListener("submit", updateForm, false);
    document.addEventListener("DOMContentLoaded", modal_init, false);
  } else {
    document.getElementById("modal_feedback").attachEvent("onsubmit", updateForm);
    window.attachEvent("onload", modal_init);
  }
$('#successText').hide();


