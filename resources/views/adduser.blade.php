<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/signup.css">
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <script src="../js/signup.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="mother">
        <div class="child">
            <h1>
                Add User:
            </h1>
            <form method="get" action="../users"><button type="submit">go back</button></form>
            <form method="post">
                <input class="in" type="email" id="adminEmail" name="admin_email" placeholder="Admin Email">
                <div class="passBox">
                    <input class="in" type="password" id="adminPass" name="admin_pass" placeholder="Admin Password">
                    <button id="see_a_pass_btn" onclick="signup_a_pass_show()">
                        <lord-icon src="https://cdn.lordicon.com/vfczflna.json" trigger="in" delay="1000" stroke="bold"
                            state="morph-cross" style="width: 50px; height: 50px">
                        </lord-icon>
                    </button>
                </div>
                <input class="in" type="text" id="fname" name="fname" placeholder="First Name" />
                <input class="in" type="text" id="lname" name="lname" placeholder="Last Name" />
                <select id="role">
                    <option value="admin">Admin</option>
                    <option value="waiter">Waiter</option>
                    <option value="chef">Chef</option>
                </select>


                <input class="in" type="email" id="email" name="email" placeholder="Email" />
                <div class="passBox">
                    <div class="passIN">
                        <input class="in" id="passBoxIN" id="password1" type="password" name="password"
                            placeholder="Password" />
                        <input class="in" id="passBoxIN2" id="password2" type="password" name="cpass"
                            placeholder="Confirm Password" />
                    </div>
                    <div class="btn_show">
                        <button id="see_pass_btn" onclick="signup_pass_show()">
                            <lord-icon src="https://cdn.lordicon.com/vfczflna.json" trigger="in" delay="1000"
                                stroke="bold" state="morph-cross" style="width: 50px; height: 50px">
                            </lord-icon>
                        </button>
                    </div>

                </div>
                <div id="errors" style="display: none;"></div>
                <input type="submit" id="gsubmit" value="Sign up" />
                <button class="" id="" onclick="signUp()">Add User</button>
            </form>
        </div>
    </div>
</body>

</html>