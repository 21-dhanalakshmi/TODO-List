let inputs = document.getElementById("inp");
    let text = document.querySelector(".text");
    let taskCount = document.getElementById("taskCount");

    function Add() {
      if (inputs.value == "") {
        alert("Please Enter Task");
      } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="del bi bi-trash-fill"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        updateTaskCount(); // Call the function to update the task count
      }
    }

    function remove() {
      this.parentElement.remove(); // 'this' refers to the clicked trash icon
      updateTaskCount(); // Call the function to update the task count
    }

    function updateTaskCount() {
      const taskList = text.querySelectorAll("ul");
      taskCount.textContent = taskList.length; // Update the count
    }
    function clearAllTasks() {
      text.innerHTML = ""; // Remove all tasks
      updateTaskCount(); // Update the count
    }
