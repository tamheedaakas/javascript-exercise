function displayWelcomeMessages() {
        
    alert("Welcome to JS Land");

   
    setTimeout(function() {
        alert("Happy Coding");
    }, 2000); 
}


window.onload = displayWelcomeMessages;