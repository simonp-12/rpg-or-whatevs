let inventoryIsOpen = false,
    backpack = [],
    allItems = [];

let inventoryManager = {
    backpack: [],
    drawItems: drawItems,
    drawInventory: drawInventory
}

function init() {
    for (let i = 0; i < 100; i++) {
        allItems.push(create_item("", "description", crop[randomInteger(12) + 1], randomInteger(1900), randomInteger(1300), ""));
    }
}


function update() {
    player1.move();
    for (let i = 0; i < allItems.length; i++) {
        let item = allItems[i];
        if (areColliding(400 + player1.x - player1.width / 2, 300 + player1.y - player1.height / 2, player1.height, player1.width, item.x, item.y, 40, 40)) {
            allItems[i] = allItems[allItems.length - 1];
            allItems.length--;
            backpack.push(item);
            if(item.kind == "squash") {
                itemKinds[0].ammount++;
            } else if (item.kind == "carrot") {
                
            }
        }
    }
}
//    for (let i = 0; i < backpack.length; i++) {
//        if(areColliding(mouseX, mouseY, 1, 1, backpack[i].x, backpack[i].y, 50, 50)) {
//            console.log();
//            context.font = "20px Baskerville Old Face";
//            context.fillStyle = "white";
//            context.fillText(backpack[i].label, mouseX - 10, mouseY - 10)
//        }
//    }

function draw() {
    drawImage(grass, -player1.x, -player1.y, 1900, 1300);
    player1.draw()
    if (inventoryIsOpen) {
        inventoryManager.drawInventory();
    }
}