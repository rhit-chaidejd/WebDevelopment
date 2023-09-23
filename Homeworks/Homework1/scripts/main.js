let counter = 0;
let colorCode = 'dc3545';
let color = 'red';

main = function() {
    console.log("Ready");
    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    }

    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    }

    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    }

    document.querySelector("#blueButton").onclick = (event) => {
        console.log("blue button");
        colorCode = '0d6efd';
        color = 'blue';
        updateColor(colorCode, color);
    }

    document.querySelector("#redButton").onclick = (event) => {
        console.log("red button");
        colorCode = 'dc3545';
        color = 'red';
        updateColor(colorCode, color);
    }

    document.querySelector("#greenButton").onclick = (event) => {
        console.log("green button");
        colorCode = '198754';
        color = 'green';
        updateColor(colorCode, color);
    }

    document.querySelector("#purpleButton").onclick = (event) => {
        console.log("purple button");
        colorCode = '800080';
        color = 'purple';
        updateColor(colorCode, color);
    }

    
}

updateView = function() {
    document.querySelector("#counterText").innerHTML = `${counter}`
}

updateColor = function(anyColorCode, anyColor) {
    const box = getElementById("favoriteColorBox");
    box.style = `background-color:#${anyColorCode}`
    document.querySelector("#favoriteColorBox").innerHTML = `${anyColor}`
}



main();