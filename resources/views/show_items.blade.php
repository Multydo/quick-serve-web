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
    <div class="overlay" id="overlay">

    </div>
    <div class="mother">
        <div class="child">
            <div class="header">
                <h1>items menu</h1>
                <form method="get" action="/main"><button type="submit">go back</button></form>
            </div>
            <div class="topbox">


                <button class="" id="" onclick="">Creat new item</button>


            </div>
            <table class="contentbox" id="contentbox">

            </table>
        </div>
    </div>
    <script>
    checkLogin()
    </script>
</body>

</html>