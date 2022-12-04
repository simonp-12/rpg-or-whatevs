let player1 = {
    x: 100,
    y: 200,
    lives: 5,
    speed: 10,
    name: "Player1",
    height: 60,
    width: 60,
    position: 10,
    move: controlWASD,
    draw: drawPlayer
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

function drawPlayer() {
    drawImage(grass, -player1.x, -player1.y, 1900, 1300);
    inventoryManager.drawItems();
    drawImage(cat[player1.position], 400 - player1.width / 2, 300 - player1.height / 2, player1.height, player1.width);

    context.font = "20px Baskerville Old Face";
    context.fillStyle = "brown";
    context.fillText(player1.name, canvas.width / 2 - (player1.width / 2), canvas.height / 2 - (player1.height / 2) - 30);
    context.fillText("lives: " + player1.lives, canvas.width / 2 - (player1.width / 2), canvas.height / 2 - (player1.height / 2) - 60);
}