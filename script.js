function submitMessage(){
    const message="Thank you for contacting us!";

    let username=document.getElementById("name").value;

    var usermail=document.getElementById("email").value;

    alert(`${message} we will reach out to ${username} at ${usermail}.` );

    return false;

}

function toggleForm() {
    const form = document.getElementById("contactForm");
    const button = document.querySelector("button");
  
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
      button.textContent = "Hide Form";
    } else {
      form.style.display = "none";
      button.textContent = "Show Form";
    }
  }
  