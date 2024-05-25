document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const errorText = document.getElementById('errorText');
  const logoutBtn = document.getElementById('logoutBtn');
  const userDataDiv = document.getElementById('userData');


  const validUsers = [
      {
          email: 'joao@email.com',
          password: 'senha123',
          name: 'João Silva',
          age: 30
      },
      {
          email: 'maria@email.com',
          password: 'senha456',
          name: 'Maria Oliveira',
          age: 25
      }
  ];

  function handleLogin(event) {
      event.preventDefault();
      const email = loginForm.email.value;
      const password = loginForm.password.value;

      const user = validUsers.find(user => user.email === email && user.password === password);

      if (user) {
          const userData = { email: user.email, name: user.name, age: user.age };
          sessionStorage.setItem('userData', JSON.stringify(userData));
          window.location.href = 'index.html';
      } else {
          errorText.textContent = 'Email ou senha inválidos';
          setTimeout(() => {
              errorText.textContent = '';
          }, 5000);
      }
  }


  function handleLogout() {
      sessionStorage.removeItem('userData');
      window.location.href = 'login.html';
  }

  function displayUserData() {
      const userDataJSON = sessionStorage.getItem('userData');
      if (userDataJSON) {
          const userData = JSON.parse(userDataJSON);
          userDataDiv.innerHTML = `
              <p>Email: ${userData.email}</p>
              <p>Nome: ${userData.name}</p>
              <p>Idade: ${userData.age}</p>
          `;
      } else {
          window.location.href = 'login.html';
      }
  }

  
  if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
  }
  if (logoutBtn) {
      logoutBtn.addEventListener('click', handleLogout);
  }

  
  if (userDataDiv) {
      displayUserData();
  }
});
