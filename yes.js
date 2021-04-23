const todos = JSON.parse(localStorage.getItem("todos")) || [];

const render = () => {

const todoList = document.getElementById("todo-list");
	const td = todos.map( t => "<li>" + t + "</li>");	
	todoList.innerHTML = td.join("");

	const elementos = document.querySelectorAll("#todo-list li")
	elementos.forEach((elemento, i) => {
	elemento.addEventListener("click",() => {
	elemento.parentNode.removeChild(elemento)
		todos.splice(i,1)
		actualizaTodos(todos)
		render()
		
		
		})
		
	})


}

const actualizaTodos = (todos) => {
	const todoStrings = JSON.stringify(todos)
	localStorage.setItem("todos", todoStrings)
	
}

window.onload = () => {
	render()
	const form = document.getElementById("todo-form");
	form.onsubmit = (e) =>{
	e.preventDefault();
	const todo = document.getElementById("todo");
	const todoText = todo.value;
	todo.value = "";
	todos.push(todoText);
	actualizaTodos(todos)
	render()



	

	//todoList.innerHTML = "";
	//for(let i = 0; i < todos.length; i++)
	//todoList.innerHTML += "<li>" + todos[i] + "</li>";
	//console.log(todoText);
	}
}