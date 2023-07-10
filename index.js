document.body.style.backgroundColor = "lightskyblue";

const addTaskButton = document.querySelector(".addButton");
const taskBar = document.querySelector(".taskBar");

const greenButton = document.querySelector("#addButton1");
const redButton = document.querySelector("#cancelButton1");

const taskInput = document.querySelector("#task");
const titleInput = document.querySelector("#title");
const dateInput = document.querySelector("#date");

const toDoList = document.querySelector(".toDoList");
const tasks = [];

const h1Inbox = document.querySelector(".inbox");

const inboxButton = document.querySelector(".inboxButton");
const todayButton = document.querySelector(".todayButton");
const weekButton = document.querySelector(".weekButton");

//project
const projectInput = document.querySelector("#project");
const addProjectButton = document.querySelector(".projectButton");
const projectList = document.querySelector(".projectList");
const projects = [];
const projectBar = document.querySelector(".projectBar");

const greenButtonProject = document.querySelector("#addButton2");
const redButtonProject = document.querySelector("#cancelButton2");

addTaskButton.addEventListener("click", () => {
  taskBar.style.visibility = "visible";
  taskBar.style.height = "100%";

  addTaskButton.style.visibility = "hidden";
  addTaskButton.style.height = "0px";
});

greenButton.addEventListener("click", (e) => {
  e.preventDefault();

  //TO-DO redundant code
  taskBar.style.visibility = "hidden";
  taskBar.style.height = "0px";

  addTaskButton.style.visibility = "visible";
  addTaskButton.style.height = "100%";

  console.log(taskInput.value, titleInput.value, dateInput.value);

  let task = Task(taskInput.value, titleInput.value, dateInput.value);
  tasks.push(task);
  toDoList.appendChild(tasks.slice(-1)[0].div);

  //cleanup
  taskInput.value = "";
  titleInput.value = "";
  dateInput.value = "";
});

redButton.addEventListener("click", () => {
  //TO-DO redundant code
  taskBar.style.visibility = "hidden";
  taskBar.style.height = "0px";

  addTaskButton.style.visibility = "visible";
  addTaskButton.style.height = "100%";
});

inboxButton.addEventListener("click", () => {
  h1Inbox.textContent = "Inbox";

  toDoList.textContent = "";

  for (x in tasks) {
    toDoList.appendChild(tasks[x].div);
  }
});

todayButton.addEventListener("click", () => {
  h1Inbox.textContent = "Today";

  toDoList.textContent = "";

  let date = new Date();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let today = `${date.getFullYear()}-${month}-${date.getDate()}`;

  let todays = tasks.filter((task) => {
    return task.date == today;
  });

  for (x in todays) {
    toDoList.appendChild(todays[x].div);
  }
});

//TO-DO make this function work correctly
weekButton.addEventListener("click", () => {
  h1Inbox.textContent = "This week";

  toDoList.textContent = "";

  let date = new Date();

  let todays = tasks.filter((task) => {
    return task.date == today;
  });

  for (x in todays) {
    toDoList.appendChild(todays[x].div);
  }
});

//PROJECT -------------------------------------------------

addProjectButton.addEventListener("click", (e) => {
  e.preventDefault();

  //TO-DO redundant code

  projectBar.style.visibility = "visible";
  projectBar.style.height = "100%";
});

redButtonProject.addEventListener("click", (e) => {
  e.preventDefault();

  //TO-DO redundant code

  projectBar.style.visibility = "hidden";
  projectBar.style.height = "0px";

  addProjectButton.style.visibility = "visible";
  addProjectButton.style.height = "100%";
});

greenButtonProject.addEventListener("click", (e) => {
  e.preventDefault();

  //TO-DO redundant code

  projectBar.style.visibility = "hidden";
  projectBar.style.height = "0px";

  addProjectButton.style.visibility = "visible";
  addProjectButton.style.height = "100%";

  let project = Project(projectInput.value);
  project.tasks = ["asda"];
  projects.push(project);
  console.log(projects);
  projectList.appendChild(projects.slice(-1)[0].div);
  console.log(projectList);

  //cleanup
  projectInput.value = "";
});

///////////////////////////////////////////////////////////////////
const createTaskDiv = (task, title, date) => {
  //TO-DO Redundant code, set taskClass
  let div = document.createElement("div");
  let h20 = document.createElement("h2");
  let h21 = document.createElement("h2");
  let h22 = document.createElement("h2");

  h20.textContent = task;
  div.appendChild(h20);

  h21.textContent = title;
  div.appendChild(h21);

  h22.textContent = date;
  div.appendChild(h22);

  return div;
};

const createProjectDiv = (project) => {
  //TO-DO set taskClass
  let div = document.createElement("div");
  let h2 = document.createElement("h2");

  h2.textContent = project;
  div.appendChild(h2);

  return div;
};

const Task = (task, title, date) => {
  const printTask = () => {
    console.log(task, title, date);
    if (div) console.log(div);
  };
  let div = createTaskDiv(task, title, date);
  return { task, title, date, div, printTask };
};

const Project = (name, tasks) => {
  const printTasks = () => {
    console.log(tasks);
  };
  let div = createProjectDiv(name);
  return { name, tasks, div, printTasks };
};
