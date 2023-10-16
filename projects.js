document.addEventListener('DOMContentLoaded', function() {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => {
        // Find the correct project. 
        // This example uses the filename in the URL to match the link in the JSON. 
        // Adjust as necessary.
        const currentURL = window.location.pathname;
        const projectData = data.find(project => project.link.includes(currentURL));

        if (projectData) {
          document.getElementById('projectTitle').textContent = projectData.title;
          document.getElementById('projectDescription').textContent = projectData.description;
        }
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
      });
});
