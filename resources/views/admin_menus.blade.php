<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../js/admintools.js"></script>
    <script src="../js/functions.js"></script>
    <meta name="csrf-token" content="{{csrf_token()}}" />
    <title>Document </title>

</head>

<body>
    <div class="overlay" id="overlay">

    </div>
    <div class="mother">
        <div class="child">
            <div class="header">
                <h1> Menus list </h1>

                <button class="" id="go_back" onclick=""> go back </button>
            </div>
            <div class="topbox">

                <button class="" id="" onclick="show_add_menu()"> Create
                    new menu </button>


            </div>
            <table class="contentbox" id="contentbox">

            </table>
        </div>
    </div>
    <script>
    getmenus();
    </script>

</body>

</html>