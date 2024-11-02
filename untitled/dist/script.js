// Simulated navigation and language functions
function showSection(section) {
  alert(`Navigating to ${section} section (simulate content loading)`);
}

function setLanguage(language) {
  alert(`Language set to ${language.toUpperCase()}`);
}

function showLogin() {
  const username = prompt("Enter Username:");
  const password = prompt("Enter Password:");

  if (username === "member" && password === "password123") {
    alert("Login successful! Redirecting to member area...");
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

// Program Data Array (Ensured as Single Instance)
const programsData = [
  {
    title: "Community Health Program",
    description: "Providing accessible health services to underprivileged communities.",
    image: "https://via.placeholder.com/250x150"
  },
  {
    title: "Youth Education Support",
    description: "Offering scholarships and resources for youth education.",
    image: "https://via.placeholder.com/250x150"
  },
  {
    title: "Environmental Awareness",
    description: "Promoting environmental conservation and sustainable practices.",
    image: "https://via.placeholder.com/250x150"
  }
];

// Populate Program Cards dynamically
function loadProgramCards() {
  console.log("Loading program cards..."); // Debugging statement
  console.log("Program card data:", programsData); // Check if data is accessible
  
  const programCardsContainer = document.getElementById("program-cards");

  programsData.forEach(program => {
    const programCard = document.createElement("div");
    programCard.classList.add("program-card");

    programCard.innerHTML = `
      <img src="${program.image}" alt="${program.title}">
      <h4>${program.title}</h4>
      <p>${program.description}</p>
    `;

    programCardsContainer.appendChild(programCard);
  });
}


// Leadership Data and Profiles
const leadershipData = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    bio: "John has led the organization since its inception, driving impactful change in the community.",
    image: "https://via.placeholder.com/80"
  },
  {
    name: "Jane Smith",
    title: "Director of Operations",
    bio: "Jane oversees the day-to-day activities and ensures smooth program implementation.",
    image: "https://via.placeholder.com/80"
  },
  {
    name: "Michael Lee",
    title: "Head of Community Outreach",
    bio: "Michael is dedicated to engaging with the community and fostering meaningful relationships.",
    image: "https://via.placeholder.com/80"
  },
  {
    name: "Sarah Brown",
    title: "Chief Financial Officer",
    bio: "Sarah manages the organization's finances, ensuring transparency and accountability.",
    image: "https://via.placeholder.com/80"
  }
];

// Populate Leadership Profiles dynamically
function loadLeadershipProfiles() {
  const leadershipContainer = document.getElementById("leadership-cards");
  leadershipData.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("leadership-card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h4>${member.name}</h4>
      <p><em>${member.title}</em></p>
      <p>${member.bio}</p>
    `;

    leadershipContainer.appendChild(card);
  });
}

// Volunteer Stories Slider
const volunteerStories = [
  "Volunteering here has changed my perspective and helped me make a real impact!",
  "I love working with this organization; it truly feels like family.",
  "The programs here are well-organized and make a noticeable difference in people's lives.",
  "Volunteering in the health program has been one of the most fulfilling experiences.",
  "I'm grateful to contribute to such a meaningful cause. This organization truly cares about the community."
];
let currentStoryIndex = 0;

function rotateStories() {
  const storyElement = document.getElementById("current-story");
  storyElement.textContent = volunteerStories[currentStoryIndex];
  currentStoryIndex = (currentStoryIndex + 1) % volunteerStories.length;
}

function startStoryRotation() {
  rotateStories(); // Show the first story immediately
  setInterval(rotateStories, 5000);
}

// Initialize content on page load
document.addEventListener("DOMContentLoaded", () => {
  loadProgramCards();
  loadLeadershipProfiles();
  startStoryRotation();
});

// Sample data for events
const eventsData = [
  { title: "Community Health Workshop", date: "2023-12-15", time: "10:00 AM", location: "Community Center", description: "A workshop on community health and wellness." },
  { title: "Youth Education Fair", date: "2023-12-20", time: "2:00 PM", location: "High School Auditorium", description: "An event focused on educational opportunities for youth." }
];

// Sample data for gallery images and videos
const galleryItems = [
  { type: "image", src: "https://via.placeholder.com/150", caption: "Health Workshop" },
  { type: "image", src: "https://via.placeholder.com/150", caption: "Education Fair" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Community Clean-Up" }
];

// Load events into the Events Calendar
function loadEvents() {
  const eventList = document.getElementById("event-list");
  const eventSelect = document.getElementById("event");

  eventsData.forEach(event => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${event.title}</strong><br>${event.date} at ${event.time}<br>${event.location}<br><small>${event.description}</small>`;
    eventList.appendChild(li);

    const option = document.createElement("option");
    option.value = event.title;
    option.textContent = event.title;
    eventSelect.appendChild(option);
  });
}

