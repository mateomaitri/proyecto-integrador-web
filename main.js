// Datos simulados de usuarios y tareas
const users = [
    {
        name: "admin",
        email: "123",
        password: "123"
    },
    {
        name: "persona #2",
        email: "email2@email.com",
        password: "contraseña2"
    }
];

const todos = [
    {
        nameTodo: "todo1",
        descripcion: "ejemplo",
        dueño: "persona #1"
    }
];

// Función para realizar el login
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirigir al usuario a todo.html después de iniciar sesión correctamente
        window.location.href = "/todo/todo.html";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
}

function register(){
    console.log("Hola mundo")
}

// Función para agregar una nueva tarea
function addTodo() {
    const todoName = document.getElementById("todoName").value;
    const todoDescription = document.getElementById("todoDescription").value;

    // Añadir la tarea a la lista de tareas
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `<strong>${todoName}</strong>: ${todoDescription}`;
    document.getElementById("todos").appendChild(todoItem);

    // Limpiar los campos de entrada
    document.getElementById("todoName").value = "";
    document.getElementById("todoDescription").value = "";
}
