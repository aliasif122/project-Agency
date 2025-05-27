// carousel-start

const carousel = document.querySelector('.team-carousel');
const dots = document.querySelectorAll('.pagination-dots .dot');
const leftBtn = document.querySelector('.arrow-left');
const rightBtn = document.querySelector('.arrow-right');

const totalPages = dots.length;
let currentPage = 0;

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function scrollToPage(pageIndex) {
  const cardWidth = carousel.querySelector('.team-card').offsetWidth;
  const gap = 20; // match your CSS gap
  const scrollLeft = pageIndex * (cardWidth * 2 + gap); // 2 cards per page + gap between them
  carousel.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
  currentPage = pageIndex;
  updateDots(currentPage);
}

// Click dots to scroll
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => scrollToPage(idx));
});

// Arrow buttons
leftBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    scrollToPage(currentPage - 1);
  }
});
rightBtn.addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    scrollToPage(currentPage + 1);
  }
});

// Highlight dots on manual scroll
carousel.addEventListener('scroll', () => {
  const cardWidth = carousel.querySelector('.team-card').offsetWidth;
  const gap = 20;
  const scrollLeft = carousel.scrollLeft;
  // calculate approximate page by dividing scrollLeft by width of 2 cards + gap
  const page = Math.round(scrollLeft / (cardWidth * 2 + gap));
  if (page !== currentPage && page >= 0 && page < totalPages) {
    currentPage = page;
    updateDots(currentPage);
  }
});

// Carousel-End

// Accordian-Start

  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Close all accordions and update icons
      document.querySelectorAll(".accordion-item").forEach(i => {
        i.classList.remove("active");
        const iconImg = i.querySelector(".icon img");
        if (iconImg) iconImg.src = "Images/down.png";
      });

      // If this one was not already open, open it and change icon
      if (!isActive) {
        item.classList.add("active");
        const iconImg = item.querySelector(".icon img");
        if (iconImg) iconImg.src = "Images/up.png";
      }
    });
  });
// Accordian-Start

  const select = document.getElementById('customSelect');
  const selected = select.querySelector('.selected-option');
  const options = select.querySelector('.dropdown-options');

  select.addEventListener('click', () => {
    select.classList.toggle('open');
  });

  options.querySelectorAll('li').forEach(option => {
    option.addEventListener('click', (e) => {
      selected.textContent = option.textContent;
      select.classList.remove('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });

  
