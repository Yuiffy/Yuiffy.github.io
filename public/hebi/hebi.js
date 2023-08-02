/**
 * Created by yuiff on 2017/12/15.
 */
var hebiApp = new Vue({
    el: '#hebiApp',
    data: {
        message: 'Hello Vue!',
        gameData: {
            foods: {},
            foodNumber: 0,
            foodMap: []
        },
        gripW: 20,
        startX: 10,
        startY: 10
    },
    methods: {
        initFood: function (wSize, hSize) {
            console.log(this.gameData);
            this.gameData.foodNumber = 0;
            this.gameData.foods = {};
            var newMap = new Array(wSize);
            for (var i = 0; i < wSize; i++)
                newMap[i] = new Array(hSize);
            this.gameData.foodMap = newMap;
        },
        addFood: function (x, y) {
            if (this.gameData.foodMap[x][y] != null)
                return -1;
            let number = this.gameData.foodNumber;
            this.gameData.foodMap[x][y] = number;
            Vue.set(this.gameData.foods, number, {x: x, y: y});
            this.gameData.foodNumber++;
            return 0;
        },
        delFood: function (x, y) {
            if (this.gameData.foodMap[x][y] == null)
                return -1;
            let number = this.gameData.foodMap[x][y];
            this.gameData.foodMap[x][y] = null;
            Vue.delete(this.gameData.foods, number);
            return 0;
        },
        getRealPosition : function (x, y) {
            var realX = this.startX + x * this.gripW;
            var realY = this.startY + y * this.gripW;
            return {x:realX, y:realY};
        }
    }
});

var x = 0, y = 0;
var dir = 0, fdir = 0;
function hebiGame(bgctx, hebictx) {
    var gripw = 20, startX = 10, startY = 10, wnum = 39, hnum = 23;
    var foodColor = "#CD1277";
    var hebiColorHex = 0x66BA98, hebiColorAdd = 0x010000 - 0x000101;
    var hebiColor = '#' + hebiColorHex.toString(16);
    var bgColor = "#CFDFFF", lineColor = 'orange';
    var foodNumber = 10;
    var timeWait = 100;
    var score = 0;
    var gameOverFlag = false;

    var makeMapArray = function () {
        var ret = new Array(wnum);
        for (var i = 0; i < wnum; i++)
            ret[i] = new Array(hnum);
        return ret;
    }
    var map = makeMapArray();
    hebiApp.initFood(wnum, hnum);

    var makeMap = function (ctx, startX, startY, gripw, wnum, hnum) {
        ctx.strokeStyle = lineColor;
        var ty = startY, tx = startX;
        for (var i = 0; i < wnum; i++) {
            ctx.strokeRect(tx, ty, gripw, gripw * hnum);
            tx += gripw;
        }

        tx = startX;
        for (var i = 0; i < hnum; i++) {
            ctx.strokeRect(tx, ty, gripw * wnum, gripw);
            ty += gripw;
        }
    }
    bgctx.fillStyle = bgColor;
    bgctx.fillRect(0, 0, 800, 600);
    makeMap(bgctx, startX, startY, gripw, wnum, hnum);
    hebictx.clearRect(0, 0, 800, 600);
    clearInputType();
    dir = 0;
    fdir = 0;

    var addBlk = function (x, y, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(startX + x * gripw, startY + y * gripw, gripw, gripw);
        map[x][y] = color;
        ctx.restore();
    }
    var delBlk = function (x, y) {
        ctx.clearRect(startX + x * gripw, startY + y * gripw, gripw, gripw);
        map[x][y] = null;
    }

    //获得0~x-1的随机数
    var getRandom = function (x) {
        var ran = Math.random();
        return Math.floor(Math.random() * ( x ));
    }

    var newFood = function () {
        wnum = 39, hnum = 23;
        var x, y;
        do {
            x = getRandom(wnum);
            y = getRandom(hnum);
        } while (map[x][y] != null);
        return {x: x, y: y};
    }

    var ctx = hebictx;
    var x = 0, y = 0;
    var go = [{x: 1, y: 0}, {x: -1, y: 0}, {x: 0, y: -1}, {x: 0, y: 1}];
    var DIRECTION = {right: 0, left: 1, up: 2, down: 3};

    var newHebi = function (x, y, dir) {
        var ret = [];
        var nx = x, ny = y;
        for (var i = 0; i < 3; i++) {
            ret.push({x: nx, y: ny});
            addBlk(nx, ny, hebiColor);
            nx += go[dir].x;
            ny += go[dir].y;
        }
        return ret;
    }

    var gameOver = function () {
        gameOverFlag = true;
        alert("Game Over! Your score is " + score + " !");
        hebiGame(bgctx, hebictx);
    }

    var hebiStep = function (hebi) {
        if (gameOverFlag)return;
        var nx = hebi[hebi.length - 1].x;
        var ny = hebi[hebi.length - 1].y;
        nx += go[dir].x;
        ny += go[dir].y;
        nx = (nx + wnum) % wnum;
        ny = (ny + hnum) % hnum;
        //if ((nx < 0) || (ny < 0) || (nx >= wnum) || (ny >= hnum))return;
        if (map[nx][ny] == foodColor) {
            var food = newFood();
            addBlk(food.x, food.y, foodColor);
            delBlk(nx, ny);
            hebiApp.addFood(food.x, food.y);
            hebiApp.delFood(nx, ny);
            score++;
            if (timeWait >= 10) {
                timeWait--;
                hebiColorHex += hebiColorAdd;
                hebiColor = '#' + hebiColorHex.toString(16);
            }
        } else {
            var first = hebi.shift();
            delBlk(first.x, first.y);
        }
        if (map[nx][ny] != null) {
            gameOver();
            return;
        }
        x = nx;
        y = ny;
        hebi.push({x: x, y: y});
        addBlk(x, y, hebiColor);
        fdir = dir;
        setTimeout(hebiStep, timeWait, oneHebi);
    }
    var oneHebi = newHebi(1, 1, 0);
    for (i = 0; i < foodNumber; i++) {
        var food = newFood();
        addBlk(food.x, food.y, foodColor);
        hebiApp.addFood(food.x, food.y);
    }
    hebiStep(oneHebi);

}