// Event registration form submission
document.getElementById("registration-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("registration-success").style.display = "block";
  setTimeout(() => {
    document.getElementById("registration-success").style.display = "none";
  }, 3000);
});

// Load gallery items
function loadGallery() {
  const galleryGrid = document.getElementById("gallery-grid");

  galleryItems.forEach(item => {
    const element = document.createElement(item.type === "image" ? "img" : "video");
    element.src = item.src;
    element.alt = item.caption;
    element.classList.add("gallery-item");
    if (item.type === "video") element.controls = false;

    // Add click event to open modal
    element.addEventListener("click", () => openModal(item));

    galleryGrid.appendChild(element);
  });
}

// Open modal for gallery item
function openModal(item) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalVideo = document.getElementById("modal-video");
  const caption = document.getElementById("caption");

  if (item.type === "image") {
    modalImage.src = item.src;
    modalImage.style.display = "block";
    modalVideo.style.display = "none";
  } else {
    modalVideo.src = item.src;
    modalVideo.style.display = "block";
    modalImage.style.display = "none";
  }
  
  caption.textContent = item.caption;
  modal.style.display = "flex";
}

// Close modal
document.getElementById("close-modal").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.getElementById("modal-video").pause(); // Pause video on close
});

// Initialize content on page load
document.addEventListener("DOMContentLoaded", () => {
  loadEvents();
  loadGallery();
});

// Volunteer Form Submission
document.getElementById("volunteer-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("volunteer-success").style.display = "block";
  
  // Clear the form after submission
  document.getElementById("volunteer-form").reset();
  
  // Hide the success message after 3 seconds
  setTimeout(() => {
    document.getElementById("volunteer-success").style.display = "none";
  }, 3000);
});

// Sample data for impact stories
const impactStoriesData = [
  {
    title: "Empowering Women",
    description: "Through our skill development programs, Sarah learned new skills that helped her secure a job and support her family."
  },
  {
    title: "Youth Education Success",
    description: "Our educational support enabled John to complete high school and gain a scholarship for college."
  },
  {
    title: "Health Program Benefits",
    description: "Our health workshops helped Anna manage her health better, leading to a happier and healthier life."
  }
];

// Sample data for testimonials
const testimonialsData = [
  "This organization changed my life; I am now able to support my family.",
  "Volunteering here has been an amazing experience. I feel connected to the community.",
  "The programs offered by this organization truly make a difference in people's lives.",
  "Thanks to their educational support, I am the first in my family to attend college.",
  "Their health programs have significantly improved the well-being of our community."
];

// Load impact stories dynamically
function loadImpactStories() {
  const storiesContainer = document.getElementById("stories-container");

  impactStoriesData.forEach(story => {
    const storyCard = document.createElement("div");
    storyCard.classList.add("story-card");

    storyCard.innerHTML = `
      <h4>${story.title}</h4>
      <p>${story.description}</p>
    `;

    storiesContainer.appendChild(storyCard);
  });
}

// Testimonial slider functionality
let currentTestimonialIndex = 0;

function displayTestimonial(index) {
  const testimonialElement = document.getElementById("current-testimonial");
  testimonialElement.textContent = testimonialsData[index];
}

function showNextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
  displayTestimonial(currentTestimonialIndex);
}

function showPreviousTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
  displayTestimonial(currentTestimonialIndex);
}

