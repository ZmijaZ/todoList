document.body.style.backgroundColor = "lightskyblue";

const addTaskButton = document.querySelector(".addButton");
const taskBar = document.querySelector(".taskBar");

const greenButton = document.querySelector("#addButton1");
const redButton = document.querySelector("#cancelButton1");

const taskInput = document.querySelector("#task");
const titleInput = document.querySelector("#title");
const dateInput = document.querySelector("#date");

const toDoList = document.querySelector(".toDolist");
const tasks = [];

const h1Inbox = document.querySelector(".inbox");

const inboxButton = document.querySelector(".inboxButton");
const todayButton = document.querySelector(".todayButton");
const weekButton = document.querySelector(".weekButton");

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

weekButton.addEventListener("click", () => {
  h1Inbox.textContent = "This week";

  toDoList.textContent = "";

  let date = new Date();

  console.log(date.getDay());

  let todays = tasks.filter((task) => {
    return task.date == today;
  });

  for (x in todays) {
    toDoList.appendChild(todays[x].div);
  }
});

const createTaskDiv = (task, title, date) => {
  //TO-DO Redundant code
  let div = document.createElement("div");
  let h20 = document.createElement("h2");
  let h21 = document.createElement("h2");
  let h22 = document.createElement("h2");

  h20.textContent = task;
  div.append(h20);

  h21.textContent = title;
  div.append(h21);

  h22.textContent = date;
  div.append(h22);

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
