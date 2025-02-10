//display.js

export function displayCard(createProject){
    const card = document.createElement('button');
    card.innerHTML = `
    <h2>${createProject.title}</h2>
    <p><strong>Description:</strong> ${createProject.description}</p>
    <p><strong>Due Date:</strong> ${createProject.dueDate}</p>
    <p><strong>Priority:</strong> ${createProject.priority}</p>
  `;
    return card;
}