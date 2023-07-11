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

//TO-DO think about this
let edit = false;
let editedTask;

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

  if (!edit) {
    for (x in projects) {
      if (projects[x].name == task.project) {
        console.log(projects[x]);
        projects[x].tasks.push(task.project);
      }
    }
    tasks.push(task);

    toDoList.appendChild(tasks.slice(-1)[0].div);
  }

  //TO-DO make this work
  if (edit) {
    console.log(editedTask);
    editToDoItem(editedTask);

    edit = !edit;
  }

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

//TO-DO decompose code
///////////////////////////////////////////////////////////////////
const createTaskDiv = (task, title, date, project) => {
  //TO-DO Redundant code
  let div = document.createElement("div");
  div.classList.add("task");
  let h20 = document.createElement("h2");
  let h21 = document.createElement("h2");
  let h22 = document.createElement("h2");
  let h23 = document.createElement("h2");

  h20.textContent = task;
  div.appendChild(h20);
  h21.textContent = title;
  div.appendChild(h21);
  h22.textContent = date;
  div.appendChild(h22);
  h23.textContent = project;
  div.appendChild(h23);

  //buttons
  let buttons = document.createElement("div");
  buttons.classList.add("taskButtons");

  let button1 = document.createElement("button");
  button1.textContent = "delete";
  let button2 = document.createElement("button");
  button2.textContent = "edit";
  let button3 = document.createElement("button");
  button3.textContent = "Mark complete";

  buttons.appendChild(button1);
  buttons.appendChild(button2);
  buttons.appendChild(button3);

  div.appendChild(buttons);

  //button functions
  button1.addEventListener("click", () => {
    toDoList.removeChild(div);
  });

  //TO-DO make this work
  button2.addEventListener("click", () => {
    taskBar.style.visibility = "visible";
    taskBar.style.height = "100%";
    addTaskButton.style.visibility = "hidden";
    addTaskButton.style.height = "0px";

    taskInput.value = h20.textContent;
    titleInput.value = h21.textContent;
    dateInput.value = h22.textContent;
    projectTInput.value = h23.textContent;

    editedTask = task;
    edit = true;
  });

  button3.addEventListener("click", () => {
    if (button3.innerText == "Mark complete") {
      button3.textContent = "Mark incomplete";
      div.style.opacity = 0.7;

      console.log(task);
    } else {
      button3.textContent = "Mark complete";
      div.style.opacity = 1;
    }
  });
  return div;
};

const createProjectDiv = (project) => {
  let div = document.createElement("div");
  div.classList.add("project");
  let h2 = document.createElement("h2");

  let button = document.createElement("button");
  button.textContent = "X";

  h2.textContent = project;
  div.appendChild(h2);
  div.appendChild(button);

  return div;
};

const Task = (task, title, date, project) => {
  const printTask = () => {
    console.log(task, title, date);
    if (div) console.log(div);
  };
  let div = createTaskDiv(task, title, date, project);
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

/// editing

const setEditTask = (task) => {
  editedTask = task;
};

const editToDoItem = (task) => {
  for (x in tasks) {
    if (tasks[x].task == task) {
      tasks[x].task = taskInput.value;
      tasks[x].title = titleInput.value;
      tasks[x].date = dateInput.value;

      tasks[x].div.children.item(0).textContent = taskInput.value;
      tasks[x].div.children.item(1).textContent = titleInput.value;
      tasks[x].div.children.item(2).textContent = dateInput.value;

      // console.log(tasks[x].div.children.item(0).textContent);
    }
  }
};
