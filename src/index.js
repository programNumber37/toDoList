//index.js
import "./styles.css";
import createProject from "./toDo";
import { displayCard } from "./display";


const projectContainer = document.getElementsByClassName("projectCards")[0];
const addButton = document.getElementById("addListBtn");
const projectForm = document.getElementById("projectForm");



//button for making the form appear to add an project
addButton.addEventListener("click", ()=>{
    projectForm.style.display = "block";
})


//button for submitting the form
projectForm.addEventListener("submit",(event)=>{

    event.preventDefault();

    const projectName = document.getElementById("projectName").value;
    const projectDescription = document.getElementById("projectDescription").value;
    const projectDueDate = document.getElementById("dueDate").value;
    const projectPriority = document.getElementById("priority").value;

    const project = new createProject(projectName,projectDescription,projectDueDate,projectPriority);

    projectForm.reset();

    projectContainer.appendChild(displayCard(project));
    projectForm.style.display = "none";
}
)



