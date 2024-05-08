function inputByPrompt()
{
    var userName = prompt("Ingrese nombre de usuario");
    var numberOne = prompt("Ingrese un numero");
    var numberTwo = prompt("Ingrese otro numero");

    showMathOperations("PROMPT",numberOne,numberTwo,userName);
}

function inputByForm()
{
    var numberOne = document.getElementById("valor_1").value;
    var numberTwo = document.getElementById("valor_2").value;
    var userName = document.getElementById("user_name").value;
    showMathOperations("FORM",numberOne,numberTwo,userName);
}

function showMathOperations(inputMethod,numberOne,numberTwo,userName)
{
    var message = "Usuario: "+ userName; 
    message+='\n';
    message+='Suma de los nros es: '+ (parseInt(numberOne)+parseInt(numberTwo));
    message+='\n';
    message+='Resta de los nros es: '+ (parseInt(numberOne)-parseInt(numberTwo));
    message+='\n';
    message+='Producto de los nros es: '+ parseInt(numberOne)*parseInt(numberTwo);
    message+='\n';
    message+='División de los nros es: '+ parseInt(numberOne)/parseInt(numberTwo);
    message+='\n';
    message+='Método de ingreso de datos: '+ inputMethod;
    message+='\n';
    
    document.getElementById('resultados').innerText=message;

}