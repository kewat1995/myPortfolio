
const projectContainer = document.querySelector('.project-container');

const projects = [
    {
        image: "images/p1.png",
        title: "Life Timer App",
        url: "./life-counter/index.html",
      },
      
      {
        image: "images/p3.png",
        title: "Percentage Calculation App",
        url: "./percentages/index.html",
      },
      
      {
        image: "images/p4.png",
        title: "Math Quiz App",
        url: "./math-ques-1/index.html",
      },
      {
        image: "images/p5.png",
        title: "Search & Filters Product App",
        url: "./product-search/index.html",
      },
      {
        image: "images/p6.png",
        title: "Color Generator App",
        url: "./color-generator/index.html",
      },
      {
        image: "images/p7.png",
        title: "QR Code Generator App",
        url: "./QR-code/index.html",
      },
      {
        image: "images/p8.png",
        title: "Expense Tracker App",
        url: "./expensive-tracker/tracker.html",
      },
      {
        image: "images/p9.png",
        title: "Password Generator App",
        url: "./password-generator/index.html",
      },
      {
        image: "images/p10.png",
        title: "Drawer + Dropdown",
        url: "./musicwebsite/index.html",
      },
];

const showProjects = () => {
    let output = "";
    projects.forEach(
      ({ image, title, url }) =>
        (output +=`
        <div class="grid-items">
              <div class="card">
                <img src="${image}" alt="life-counter" />
                <a href="${url}" target ="_blank">
                  <div class="grid-content">
                    <h3>${title}</h3>
                  </div>
                </a>
              </div>
            </div>
        `)
    );
    projectContainer.innerHTML = output;
    console.log(projects)
  };
  


showProjects();