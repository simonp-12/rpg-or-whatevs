let inventoryIsOpen = false,
    backpack = [],
    allItems = [],
    background = {
        width: 1920,
        height: 1920
    };

let inventoryManager = {
    backpack: [],
    drawItems: drawItems,
    drawInventory: drawInventory
}

function init() {
    for (let i = 0; i < 150; i++) {
        allItems.push(create_random_item())
    }
}


function update() {
    player1.move();
    player1.borderControl();
    for (let i = 0; i < allItems.length; i++) {
        let item = allItems[i];
        if (areColliding(400 + player1.x - player1.width / 2, 300 + player1.y - player1.height / 2, player1.height, player1.width, item.x, item.y, 40, 40)) {
            allItems[i] = allItems[allItems.length - 1];
            allItems.length--;
            backpack.push(item);
            if (item.kind == "squash") {
                itemKinds[0].ammount++;
            } else if (item.kind == "carrot") {
                itemKinds[1].ammount++;
            } else if (item.kind == "cabbage") {
                itemKinds[2].ammount++;
            } else if (item.kind == "tomato") {
                itemKinds[3].ammount++;
            }
        }
    }
    if(player1.name == null || player1.name == "") {player1.name = "Player1"}
}

function draw() {
    drawImage(grass, -player1.x, -player1.y, background.width, background.height);
    player1.draw()
    if (inventoryIsOpen) {
        inventoryManager.drawInventory();
    }
}

function keydown(key) {
    if (isKeyPressed[69]) {
        inventoryIsOpen = !inventoryIsOpen;
    }
}

function mouseup() {
    if (areColliding(mouseX, mouseY, 1, 1, canvas.width / 2 - (player1.width / 2), canvas.height / 2 - (player1.height / 2) - 30, 60, 20)) {
        player1.name = prompt("Enter name");
    }
}