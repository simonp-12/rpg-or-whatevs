let itemKinds = [
    {kind: "squash", ammount: 0, img: crop[1]}, 
    {kind: "carrot", ammount: 0, img: crop[4]}
]
function create_item(kind, desc, img, x, y, label) {
    let new_item = {
        kind: kind,
        desc: desc,
        img: img,
        x: x,
        y: y,
        label: label
    }
    if (new_item.img == crop[1] || new_item.img == crop[2] || new_item.img == crop[3]) {
        new_item.kind = "squash";
        new_item.label = "Squash"
    } else if (new_item.img == crop[4] || new_item.img == crop[5] || new_item.img == crop[6]) {
        new_item.kind = "carrot";
        new_item.label = "Carrot"
    } else if (new_item.img == crop[7] || new_item.img == crop[8] || new_item.img == crop[9]) {
        new_item.kind = "cabbage";
        new_item.label = "Cabbage"
    } else if (new_item.img == crop[10] || new_item.img == crop[11] || new_item.img == crop[12]) {
        new_item.kind = "tomato";
        new_item.label = "Tomato"
    }
    return new_item;
}
function drawItems() {
    for (let i = 0; i < allItems.length; i++) {
        drawItem(allItems[i]);
    }
}
function drawInventory() {
    context.rect(100, 100, 600, 400);
    context.fillStyle = "brown";
    context.fill();

    let row = 100, j = -1;
    for(let i = 0; i < itemKinds.length; i++) {
        j += 1;
        if(i % 12 == 0 && i > 0) {
            row += 50;
            j = 0;
        }
        if(itemKinds[i].ammount > 0) {
            itemKinds[i].x = 100 + j*50;
            itemKinds[i].y = row;
            drawImage(itemKinds[i].img, itemKinds[i].x, itemKinds[i].y, 50, 50);
            
        } else {console.log("blah")}
    }

//    let row = 100, j = -1;
//    for (let i = 0; i < backpack.length; i++) {
//        j += 1;
//        if(i % 12 == 0 && i > 0) {
//            row += 50;
//            j = 0;
//        }
//        backpack[i].x = 100 + j*50;
//        backpack[i].y = row;
//        drawImage(backpack[i].img, backpack[i].x, backpack[i].y, 50, 50);
//    }
}
function drawItem(item) {
    drawImage(item.img, item.x - player1.x, item.y - player1.y, 40, 40);
}
function keydown(key) {
    console.log("Pressed", key);
    if (isKeyPressed[69]) {
        inventoryIsOpen = !inventoryIsOpen;
    }
}
