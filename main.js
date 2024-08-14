
// Create all the content programatically
document.addEventListener('DOMContentLoaded', function () {
    console.log('The page has loaded!');

    const sidebarContainer = document.getElementById('sidebar');
    fetch('sidebar.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                let html = document.createElement("div");
                html.className = "icon-text";
                html.innerText = item.name;
                // adjust code here
                sidebarContainer.appendChild(html);
            });
        });
    console.log("The sidebar has been loaded");

    const projectContainer = document.getElementById('projectsCards');
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                let html = document.createElement("div");
                html.className = "project-card";
                html.innerText = item.name;
                // add more code here
                projectContainer.appendChild(html);
            });
        });
    console.log("The Projects have been loaded");
});
