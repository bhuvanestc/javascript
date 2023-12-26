/*ex5*/
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Temperature Converter</title>

</head>
<body>



<div>
    <label for="tempInput">Enter Temperature:</label>
    <input type="number" id="tempInput">
</div>

<button onclick="convertToCelsius()">Convert to Celsius</button>
<button onclick="convertToFahrenheit()">Convert to Fahrenheit</button><br><br>


<p id="result"></p>

<script>
  
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }

   
    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

  
    function convertToCelsius() {
        let temp = parseFloat(document.getElementById("tempInput").value);
        if (!isNaN(temp)) {
            let result = toCelsius(temp);
            document.getElementById("result").innerText = `${temp}°F is ${result.toFixed(2)}°C`;
        } else {
            document.getElementById("result").innerText = "Please enter a valid temperature!";
        }
    }

    
    function convertToFahrenheit() {
        let temp = parseFloat(document.getElementById("tempInput").value);
        if (!isNaN(temp)) {
            let result = toFahrenheit(temp);
            document.getElementById("result").innerText = `${temp}°C is ${result.toFixed(2)}°F`;
        } else {
            document.getElementById("result").innerText = "Please enter a valid temperature!";
        }
    }
</script>

</body>
</html>
