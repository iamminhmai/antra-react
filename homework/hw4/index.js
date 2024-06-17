const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const peopleList = document.getElementById("peopleList");
const clearPeopleBtn = document.getElementById("clearPeopleBtn");

const people = JSON.parse(localStorage.getItem("people")) || [];

function displayPeople() {
  peopleList.innerHTML = "";
  people.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${person.name}, Age: ${person.age}`;
    peopleList.appendChild(li);
  });
}

personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPerson = {
    name: nameInput.value,
    age: ageInput.value,
  };
  people.push(newPerson);
  localStorage.setItem("people", JSON.stringify(people));
  displayPeople();
  nameInput.value = "";
  ageInput.value = "";
});

clearPeopleBtn.addEventListener("click", () => {
  localStorage.removeItem("people");
  people.length = 0;
  displayPeople();
});

displayPeople();
