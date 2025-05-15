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

  
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("liveTime").textContent = timeString;
  }

  updateClock(); // initial call
  setInterval(updateClock, 1000); // update every second


  function display(){
    var text=document.getElementById('course').value
    if(text=='Arts Stream'){
      alert("You selected Arts Stream");
    }
    else if(text=='science stream'){
      alert("You selected science Stream");
    }
    else{
      alert("You selected commerce")
    }
  }

function changeColor() {
  // Using getElementById
  const collegeTitle = document.getElementById("collegeName");

  collegeTitle.style.color = "blue"; 
}

const button=document.getElementById('aboutus');
const aboutSection=document.getElementById("aboutSection")

button.addEventListener('click', function () {
  if(aboutSection.style.display==='none'){
      aboutSection.style.display='Block';
      button.textContent='Hide content'
  }
  else{
    aboutSection.style.display='none'
    button.textContent='About Us'
  }
});

 const section = document.getElementById("infoSection");

    section.addEventListener("mouseover", () => {
      section.style.backgroundColor = "#f0f8ff"; // Light blue
      section.textContent = "You're hovering over this section!";
    });

    section.addEventListener("mouseout", () => {
      section.style.backgroundColor = ""; // Revert background
      section.textContent = "Hover over this section to change background and text.";
    });