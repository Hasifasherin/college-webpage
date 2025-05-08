function submitMessage(){
    const message="Thank you for contacting us!";

    let username=document.getElementById("name").value;

    var usermail=document.getElementById("email").value;

    alert(`${message} we will reach out to ${username} at ${usermail}.` );

    return false;

}