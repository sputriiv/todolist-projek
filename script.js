const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function addTask() {
    const taskValue = input.value.trim();
    if (taskValue === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="this.classList.toggle('completed')">${taskValue}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Hapus</button>
    `;
    
    list.appendChild(li);
    input.value = "";
}

// Tambah tugas pakai Enter
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
