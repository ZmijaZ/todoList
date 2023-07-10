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
