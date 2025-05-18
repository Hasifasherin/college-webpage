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



 window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
    });
  });
});


document.getElementById("applyBtn").addEventListener("click", function() {
  document.getElementById("admissionModal").style.display = "block";
});

document.querySelector(".closeBtn").addEventListener("click", function() {
  document.getElementById("admissionModal").style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target == document.getElementById("admissionModal")) {
    document.getElementById("admissionModal").style.display = "none";
  }
});
// Array of courses
const courses = [
  "Computer Science",
  "Electronics and Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Business Administration",
  "Physics Honours",
  "English Literature",
  "Data Science"
];

// Target the courseList element
const courseList = document.getElementById("courseList");

// Loop through the array and create list items
courses.forEach(function(course) {
  const li = document.createElement("li");
  li.textContent = course;
  courseList.appendChild(li);
});
