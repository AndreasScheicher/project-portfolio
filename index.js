// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Fetching projects from projects.json
document.addEventListener('DOMContentLoaded', function() {
  fetch('./projects.json')
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.getElementById('projectsContainer');
      const templateProject = projectsContainer.querySelector('.projects__row');

      // Clear out the template from the container
      projectsContainer.innerHTML = '';

      // Loop through the projects data and create a new entry for each
      data.forEach(project => {
          // Clone the template
          const projectClone = templateProject.cloneNode(true);

          // Fill in the details
          projectClone.querySelector('.projects__row-img').src = project.image;
          projectClone.querySelector('.projects__row-content-title').textContent = project.title;
          projectClone.querySelector('.projects__row-content-desc').textContent = project.description;
          const projectLink = projectClone.querySelector('.btn--med');
          projectLink.href = project.link;
          projectLink.textContent = "Go to Project";  // You can adjust this text if needed

          // Append the new project entry to the container
          projectsContainer.appendChild(projectClone);
      });
    })
    .catch(error => {
      console.error("Error fetching projects:", error);
    });
});
