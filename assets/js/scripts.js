const btnNav = document.getElementById("btn-nav");
const navbar = document.getElementById('navbar');
const logoSkillsSection = document.querySelector('.logo-skills');

function showNavbar() {

  btnNav.classList.toggle("show-nav");
  navbar.classList.toggle("active-nav");
}

let scrollSpeed = 1;
let isReturning = false;
let scrollInterval;

function scrollSection() {
  if (!isReturning) {
    logoSkillsSection.scrollLeft += scrollSpeed;

    if (logoSkillsSection.scrollLeft >= logoSkillsSection.scrollWidth - logoSkillsSection.clientWidth) {
      isReturning = true;

      logoSkillsSection.scrollTo({
        left: 0,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isReturning = false;
      }, 1000);
    }
  }
}

function startScrolling() {
  scrollInterval = setInterval(scrollSection, 10);
}

function stopScrolling() {
  clearInterval(scrollInterval);
}

logoSkillsSection.addEventListener('mouseover', stopScrolling);
logoSkillsSection.addEventListener('mouseout', startScrolling);

startScrolling();


