const login = () => {

    const root = document.getElementById('root');

    const loginHtml = `
        <div>
        <div id="login-form-container">
            <div id="login-container">
                <input class="name-login" type="text" name="email" placeholder="email@example.com" />
                <input class="password-login" type="password" name="password" placeholder="password" />
                <button class="submit-button" id="submit">Login</button>
                <button class="register-button" id="register" >Register</button>
            </div>
        </div>
        <div id="token-container">
        </div>
        <div>
    `;

    root.innerHTML = "";
    root.innerHTML = loginHtml;

    // const btnRegister = document.getElementById('register');
    // btnRegister.addEventListener('click', () => {
    //     register(array)
    // });

    const $submit = document.getElementById('submit');
    $submit.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        fetch('http://localhost:3000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                // "Authorization": true
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log("Login successful!", data);
            const $tokenContainer = document.getElementById('token-container');
            $tokenContainer.innerHTML = `
                <h2>Log in succesful</h2>
                <p>Here is your token: ${data.token}</p>
            `
        }).catch(()=>{
            console.log("Error fetching")
            const $tokenContainer = document.getElementById('token-container');
            $tokenContainer.innerHTML = `
                <h2>Email or password incorrect</h2>
            `
        })
    });

}

document.addEventListener('DOMContentLoaded', login)