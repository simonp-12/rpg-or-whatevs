let itemKinds = [{
        kind: "squash",
        ammount: 0,
        img: crop[1]
    },
    {
        kind: "carrot",
        ammount: 0,
        img: crop[4]
    },
    {
        kind: "cabbage",
        ammount: 0,
        img: crop[7]
    },
    {
        kind: "tomato",
        ammount: 0,
        img: crop[10]
    }
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

function create_random_item() {
    let new_item = {
        kind: "",
        desc: "",
        img: crop[randomInteger(12) + 1],
        x: randomInteger(1900),
        y: randomInteger(1300),
        label: ""
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

    let row = 100,
        j = -1;
    for (let i = 0; i < itemKinds.length; i++) {
        j += 1;
        if (i % 12 == 0 && i > 0) {
            row += 60;
            j = 0;
        }
        if (itemKinds[i].ammount > 0) {
            itemKinds[i].x = 100 + j * 60;
            itemKinds[i].y = row;
            drawImage(itemKinds[i].img, itemKinds[i].x, itemKinds[i].y, 60, 60);
            context.font = "30px Baskerville Old Face";
            context.fillStyle = "white";
            context.fillText(itemKinds[i].ammount, itemKinds[i].x + 40, itemKinds[i].y + 30)
        }
    }
}

function drawItem(item) {
    drawImage(item.img, item.x - player1.x, item.y - player1.y, 40, 40);
}