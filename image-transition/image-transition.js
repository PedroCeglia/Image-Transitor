let time = 2000,
    currentImageIndex = 0,
    images = document
            .querySelectorAll("#slider img"),
    max = images.length;

function alteraImagens(){

    images[currentImageIndex]
        .classList.remove("select")


    currentImageIndex++

    if(currentImageIndex>= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("select")
}

function start(){
    console.log("Start")
    setInterval(() =>{
        // Troca de Imagens
        alteraImagens()
    }, time)
}

window.addEventListener("load", start)