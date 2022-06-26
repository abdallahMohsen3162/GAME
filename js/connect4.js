var vm = new Vue({
    el: '#box',
    data: //
    {
        MAtrix: [
            ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e']
        ],
        counter: 0,
        win: 'None'
    },
    methods: {
        check(i, j) {

            if (this.counter % 2 == 0 && this.MAtrix[i][j] == 'e') {

                this.MAtrix[i][j] = 'b';
                console.log("BBBBBBBBBBBBBBBBBBB");
            } else if (this.counter % 2 != 0 && this.MAtrix[i][j] == 'e') {
                this.MAtrix[i][j] = 'r';
                console.log("RRRRRRRRRRRRRRRRRRR");
            }
            ++this.counter;
            this.winner();
        },
        //
        winner() {
            for (var i = 0; i < 3; i++) //
            {
                for (var j = 0; j < 4; j++) //
                {
                    if (this.MAtrix[i][j] == 'r' && this.MAtrix[i + 1][j + 1] == 'r' && this.MAtrix[i + 2][j + 2] == 'r' && this.MAtrix[i + 3][j + 3] == 'r') {
                        this.win = 'red';
                        console.log("red wins");
                        redWins()
                        return;
                    } else if (this.MAtrix[i][j] == 'b' && this.MAtrix[i + 1][j + 1] == 'b' && this.MAtrix[i + 2][j + 2] == 'b' && this.MAtrix[i + 3][j + 3] == 'b') {
                        this.win = 'blue';
                        console.log("blue wins");
                        redWins()
                        return;
                    }
                }
            }

            for (var i = 0; i < 6; i++) {
                for (var j = 0; j < 4; j++) {
                    if (this.MAtrix[i][j] == 'r' && this.MAtrix[i][j + 1] == 'r' && this.MAtrix[i][j + 2] == 'r' && this.MAtrix[i][j + 3] == 'r') {
                        this.win = 'red';
                        console.log("red wins");
                        redWins();
                        return;
                    } else if (this.MAtrix[i][j] == 'b' && this.MAtrix[i][j + 1] == 'b' && this.MAtrix[i][j + 2] == 'b' && this.MAtrix[i][j + 3] == 'b') {
                        this.win = 'blue';
                        console.log("blue wins");
                        redWins();
                        return;
                    }
                }
            }

            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 7; j++) {
                    if (this.MAtrix[i][j] == 'r' && this.MAtrix[i + 1][j] == 'r' && this.MAtrix[i + 2][j] == 'r' && this.MAtrix[i + 3][j] == 'r') {
                        this.win = 'red';
                        console.log("red wins");
                        redWins();
                        return;
                    } else if (this.MAtrix[i][j] == 'b' && this.MAtrix[i + 1][j] == 'b' && this.MAtrix[i + 2][j] == 'b' && this.MAtrix[i + 3][j] == 'b') {
                        this.win = 'blue';
                        console.log("blue wins");
                        redWins();
                        return;
                    }
                }
            }

            for (var i = 3; i < 6; i++) {
                for (var j = 0; j < 4; j++) {
                    if (this.MAtrix[i][j] == 'r' && this.MAtrix[i - 1][j + 1] == 'r' && this.MAtrix[i - 2][j + 2] == 'r' && this.MAtrix[i - 3][j + 3] == 'r') {
                        this.win = 'red';
                        console.log("red wins");
                        redWins();
                        return;
                    } else if (this.MAtrix[i][j] == 'b' && this.MAtrix[i - 1][j + 1] == 'b' && this.MAtrix[i - 2][j + 2] == 'b' && this.MAtrix[i - 3][j + 3] == 'b') {
                        this.win = 'blue';
                        console.log("blue wins");
                        redWins();
                        return;
                    }

                }
            }
        },

    },


});

window.onload = function() {
    show();
    for (var i = 0; i < 42; i++) {
        document.getElementsByClassName('willbe')[i].onclick = function() {
            if (this.classList.contains('disabled')) {
                console.log("is in");
                return;
            }
            if (vm.counter % 2 == 0) {
                this.children[0].classList.add('r');
            } else {
                this.children[0].classList.add('b');
            }

            this.classList.add('disabled');

            console.log('done');
        }

    }
}

window.onclick = function() {
    show()
}

function show() {
    if (vm.counter % 2 != 0) {
        document.getElementById('help').innerHTML = "red turn";
        document.getElementById('help').style.backgroundColor = '#ff3150';
    } else {
        document.getElementById('help').innerHTML = "blue turn";
        document.getElementById('help').style.backgroundColor = '#33d1cc';
    }
}

function redWins() {
    if (vm.win == 'blue') //
    {
        document.getElementById('box').style.visibility = 'hidden';
        document.getElementById('help').style.visibility = 'hidden';
        document.getElementById('again').style.visibility = 'visible';
        document.getElementById('winn').innerHTML = 'Blue wins';
        document.getElementById('winn').style.backgroundColor = '#33d1cc';

        document.getElementById('winn').style.padding = '30px';
    } else {
        document.getElementById('box').style.visibility = 'hidden';
        document.getElementById('help').style.visibility = 'hidden';
        document.getElementById('again').style.visibility = 'visible';
        document.getElementById('winn').innerHTML = 'red wins';
        document.getElementById('winn').style.backgroundColor = '#ff3150';
        document.getElementById('winn').style.padding = '30px';
    }

}