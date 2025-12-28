document.addEventListener("DOMContentLoaded", () => {
  // Navbar active link tracking
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      this.classList.add("active")

      // Get target section
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" })
      }
    })
  })

  // Set initial active link
  navLinks[0].classList.add("active")

  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = document.querySelectorAll(".stat-number")
        statNumbers.forEach((stat) => {
          const target = Number.parseInt(stat.getAttribute("data-target"))
          animateCounter(stat, target)
        })
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const statsSection = document.querySelector(".stats-section")
  if (statsSection) {
    observer.observe(statsSection)
  }
})

function animateCounter(element, target) {
  let current = 0
  const increment = target / 30
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current)
    }
  }, 50)
}

// Gallery Modal
const modal = document.getElementById("modal")
const modalImage = document.getElementById("modal-image")
const galleryImages = [
  "https://via.placeholder.com/400?text=Galeri+Kelas+1",
  "https://via.placeholder.com/400?text=Galeri+Kelas+2",
  "https://via.placeholder.com/400?text=Galeri+Kelas+3",
  "https://via.placeholder.com/400?text=Galeri+Kelas+4",
  "https://via.placeholder.com/400?text=Galeri+Kelas+5",
  "https://via.placeholder.com/400?text=Galeri+Kelas+6",
]

let currentImageIndex = 0

function openModal(index) {
  currentImageIndex = index
  modalImage.src = galleryImages[currentImageIndex]
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length
  modalImage.src = galleryImages[currentImageIndex]
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
  modalImage.src = galleryImages[currentImageIndex]
}

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal()
  }
})

// Keyboard navigation for modal
document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("active")) {
    if (e.key === "ArrowRight") {
      nextImage()
    } else if (e.key === "ArrowLeft") {
      prevImage()
    } else if (e.key === "Escape") {
      closeModal()
    }
  }
})

window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".info-card, .achievement-card")
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    }
  })
})
