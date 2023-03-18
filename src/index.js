import { fetchApi } from './js/fetch';
const userList = document.querySelector('.user-list');

fetchApi()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));

function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
    userList.innerHTML = markup;
    
}

