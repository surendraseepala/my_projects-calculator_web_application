/*function printResult(){
    let textBoxValue = document.getElementById('aVal').value;
    document.getElementById('result').textContent = textBoxValue;
}


function printValtoDisplay(value){
    document.getElementById('displayPanel').textContent += value;
}*/
let display = document.getElementById('displayPanel');

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map( ele => {
    ele.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '<=':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '%':
                    display.innerText +='%';
                    break;
            case '/':
                display.innerText +='/';
                break;

            case 'X':
            display.innerText +='*';
            break;

            case '-':
                display.innerText +='-';
            break;

            case '+':
                display.innerText +='+';
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});