// Event listeners for testimonial navigation
document.getElementById("next-testimonial").addEventListener("click", showNextTestimonial);
document.getElementById("prev-testimonial").addEventListener("click", showPreviousTestimonial);

// Initialize content on page load
document.addEventListener("DOMContentLoaded", () => {
  loadImpactStories();
  displayTestimonial(currentTestimonialIndex); // Show the first testimonial
});

// Sample data for articles
const articlesData = [
  {
    title: "Community Health Program Achievements",
    image: "https://via.placeholder.com/250x150",
    excerpt: "Learn about the latest accomplishments in our Community Health Program.",
    link: "#"
  },
  {
    title: "Youth Education Updates",
    image: "https://via.placeholder.com/250x150",
    excerpt: "Discover how our Youth Education program is empowering the next generation.",
    link: "#"
  },
  {
    title: "Environmental Awareness Success",
    image: "https://via.placeholder.com/250x150",
    excerpt: "Our Environmental Awareness initiatives are making a positive impact.",
    link: "#"
  }
];

// Load articles dynamically
function loadArticles() {
  const articlesList = document.getElementById("articles-list");

  articlesData.forEach(article => {
    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    articleCard.innerHTML = `
      <img src="${article.image}" alt="${article.title}">
      <h4>${article.title}</h4>
      <p>${article.excerpt}</p>
      <a href="${article.link}" class="read-more">Read More</a>
    `;

    articlesList.appendChild(articleCard);
  });
}

// Newsletter form submission
document.getElementById("newsletter-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("subscription-success").style.display = "block";

  // Clear the form
  document.getElementById("newsletter-form").reset();

  // Hide the success message after 3 seconds
  setTimeout(() => {
    document.getElementById("subscription-success").style.display = "none";
  }, 3000);
});

// Initialize content on page load
document.addEventListener("DOMContentLoaded", loadArticles);

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("contact-success").style.display = "block";

  // Clear the form
  document.getElementById("contact-form").reset();

  // Hide the success message after 3 seconds
  setTimeout(() => {
    document.getElementById("contact-success").style.display = "none";
  }, 3000);
});

// Sample data for active campaigns
const campaignsData = [
  {
    title: "Community Health Initiative",
    description: "Help us provide medical supplies and health workshops to underserved communities.",
    goal: 5000,
    raised: 3000
  },
  {
    title: "Education for All",
    description: "Support our mission to provide educational materials and scholarships to children.",
    goal: 8000,
    raised: 4500
  },
  {
    title: "Environmental Conservation",
    description: "Join us in preserving our environment by funding tree planting and cleanup activities.",
    goal: 3000,
    raised: 1500
  }
];

// Load campaigns dynamically with progress trackers
function loadCampaigns() {
  const campaignsList = document.getElementById("campaigns-list");

  campaignsData.forEach(campaign => {
    const campaignCard = document.createElement("div");
    campaignCard.classList.add("campaign-card");

    // Calculate the progress percentage
    const progressPercentage = Math.min((campaign.raised / campaign.goal) * 100, 100).toFixed(1);

    campaignCard.innerHTML = `
      <h4>${campaign.title}</h4>
      <p>${campaign.description}</p>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${progressPercentage}%;"></div>
      </div>
      <div class="progress-info">
        <span>Raised: $${campaign.raised}</span>
        <span>Goal: $${campaign.goal}</span>
      </div>
      <button class="contribute-btn" onclick="alert('Thank you for contributing to ${campaign.title}!')">Contribute</button>
    `;

    campaignsList.appendChild(campaignCard);
  });
}

// Initialize content on page load
document.addEventListener("DOMContentLoaded", loadCampaigns);


// Newsletter Form Submission in Footer
document.getElementById("footer-newsletter-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("footer-subscription-success").style.display = "block";

  // Clear the form
  document.getElementById("footer-newsletter-form").reset();

  // Hide the success message after 3 seconds
  setTimeout(() => {
    document.getElementById("footer-subscription-success").style.display = "none";
  }, 3000);
});

// Set the current year in the footer copyright notice
document.getElementById("year").textContent = new Date().getFullYear();