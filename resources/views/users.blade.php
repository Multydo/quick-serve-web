<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../js/admintools.js"></script>
    <script src="../js/functions.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
</head>

<body>

    <div class="mother">
        <div class="child">
            <div class="header">
                <h1>Users page</h1>
                <form method="post" action="../admintools.php"><button type="submit">go back</button></form>
            </div>
            <div class="box" id="box"></div>
            <div class="outputbox" id="outputbox">

            </div>
        </div>
    </div>
    <script>
    checkLogin()
    </script>
</body>

</html>