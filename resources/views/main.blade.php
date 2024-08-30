<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/main.css" />
    <script src="../js/main.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script src="../js/functions.js"></script>
    <title>Quick Serve</title>
</head>

<body>
    <iframe class="background_animation" src="background.html"> </iframe>
    <div class="mother">
        <div class="child">
            <div class="left_bar" id="left_bar">dfbb</div>
            <div class="mid_bar">
                <div class="top_nav">
                    <form method="post" action="<?php echo $_SERVER['PHP_SELF'] . '?action=admintoos'; ?>">
                        <input type="submit" id="admin_tools" value="Admin Tools">
                    </form>
                </div>
                <div class="sub_menu" id="sub_menu"></div>
            </div>
            <div class="right_bar">
                <div class="order" id="order">defr</div>
                <div class="calculator"></div>
            </div>
        </div>
    </div>
    <script>
    checkLogin();
    </script>
</body>

</html>