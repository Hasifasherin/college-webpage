document.addEventListener("DOMContentLoaded", () => {

  // Live Clock Function
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("liveTime").textContent = `${hours}:${minutes}:${seconds}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Course selection display
  document.getElementById("course").addEventListener("change", () => {
    const text = document.getElementById('course').value.toLowerCase();
    if (text === 'arts stream') {
      alert("You selected Arts Stream");
    } else if (text === 'science stream') {
      alert("You selected Science Stream");
    } else {
      alert("You selected Commerce");
    }
  });

  // Toggle contact form visibility
  document.querySelector("button.toggle-form").addEventListener("click", () => {
    const form = document.getElementById("contactForm");
    const button = document.querySelector("button.toggle-form");
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
      button.textContent = "Hide Form";
    } else {
      form.style.display = "none";
      button.textContent = "Show Form";
    }
  });

  // Student success stories
  const stories = [
    { name: "Ayesha R.", achievement: "Landed an internship at Google after completing her web development course." },
    { name: "Ravi S.", achievement: "Won the State-Level Robotics Challenge representing our college." },
    { name: "Meena T.", achievement: "Published a research paper on AI in the IEEE Journal." },
    { name: "Farhan K.", achievement: "Started his own ed-tech startup after final year project success." }
  ];
  function showRandomStory() {
    const random = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById("story-box").innerHTML = `
      <strong>${random.name}</strong><br>${random.achievement}
    `;
  }
  showRandomStory();

  // Populate course list
  const courses = [
    "Computer Science", "Electronics and Communication", "Mechanical Engineering",
    "Civil Engineering", "Business Administration", "Physics Honours",
    "English Literature", "Data Science"
  ];
  const courseList = document.getElementById("courseList");
  courses.forEach(course => {
    const li = document.createElement("li");
    li.textContent = course;
    courseList.appendChild(li);
  });

  // Image Slider
  let currentIndex = 0;
  const slides = document.getElementById('slideContainer');
  const totalSlides = slides?.children.length || 0;

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

  if (slides) setInterval(nextSlide, 6000);

  // Filter departments
  document.getElementById("deptFilter").addEventListener("change", () => {
    const filter = document.getElementById("deptFilter").value;
    const departments = document.querySelectorAll(".department");
    departments.forEach(dept => {
      dept.style.display = (filter === "all" || dept.dataset.dept === filter) ? "block" : "none";
    });
  });

  // Load announcement
  const spinner = document.getElementById("spinner");
  const announcementDiv = document.getElementById("announcement");

  async function loadAnnouncement() {
    spinner.style.display = "block";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
      if (!response.ok) throw new Error("Failed to fetch announcement.");
      const data = await response.json();
      announcementDiv.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
    } catch (err) {
      announcementDiv.innerHTML = `<p style="color: red;">⚠️ ${err.message}</p>`;
    } finally {
      spinner.style.display = "none";
    }
  }
  loadAnnouncement();

  // Load testimonials (unified method)
  const loader = document.getElementById('testimonial-loader');
  const testimonialContainer = document.getElementById("testimonial-container");

  async function loadTestimonials() {
    loader.style.display = 'block';
    try {
      const response = await fetch("testimonials.json");
      if (!response.ok) throw new Error("Failed to fetch testimonials.");
      const data = await response.json();
      testimonialContainer.innerHTML = "";
      data.forEach(item => {
        const div = document.createElement("div");
        div.className = "testimonial";
        div.innerHTML = `<h3>${item.name}</h3><p>${item.body || item.message}</p><small>- ${item.email}</small>`;
        testimonialContainer.appendChild(div);
      });
    } catch (error) {
      testimonialContainer.innerHTML = `
        <div class="fallback">
          <h3>⚠️ Testimonials couldn't be loaded</h3>
          <p>Please try again later or check your internet connection.</p>
        </div>
      `;
      console.error("Fetch error:", error);
    } finally {
      loader.style.display = 'none';
    }
  }
  loadTestimonials();

  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });

  // Admission Modal
  const modal = document.getElementById("admissionModal");
  document.getElementById("applyBtn").addEventListener("click", () => {
    modal.style.display = "block";
  });
  document.querySelector(".closeBtn").addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Contact form handling
  const form = document.getElementById("contactFormElement");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    try {
      if (emailInput.value.trim() === "") throw new Error("Email is required!");
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

});

const courseSearchInput = document.getElementById("courseSearch");

courseSearchInput.addEventListener("input", () => {
  const query = courseSearchInput.value.toLowerCase();
  const courseCards = document.querySelectorAll(".course-card");

  courseCards.forEach(card => {
    const courseName = card.dataset.name.toLowerCase();
    card.style.display = courseName.includes(query) ? "block" : "none";
  });
});
function calculateFee() {
  const course = document.getElementById("feeCourse").value;
  const years = parseInt(document.getElementById("duration").value, 10);
  const result = document.getElementById("feeResult");

  if (!course || isNaN(years)) {
    result.textContent = "Please select a course and enter valid duration.";
    return;
  }

  // Example per-year fees (can be customized)
  const feePerYear = {
    "Computer Science": 50000,
    "Mechanical Engineering": 45000,
    "Data Science": 60000,
  };

  const totalFee = feePerYear[course] * years;
  result.textContent = `Estimated Total Fee for ${years} year(s) in ${course}: ₹${totalFee.toLocaleString()}`;
}
  // Quiz submission
  document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="motto"]:checked');
    const result = document.getElementById("quizResult");
    if (!selected) {
      result.textContent = "❗ Please select an answer!";
      result.style.color = "red";
      return;
    }

    const correctAnswer = "d"; // "Empowering Future Minds"
    if (selected.value === correctAnswer) {
      result.textContent = "✅ Correct! 'Empowering Future Minds' is our motto.";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Oops! That's not correct. The right answer is 'Empowering Future Minds'.";
      result.style.color = "darkred";
    }
  });
function closeBanner() {
  const banner = document.getElementById("courseBanner");
  banner.style.display = "none";
}

// Show button when user scrolls down
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};



const navbar = document.getElementById("navbar");
const stickyOffset = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stickyOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});