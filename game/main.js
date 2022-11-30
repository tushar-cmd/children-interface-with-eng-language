function Game() {
    this.isPaused = true;
    this.score = null;
    this.speed = null;
    this.density = null;
    this.remainingLives = 5;
    this.playElement = document.getElementById('start-btn');
    this.scoreElement = document.getElementById('score-container');
    this.livesElement = document.getElementById('lives-container');
    this.canvasElement = document.getElementById('canvas');
    this.timer = null;
    this.startedTime = null; //time from start game
    this.intervalId = null;
    this.updateTime = null;
    this.densityStep = null;
    this.balloonsArray = null;
    var thiz = this;
    this.updater = function() {
        thiz.updateGame();
    };
}
Game.prototype.startGame = function() {
    this.playElement.style.display = "none";
    this.intervalId = setInterval(this.updater, this.updateTime);

};
Game.prototype.pauseGame = function() {
    clearInterval(this.intervalId);
};
Game.prototype.updateScore = function(score) {
    this.scoreElem.innerHTML = score;
};
Game.prototype.updateGame = function() {
    this.densityStep += this.density;
    // for (int k = 0; k < 30; k++) {
    if (this.densityStep >= 1 && this.balloonsArray.length < 10) {
        for (var i = 0; i < parseInt(this.densityStep, 10); i++) {
            var tempBalloon = new Balloon(0, -53, 'green', 'normal', 150);
            tempBalloon.positionX = 140;
            // tempBalloon.positionX = tempBalloon.generateRandomXPos();
            console.log(tempBalloon.positionX);
            var el = document.createElement('div');
            el.className = 'balloon ' + tempBalloon.color;
            el.style.left = tempBalloon.positionX + 'px';
            el.style.bottom = tempBalloon.positionY + 'px';
            var thiz = this;
            var index = this.balloonsArray.length;
            el.onclick = function() {
                thiz.score += thiz.balloonsArray[index].points;
                thiz.updateScore(thiz.score);
                this.parentNode.removeChild(el);
            };
            this.canvasElement.appendChild(el);
            var tempObj = {};
            tempObj.el = el;
            tempObj.speed = tempBalloon.getRandomSpeed();
            tempObj.points = tempBalloon.points;
            this.balloonsArray.push(tempObj);
            //console.log(tempObj.speed);
        }
        this.densityStep = 0;
    }
    // }
    for (var i = 0; i < this.balloonsArray.length; i++) {
        this.balloonsArray[i].el.style.bottom = (parseInt(this.balloonsArray[i].el.style.bottom, 10) + (3 + this.balloonsArray[i].speed)) + 'px';
    }
};
Game.prototype.endGame = function() {

};
Game.prototype.initGame = function() {
    this.isPaused = true;
    this.score = 0;
    this.speed = 0.01;
    this.density = 16 / 4000;
    this.remainingLives = 5;
    this.updateTime = 50;
    this.densityStep = 1;
    this.balloonsArray = [];
    this.scoreElem = document.getElementById('score-count');

};

function Balloon(x, y, color, type, points) {
    this.positionX = x;
    this.positionY = y;
    this.color = color;
    this.type = type;
    this.points = points;
}
Balloon.prototype.getRandomSpeed = function() {
    return Math.floor(Math.random() * 201) / 100;
};
Balloon.prototype.generateRandomXPos = function() {
    console.log('document width = ', Math.floor(Math.random() * 450));
    return Math.floor(Math.random() * 450);
};

window.addEventListener('load', function() {
    var a = new Game();
    a.initGame();
    document.getElementById('start-btn').onclick = function() {
        a.startGame();
    };
    document.getElementById('Start').onclick = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
        var items = [];
        device.then(stream => {
            var recorder = new MediaRecorder(stream);
            recorder.ondataavailable = e => {
                    if (recorder.state == 'inactive') {
                        var blob = new Blob(items, { type: 'audio/webm' });
                        var audio = document.getElementById('audio');
                        var mainaudio = document.createElement('audio');
                        mainaudio.setAttribute('controls', 'controls');
                        audio.appendChild(mainaudio);
                        mainaudio.innerHTML = '<source src="' + URL.createObjectURL(blob) + '" type="video.webm"/>';
                    }
                }
                // recorder.start(100);
                // setTimeout(() => {
                // recorder.stop();
                // }, 5000);

        })

    }

    document.getElementById('Stop').onclick = () => {
        recorder.stop();
    }

});