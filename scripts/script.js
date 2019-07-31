"use strict";
const addressBook = [];
document.querySelector("form").addEventListener("submit", addContact);
document.querySelector(".info_container").addEventListener("click", deleteAt);

// const formData = new FormData(form);
// form.reset();

function addContact(event) {
  event.preventDefault();
  //   console.log("form has been submitted");
  addressBook.push({
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    relation: event.target[3].value
  });
  displayContacts();
}

function displayContacts() {
  document.querySelector(".info_container").innerHTML = "";
  addressBook.forEach((person, index) => {
    const div = document.createElement("div");
    div.classList.add("contact_container");
    div.innerHTML = `
<p>Name: ${person.name}</p>
<p>Email: ${person.email}</p>
<p>Phone: ${person.phone}</p>
<p>Relation: ${person.relation}</p>
<button index=${index} class="delete_btn"><i class="fas fa-trash"></i></button>`;
    document.querySelector(".info_container").append(div);
  });
}

function deleteAt(event) {
  addressBook.splice(Number(event.target.attributes[0].value), 1);
  displayContacts();
}
