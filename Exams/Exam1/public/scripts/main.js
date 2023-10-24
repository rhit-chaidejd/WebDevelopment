main = function() {
    var image = document.getElementById('current');
    var nameOfImage = document.getElementById('currentText');
    document.querySelector("#changeButton").onclick = (event) => {
        if(image.src == 'images/hedwig.png') {
            image.src = 'images/pigwidgeon.png';
            image.alt = 'Pigwidgeon';
            nameOfImage = image.alt;
            updateView(nameOfImage, image.src);

        } else if (image.src == 'images/pigwidgeon.png') {
            image.src = 'images/hedwig.png';
            image.alt = 'Hedwig';
            nameOfImage = image.alt;
            updateView(nameOfImage, image.src);
        }
    }
    
    
}

updateView = function(nameOfImage, imageSRC) {
    document.querySelector("#currentText").innerHTML = `${nameOfImage}`;
}

main();