function hebiControl(inputType) {
    var newDir = -1;
    if (inputType.right) newDir = 0;
    else if (inputType.left) newDir = 1;
    else if (inputType.up) newDir = 2;
    else if (inputType.down) newDir = 3;
    if (newDir != -1 && newDir != (fdir ^ 1)) dir = newDir;
}

var Const = {
    defaultInputType: {
        right: false,
        up: false,
        left: false,
        down: false,
        q: false,
        space: false
    },
    KEY: {
        68: 'right',//d
        87: 'up',//w
        65: 'left',//a
        83: 'down',//s
        39: 'right',
        38: 'up',
        37: 'left',
        40: 'down',
        81: 'q',
        32: 'space'
    }
};

var inputType = Const.defaultInputType;

function clearInputType() {
    inputType = Const.defaultInputType;
}
function logicPress(key) {
    inputType[key] = true;
}
function logicRelease(key) {
    inputType[key] = false;
}
function pressCode(code) {
    if (!code in Const.KEY) {
        console.log('press unrecognized key code: ' + code);
        return;
    }
    logicPress(Const.KEY[code])
}

function releaseCode(code) {
    if (!code in Const.KEY) {
        console.log('release unrecognized key code: ' + code);
        return;
    }
    logicRelease(Const.KEY[code]);
}
function keyInput(keyDown, event) {
    //console.log(keyDown, event);

    var keyNum;

    if (window.event) // IE
    {
        keyNum = event.keyCode;
    }
    else if (event.which) // Netscape/Firefox/Opera
    {
        keyNum = event.which;
    }

    if (keyDown) pressCode(keyNum);
    else releaseCode(keyNum);

    hebiControl(inputType);
    //console.log(inputType);
    return false;
}


window.addEventListener('load', touchSystem, false);
function touchSystem() {

    document.addEventListener('touchstart', touch, false);
    document.addEventListener('touchmove', touch, false);
    document.addEventListener('touchend', touch, false);
    var startX = {}, startY = {}, alreadyPress = {};

    function touch(event) {
        var event = event || window.event;

//                var oInp = document.getElementById("inp");


        //TODO:支持多手指，现在只看a[0]，不懂有没有问题
        switch (event.type) {
            case "touchstart":
//                        oInp.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                a = event.changedTouches;
                startX[a[0].identifier] = a[0].clientX;
                startY[a[0].identifier] = a[0].clientY;
                alreadyPress[a[0].identifier] = false;
                break;
            case "touchend":
//                        oInp.innerHTML = "<br/>Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                a = event.changedTouches;
                move = alreadyPress[a[0].identifier];
                if (move != false) {
                    logicRelease(move);
                }
                break;
            case "touchmove":
                event.preventDefault();
                a = event.changedTouches;
                x = a[0].clientX;
                y = a[0].clientY;
                if (!alreadyPress[a[0].identifier]) {
                    fx = startX[a[0].identifier];
                    fy = startY[a[0].identifier];
                    if (abs(x - fx) > 10) {
                        if (x > fx)
                            move = 'right'
                        else
                            move = 'left'
                        logicPress(move);
                        alreadyPress[a[0].identifier] = move;
                    } else if (abs(y - fy) > 10) {
                        if (y > fy)
                            move = 'down';
                        else move = 'up';
                        logicPress(move);
                        alreadyPress[a[0].identifier] = move;
                    }
                }
                break;
        }
        hebiControl(inputType);
    }
}

var canvas = $("#myCanvas")[0];
if (!canvas.getContext) {
    $("#warnWords").html("浏览器不支持canvas,请使用Chrome浏览器.");
}
var ctx = canvas.getContext('2d');
var hebictx = $("#hebican")[0].getContext('2d');
hebiGame(ctx, hebictx);