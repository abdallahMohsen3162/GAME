let text = `Allow me to share this content for you, This website is made for fun,I created the games with native HTML, CSS, JS tech. `;

var i = 0;

function fillText(txt, el) //
{
    if (i == 0) {
        document.getElementById(el).innerHTML += `<br><i class="fa-solid fa-robot fa-4x"></i> `;
    }
    if (window.i == txt.length - 1) //
    {
        document.getElementById(el).classList.add('ani');

        clearInterval(counter);
    }
    document.getElementById(el).innerHTML += txt[window.i];
    i++
}
let counter = setInterval(fillText, 100, text, 'landingText');

document.getElementById('dark-colors').onclick = function() {
    document.getElementById('papa').classList.remove('body-red');
    document.getElementById('papa').classList.add('body-dark');
}

document.getElementById('light-colors').onclick = function() {
    document.getElementById('papa').classList.remove('body-dark');
    document.getElementById('papa').classList.add('body-red');
}