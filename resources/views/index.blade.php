<?php 

include("backend/functions.php");
include("backend/connection.php");





?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/index.css" />

    <title>Quick Serve</title>
</head>

<body>
    <iframe class="background_animation" src="background.html"> </iframe>
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
                        <iframe class="signup_frame" src="pages/signup.php"></iframe>
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
                        <iframe class="login_frame" src="login.php"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/index.js"></script>
</body>

</html>