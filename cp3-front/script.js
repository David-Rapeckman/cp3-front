document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorText = document.getElementById('errorText');
    const logoutBtn = document.getElementById('logoutBtn');
    const userDataDiv = document.getElementById('userData');
  
    // Function to handle login form submission
    function handleLogin(event) {
      event.preventDefault();
      const email = loginForm.email.value;
      const password = loginForm.password.value;
  
      if (email === 'usuario@email.com' && password === 'senha123') {
        const userData = { email };
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'index.html';
      } else {
        errorText.textContent = 'Email ou senha inválidos';
        setTimeout(() => {
          errorText.textContent = '';
        }, 5000);
      }
    }
  
    // Function to handle logout button click
    function handleLogout() {
      sessionStorage.removeItem('userData');
      window.location.href = 'login.html';
    }
  
    // Function to display user data
    function displayUserData() {
      const userDataJSON = sessionStorage.getItem('userData');
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        userDataDiv.textContent = `Email: ${userData.email}`;
      } else {
        window.location.href = 'login.html';
      }
    }
  
    // Add event listeners
    loginForm.addEventListener('submit', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);
  
    // Display user data
    displayUserData();
  });

 
