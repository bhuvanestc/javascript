/*ex4*/
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Multiply and Divide</title>
<style>
    .input-box {
        margin-bottom: 10px;
    }
</style>
</head>
<body>

<div class="input-box">
    <label for="num1">Enter first number:</label>
    <input type="number" id="num1">
</div>

<div class="input-box">
    <label for="num2">Enter second number:</label>
    <input type="number" id="num2">
</div>

<button onclick="calculate('multiply')">Multiply</button>
<button onclick="calculate('divide')">Divide</button><br><br>

<p id="result"></p>

<script>
   
    function multiply(a, b) {
        return a * b;
    }

   
    function divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero!";
        }
    }

    function calculate(operation) {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);

        if (!isNaN(num1) && !isNaN(num2)) {
            let result;
            if (operation === 'multiply') {
                result = multiply(num1, num2);
                document.getElementById("result").innerText = `Multiplication Result: ${result}`;
            } else if (operation === 'divide') {
                result = divide(num1, num2);
                document.getElementById("result").innerText = `Division Result: ${result}`;
            }
        } else {
            document.getElementById("result").innerText = "Please enter valid numbers!";
        }
    }
</script>

</body>
</html>
