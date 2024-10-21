let isNightMode = false;

document.getElementById('themeButton').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    isNightMode = !isNightMode;
    this.textContent = isNightMode ? 'Modo Diurno' : 'Modo Noturno';
});

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    let display = document.getElementById('display');
    display.value += char;
}

function calculate() {
    let display = document.getElementById('display');
    try {
    display.value = eval(display.value);
    } catch {
    display.value = 'Erro';
    }
}
