const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const pesan = document.getElementById("pesan");
const totalTaskEl = document.getElementById("totalTask");
const doneTaskEl = document.getElementById("doneTask");

let totalTask = 0;
let doneTask = 0;

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  // Validasi
  if (taskText === "") {
    pesan.textContent = "Tugas tidak boleh kosong!";
    pesan.style.color = "red";
    return;
  }

  pesan.textContent = "";

  const li = document.createElement("li");
  li.textContent = taskText;

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✓";
  doneBtn.className = "done";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "delete";

  btnGroup.appendChild(doneBtn);
  btnGroup.appendChild(deleteBtn);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  totalTask++;
  updateInfo();

  // Tandai selesai
  doneBtn.addEventListener("click", () => {
    if (!li.classList.contains("selesai")) {
      li.classList.add("selesai");
      doneTask++;
      updateInfo();
    }
  });

  // Hapus tugas
  deleteBtn.addEventListener("click", () => {
    if (li.classList.contains("selesai")) {
      doneTask--;
    }
    totalTask--;
    li.remove();
    updateInfo();
  });

  taskInput.value = "";
});

function updateInfo() {
  totalTaskEl.textContent = totalTask;
  doneTaskEl.textContent = doneTask;
}
