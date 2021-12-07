let nombre = document.getElementById("nombre")
let forma = documet.getElementById("forma")
let color = document.getElementById("color")
let list_container = document.getElementById("list-container");
let tasks = [];

console.log(forma.value)
console.log(color.value)
const get_data_localstorage = () => {
    tasks = [];
    if (localStorage.getItem("tasks") != null) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  };
const set_data_localstorage = () => {
    if (nombre.value && forma.value) {
      let data = {
        id: tasks.length + 1,
        title: nombre.value,
       Selection: forma.value,
       Selection: color.value,
        complete: false,
      };
      tasks.push(data);
  
      localStorage.setItem("tasks", JSON.stringify(tasks));
      print_tasks();
  
      nombre.value = "";
      forma.value = "";
      color.value = "";
    } else {
      alert("Complete todos los campos");
    }
  };
  const print_tasks = () => {
    get_data_localstorage();
    list_container.innerHTML = ""; 
    tasks.forEach((e) => {
        list_container.insertAdjacentElement (
            "beforeend",
            `
              <div class="item">
                  <div class="right">
                    <input class="check" id="check-${e.id}" type="checkbox" ${
              e.complete ? "checked" : ""
            }>
                    <p>${e.title}</p>
                  </div> 
                  `
        );
    });
  };
  const change_complete_state = (event) => {
    let res = tasks.find((e) => "check-" + e.id == event.target.id);
    if (res) {
      res.complete = !res.complete;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  const view_data = (id_detail) => {
    let res = tasks.find((e) => "detail-" + e.id == id_detail);
    if (res) {
      let task_detail_container = document.getElementById("task-detail");
      task_detail_container.innerHTML = "";
  
      task_detail_container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="task-detail__title">${res.title}</div>
          <p class="task-detail__description">
            ${res.description}
          </p>
          <div class="task-detail__complete">completo : ${
            res.complete ? "SI" : "NO"
          }</div>
      `
      );
    }
  };



