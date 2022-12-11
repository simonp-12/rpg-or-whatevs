let player1 = {
    x: background.width / 2,
    y: background.height / 2,
    lives: 5,
    speed: 5,
    name: "Player1",
    height: 60,
    width: 60,
    position: 10,
    move: controlWASD,
    draw: drawPlayer,
    borderControl: stayInBorders,
    status: drawStatus
}

function controlWASD() {
    if (isKeyPressed[68]) {
        this.x += this.speed;
        if (this.position >= 10 && this.position <= 12) {
            this.position++;
            if (this.position > 12) {
                this.position = 10
            }
        } else {
            this.position = 10;
        }
    }
    if (isKeyPressed[65]) {
        this.x -= this.speed;
        if (this.position >= 1 && this.position <= 3) {
            player1.position++;
            if (this.position > 3) {
                this.position = 1
            }
        } else {
            this.position = 1;
        }
    }
    if (isKeyPressed[87]) {
        this.y -= this.speed;
        if (this.position >= 7 && this.position <= 9) {
            this.position++;
            if (this.position > 9) {
                this.position = 7
            }
        } else {
            this.position = 7;
        }
    }
    if (isKeyPressed[83]) {
        this.y += this.speed;
        if (this.position >= 4 && this.position <= 6) {
            this.position++;
            if (this.position > 6) {
                this.position = 4
            }
        } else {
            this.position = 4;
        }
    }
}

function stayInBorders() {
    if (this.x <= -370) {
        this.x = -370
    }
    if (this.y <= -305) {
        this.y = -305
    }
    if (this.x >= 1490) {
        this.x = 1490
    }
    if (this.y >= 1594) {
        this.y = 1594
    }
}
function drawStatus() {
    context.fillStyle = "rgba(255, 255, 255, 0.6)";
    context.fillRect(canvas.width / 2 - (player1.width / 2), (canvas.height / 2 - (player1.height / 2) - 30), player1.width, 20);
    context.fillRect(canvas.width / 2 - (player1.width / 2), (canvas.height / 2 - (player1.height / 2) - 60), player1.width, 20);

    context.font = "bold 20px Baskerville Old Face";
    context.fillStyle = "rgb(72, 100, 118)";
    context.fillText(player1.name, canvas.width / 2 - (player1.width / 2), canvas.height / 2 - (player1.height / 2) - 30, player1.width);
    context.fillText("lives: " + player1.lives, canvas.width / 2 - (player1.width / 2), canvas.height / 2 - (player1.height / 2) - 60);
}
function drawPlayer() {
    drawImage(grass, -player1.x, -player1.y, 1900, 1300);
    inventoryManager.drawItems();
    drawImage(cat[player1.position], 400 - player1.width / 2, 300 - player1.height / 2, player1.width, player1.height);
    drawStatus();
}