const addTaskButton = document.querySelector(".addButton");
const taskBar = document.querySelector(".taskBar");

const greenButton = document.querySelector("#addButton1");
const redButton = document.querySelector("#cancelButton1");

const taskInput = document.querySelector("#task");
const titleInput = document.querySelector("#title");
const dateInput = document.querySelector("#date");
const projectTInput = document.querySelector("#projectt");

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

  projectTInput.value = h1Inbox.textContent;
});

greenButton.addEventListener("click", (e) => {
  e.preventDefault();

  //TO-DO redundant code
  taskBar.style.visibility = "hidden";
  taskBar.style.height = "0px";

  addTaskButton.style.visibility = "visible";
  addTaskButton.style.height = "100%";

  console.log(taskInput.value, titleInput.value, dateInput.value);

  let task = Task(
    taskInput.value,
    titleInput.value,
    dateInput.value,
    projectTInput.value
  );
  for (x in projects) {
    if (projects[x].name == task.project) {
      console.log(projects[x]);
      projects[x].tasks.push(task.project);
    }
  }
  tasks.push(task);
  toDoList.appendChild(tasks.slice(-1)[0].div);

  //cleanup
  taskInput.value = "";
  titleInput.value = "";
  dateInput.value = "";
  projectTInput.value = "";
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

  // //   let date = new Date();

  // //   let todays = tasks.filter((task) => {
  // //     return task.date == today;
  // //   });

  //   for (x in todays) {
  //     toDoList.appendChild(todays[x].div);
  //   }
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
  // TO-DO fix the sizing
  addProjectButton.style.height = "3.5vh";

  let project = Project(projectInput.value);
  projects.push(project);
  projectList.appendChild(projects.slice(-1)[0].div);

  project.div.addEventListener("click", () => {
    h1Inbox.textContent = project.name;

    toDoList.textContent = "";
    let list = tasks.filter((task) => {
      return task.project == h1Inbox.textContent;
    });
    for (x in list) {
      toDoList.appendChild(list[x].div);
    }
  });

  //cleanup
  projectInput.value = "";
});

///////////////////////////////////////////////////////////////////
const createTaskDiv = (task, title, date) => {
  //TO-DO Redundant code
  let div = document.createElement("div");
  div.classList.add("task");
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
  let div = document.createElement("div");
  div.classList.add("project");
  let h2 = document.createElement("h2");

  h2.textContent = project;
  div.appendChild(h2);

  return div;
};

const Task = (task, title, date, project) => {
  const printTask = () => {
    console.log(task, title, date);
    if (div) console.log(div);
  };
  let div = createTaskDiv(task, title, date);
  return { task, title, date, project, div, printTask };
};

const Project = (name) => {
  const printTasks = () => {
    console.log(tasks);
  };
  let div = createProjectDiv(name);
  let tasks = [];
  return { name, tasks, div, printTasks };
};
