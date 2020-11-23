<!DOCTYPE html>
<html>

<body>
    <p>Click the button to display a time-based greeting:</p>
    <?php
    $t = Date("getHours");
    echo "<p>The hour (of the server) is " . $t;
    echo ", and will give the following message:</p>";

    if ($t < 12) {
        echo "php Have a good morning!";
    } elseif ($t < 20) {
        echo "php Have a good day!";
    } else {
        echo "php Have a good night!";
    }
    ?>

    <p id="demo"></p>
    <p id="demo1"></p>
    <script>
        var greeting;
        var time = new Date().getHours();
        if (time < 12) {
            greeting = "js Good morning";
        } else if (time < 20) {
            greeting = "js Good day";
        } else {
            greeting = "js Good evening";
        }
        document.getElementById("demo").innerHTML = greeting;
        document.getElementById("demo1").innerHTML = time;
    </script>

</body>

</html>