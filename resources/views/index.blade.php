<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="{{ asset('css/index.css') }}" />
    <link rel="stylesheet" href="../css/login.css" />
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <script src="../js/login.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Quick Serve</title>
</head>

<body>
    <iframe class="background_animation" src="{{ asset('background.html') }}"></iframe>
    <div class="mother">
        <div class="child">
            <h1 class="title">QUICK SERVE</h1>
            <div class="main_frame" id="main_frame">
                <div class="left_frame" id="left_frame">
                    <div class="left_x_frame" id="left_x_frame">
                        <div class="login_text">
                            <h3>Welcome back!</h3>
                            <h4>Please login to access your account.</h4>
                        </div>
                    </div>
                    <div class="left_signup_frame" id="left_signup_frame">

                    </div>
                </div>
                <div class="right_frame" id="right_frame">
                    <div class="right_x_frame" id="right_x_frame">
                        <div class="signup_text">
                            <h3>Welcome to Quick Serve!</h3>
                            <h4>
                                Please enter the admin username and password to sign in.
                            </h4>
                            <h4>
                                New to Quick Serve? Please provide your first name, last name,
                                email address, password, and confirm password to create an
                                account.
                            </h4>

                            <button id="change" onclick="login()">login</button>
                        </div>
                    </div>
                    <div class="right_login_frame" id="right_login_frame">
                        <div class="login_frame">
                            <div class="mother2">
                                <div class="child2">
                                    <h1>Login:</h1>
                                    <form id="myform" onsubmit="submitForm(event)">

                                        <div class="inBox">
                                            <input type="email" id="email" name="email" placeholder="Email"
                                                autocomplete="username" />
                                        </div>
                                        <div class="inBox">
                                            <div class="passBox">
                                                <input type="password" id="password" name="password"
                                                    placeholder="Password" autocomplete="current-password" />


                                                <button id="see_pass_btn" onclick="login_pass_show()">
                                                    <lord-icon src="https://cdn.lordicon.com/vfczflna.json" trigger="in"
                                                        delay="1000" stroke="bold" state="morph-cross"
                                                        style="width: 50px; height: 50px">
                                                    </lord-icon>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="errors" id="errors" style="display:none;">
                                            <h4>The username or password you entered is incorrect!!</h4>
                                        </div>
                                        <button type="submit" id="gsubmit">LOGIN</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/index.js') }}"></script>
    <!-- <script>
    function submitForm(event) {
        event.preventDefault();

        let user_email = document.getElementById("email").value;
        let user_password = document.getElementById("password").value;

        const payload = {
            email: user_email,
            password: user_password,
        };

        // Send the request
        fetch('/Alogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute(
                        'content') // Include CSRF token
                },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (!response.ok) {
                    console.log(response) // Follow the redirect
                } else {
                    window.location.href = '/main';

                }
            })
            .then(data => {
                // Handle the response data
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    </script>-->
</body>

</html>