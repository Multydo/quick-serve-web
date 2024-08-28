<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/login.css" />
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <script src="../js/login.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="mother">
        <div class="child">
            <h1>Login:</h1>
            <form method="get" action="../h">
                <!--<div class="inBox">
                    <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div class="inBox">
                    <div class="passBox">
                    <input type="password" id="password" name="password" placeholder="Password" />

                        <button id="see_pass_btn" onclick="login_pass_show()">
                            <lord-icon src="https://cdn.lordicon.com/vfczflna.json" trigger="in" delay="1000"
                                stroke="bold" state="morph-cross" style="width: 50px; height: 50px">
                            </lord-icon>
                        </button>
                    </div>
                </div>

                <div class="errors" id="errors" style="display:none;">
                    <h4>The username or password you entered is incorrect!!</h4>
                </div>-->
                <input type="submit" id="gsubmit" value="LOGIN" />
            </form>
        </div>
    </div>
</body>

</html>
<!--

  include("../backend/functions.php");
include("../backend/connection.php");
//$user_data;

$action = isset($_GET['action']) ? $_GET['action'] : '';
switch ($action) {
    case "fireLogin":
        fireLogin();
        break;
}

function fireLogin(){
$js_function_call = "<script >errorLog();</script>";
    global $con;
    
    $user_email=$_POST["email"];
    $user_pass =$_POST["password"];
    $query1 = "SELECT user_id from users where user_email='$user_email' and user_pass = '$user_pass' ";
    $result1 = mysqli_query($con,$query1);
    $temp_data = mysqli_fetch_assoc(($result1));
    
    if(mysqli_num_rows($result1)>0){
       
        
            
            
              $_SESSION['userdata'] =  $temp_data;
          
          
            
            echo "<script>window.parent.location.href = 'main.php';</script>"; //this is needed to exit from the index page so the main page does not run in the iframe
            
        
      
    }else{
        print_r( $js_function_call);
    }
    


}
    -->