// Live Clock Function
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

// Course selection display
function display() {
  const text = document.getElementById('course').value;
  if (text === 'Arts Stream') {
    alert("You selected Arts Stream");
  } else if (text === 'science stream') {
    alert("You selected Science Stream");
  } else {
    alert("You selected Commerce");
  }
}

// Toggle contact form visibility
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

// Student success stories
const stories = [
  {
    name: "Ayesha R.",
    achievement: "Landed an internship at Google after completing her web development course.",
  },
  {
    name: "Ravi S.",
    achievement: "Won the State-Level Robotics Challenge representing our college.",
  },
  {
    name: "Meena T.",
    achievement: "Published a research paper on AI in the IEEE Journal.",
  },
  {
    name: "Farhan K.",
    achievement: "Started his own ed-tech startup after final year project success.",
  }
];

function showRandomStory() {
  const random = stories[Math.floor(Math.random() * stories.length)];
  document.getElementById("story-box").innerHTML = `
    <strong>${random.name}</strong><br>
    ${random.achievement}
  `;
}

// Populate course list
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

const courseList = document.getElementById("courseList");
courses.forEach(function (course) {
  const li = document.createElement("li");
  li.textContent = course;
  courseList.appendChild(li);
});

// Image Slider
let currentIndex = 0;
const slides = document.getElementById('slideContainer');
const totalSlides = slides.children.length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Auto slide every 6 seconds
setInterval(nextSlide, 6000);

// Filter departments
function filterDepartments() {
  const filter = document.getElementById("deptFilter").value;
  const departments = document.querySelectorAll(".department");

  departments.forEach(dept => {
    if (filter === "all" || dept.dataset.dept === filter) {
      dept.style.display = "block";
    } else {
      dept.style.display = "none";
    }
  });
}

// Load announcement
const spinner = document.getElementById("spinner");
const announcementDiv = document.getElementById("announcement");

async function loadAnnouncement() {
  spinner.style.display = "block";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    if (!response.ok) throw new Error("Failed to fetch announcement.");

    const data = await response.json();
    announcementDiv.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
    `;
  } catch (err) {
    announcementDiv.innerHTML = `<p style="color: red;">⚠️ ${err.message}</p>`;
  } finally {
    spinner.style.display = "none";
  }
}

loadAnnouncement();

// Load testimonials
const container = document.getElementById("testimonial-container");

fetch("testimonials.json")
  .then((response) => response.json())
  .then((data) => {
    container.innerHTML = ""; // Clear loading text
    data.forEach((comment) => {
      const div = document.createElement("div");
      div.classList.add("testimonial");
      div.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
        <small>- ${comment.email}</small>
      `;
      container.appendChild(div);
    });
  })
  .catch((error) => {
    container.innerHTML = "<p>Failed to load testimonials. Please try again later.</p>";
    console.error("Error fetching data:", error);
  });

// Run all on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
    });
  });

  // Admission Modal
  document.getElementById("applyBtn").addEventListener("click", function () {
    document.getElementById("admissionModal").style.display = "block";
  });

  document.querySelector(".closeBtn").addEventListener("click", function () {
    document.getElementById("admissionModal").style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === document.getElementById("admissionModal")) {
      document.getElementById("admissionModal").style.display = "none";
    }
  });

  // Contact form handling
  const form = document.getElementById("contactFormElement");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    try {
      if (emailInput.value.trim() === "") {
        throw new Error("Email is required!");
      }

      const contactData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      };

      localStorage.setItem("contactData", JSON.stringify(contactData));
      alert(`Thank you for contacting us, ${contactData.name}! We will reach out to you at ${contactData.email}.`);
      form.reset();
    } catch (error) {
      alert("Error: " + error.message);
    }
  });

  // Show random success story
  showRandomStory();
});
