const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// 1. Fungsi untuk menampilkan data yang tersimpan saat halaman dibuka
function showTask() {
    list.innerHTML = localStorage.getItem("voniData") || "";
}

// 2. Fungsi untuk menyimpan data ke memori browser
function saveData() {
    localStorage.setItem("voniData", list.innerHTML);
}

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
    saveData(); // Simpan setelah tambah
}

function toggleTask(element) {
    element.classList.toggle('completed');
    saveData(); // Simpan setelah coret
}

function deleteTask(element) {
    element.parentElement.remove();
    saveData(); // Simpan setelah hapus
}

// Fitur enter untuk menambah tugas
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Panggil fungsi tampilkan data saat halaman pertama kali dibuka
showTask();
