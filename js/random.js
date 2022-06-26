let c = 0;
Vue.component('app-comp', {
    props: ['txt', 'running'],
    template: //template
        `                               
    <div>                                
        <p v-if='running'>{{txt}}</p>              
    </div>                                          
        `
        //'<p> {{source}} - {{name}}</p>'
});


function wrong() {
    document.getElementById('game-ins').innerHTML = `<br><i class="fa-solid fa-robot fa-4x"></i> wrong answer`;
    document.getElementById('sollution-box').style.visibility = 'hidden';
}

function checker(number) {

    if (number == vm.oldTrue) {
        console.log("Yaaaaaaaaaaaaaaaaaaaaaaay");
        vm.getStarted();
        vm.c++;
    } else {
        clearInterval(ti);
        wrong();
    }
}


Vue.component('sullotion', {
    props: ['number'],
    template: `                                                
        <button class='sullotion-button'> {{ number }} </button>                                         
        `

})

var vm = new Vue({
    el: "#random",
    data: {
        oldTrue: 0,
        firstWrongAns: 0,
        trueAnswer: 0,
        secondWrongAns: 0,
        defeculty: 15,
        txt: ``,
        running: false,
        c: 0

    },
    methods: {
        setOperation() {
            this.randomed = [];
            this.txt = ``;
            var x = Math.floor(Math.random() * this.defeculty);
            var y = Math.floor(Math.random() * this.defeculty);
            var i = Math.floor(Math.random() * 5);
            if (i == 0) {
                this.trueAnswer = x + y;
                this.txt += y;
                this.txt += '+';
                this.txt += x;
                console.log(this.txt);
            } else if (i == 1) {
                this.trueAnswer = x - y;
                this.txt += x;
                this.txt += '-';
                this.txt += y;
                console.log(this.txt);
            } else {
                this.trueAnswer = x * y;
                this.txt += y;
                this.txt += '*';
                this.txt += x;
                console.log(this.txt);
            }
            this.oldTrue = this.trueAnswer;
            this.firstWrongAns = this.trueAnswer - 1;
            this.secondWrongAns = this.trueAnswer + 1;
        },
        getStarted() {
            this.running = true;
            this.setOperation();
            var i = Math.floor(Math.random() * 4);
            if (i == 1) {
                this.swap1();
            } else if (i == 2) {
                this.swap2();
            } else {
                this.swap3();
            }
            window.showsollutionbox();
        },
        swap1() {
            console.log("swap1");
            [this.firstWrongAns, this.secondWrongAns] = [this.secondWrongAns, this.firstWrongAns];
            [this.firstWrongAns, this.trueAnswer] = [this.trueAnswer, this.firstWrongAns];
        },
        swap2() {
            console.log("swap2");
            [this.firstWrongAns, this.trueAnswer] = [this.trueAnswer, this.firstWrongAns];
        },
        swap3() {
            console.log("swap3");
            [this.firstWrongAns, this.trueAnswer] = [this.secondWrongAns, this.trueAnswer];
        },
    },

});

document.getElementsByClassName('sullotion-button')[0].onclick = function() {
    checker(this.innerHTML);
}

document.getElementsByClassName('sullotion-button')[1].onclick = function() {
    checker(this.innerHTML);
}

document.getElementsByClassName('sullotion-button')[2].onclick = function() {
    checker(this.innerHTML);
}


function showDef() {
    if (vm.defeculty - 5 >= 8) {
        document.getElementById('settings').style.backgroundColor = "#ff3150";
    } else if (vm.defeculty - 5 > 6 && vm.defeculty - 5 < 8) {
        document.getElementById('settings').style.backgroundColor = "#ffc400";
    } else if (vm.defeculty - 5 > 1 && vm.defeculty - 5 < 6) {
        document.getElementById('settings').style.backgroundColor = "#33d1cc";
    } else if (vm.defeculty - 5 == 1 || vm.defeculty - 5 == 0) {
        document.getElementById('settings').style.backgroundColor = "#eff7fa";
    }
}



function showsollutionbox() {
    document.getElementById('sollution-box').style.visibility = 'visible';
    document.getElementById('settings').style.visibility = 'hidden';
    document.getElementById('settings').innerText = window.watch++;
}



window.onclick = function() {
    showDef();
}

window.onkeyup = function() {
    showDef();
}

window.onload = function() {
    document.getElementById('sollution-box').style.visibility = 'hidden';
    showDef();
}

var i = 60;

function timer() //
{

    document.getElementById('watch').innerHTML = `time remaining: ${i} , ${vm.c} success calcs `;
    if (i == 0) {
        i++;
        clearInterval(this);
        document.getElementById('sollution-box').style.visibility = 'hidden';
    }
    i--;
}
let ti;

document.getElementById('New').onclick = function() {
    ti = setInterval(timer, 1000);
    this.style.visibility = 'hidden';
}



let text3 = `You have to be fast `;
let counter2 = setInterval(filltext, 100, text3, 'game-ins');

var it = 0;

function filltext(txt, el) //
{
    if (it == 0) {
        document.getElementById(el).innerHTML += `<br><i class="fa-solid fa-robot fa-4x"></i> `;
    }
    if (window.it == txt.length - 1) //
    {
        //document.getElementById(el).classList.add('ani');

        clearInterval(counter2);
    }
    document.getElementById(el).innerHTML += txt[window.it];
    it++
}