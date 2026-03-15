const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function addTask() {
    const taskValue = input.value.trim();
    if (taskValue === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskValue}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Hapus</button>
    `;
    
    list.appendChild(li);
    input.value = ""; // Reset input
}

function toggleTask(element) {
    element.classList.toggle('completed');
}

function deleteTask(element) {
    element.parentElement.remove();
}

// Fitur enter untuk menambah tugas
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
