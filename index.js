$(document).ready(function () {
    if(localStorage.getItem('loginStatus') == 'true'){
        location.assign('./orders.html')
    }
    let loginForm = window.document.getElementById('loginform');
    // console.log(loginForm);
    loginForm.onsubmit = function (e) {
        e.preventDefault();
        let logincredential = {
            username: this.username.value,
            password: this.password.value
        }
        if (logincredential.username === logincredential.password) {
           
                    alert('Login Successful!!')
                    window.localStorage.setItem('loginStatus',true)
                    location.replace('./orders.html')
        } else {
            alert(`Please Enter Valid Credentials ${logincredential.username} ${logincredential.password}`)
        }
    }
    $('.nav-menu-items').click(function (e) { 
        e.preventDefault();
        $('.active').removeClass('active');
        $(e.target).addClass('active')
        
    });
});