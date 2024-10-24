window.onload = function() {//modificarea stilului unor elemente, selector dupa clasa+tag, creare si stergere de elemente, setTimeout,
    //folosirea metodei forEach()  din clasa Array eveniment la click., stopPropagation.
    let colectie = document.getElementsByTagName("h2");
    let copie1 = [];
    let copie2 = [];

    // for (let i = 0; i < colectie.length(); i++) {
    //     copie1[i] = colectie[i].style.color;
    //     copie2[i] = colectie[i].style.fontSize;
    // }

    let colectieArray = Array.from(colectie);//Transform colectia in vector
    colectieArray.forEach(function(element, index) {
        copie1[index] = element.style.color;
        copie2[index] = element.style.fontSize;
    });

    document.body.addEventListener("click",function p1(){
        for (let i = 0; i < copie1.length; i++) {
        colectie[i].style.color = copie1[i];
        colectie[i].style.fontSize = copie2[i];}
    }, false);
    for (let item of colectie) {
    item.addEventListener("click",function p2(event) {
                    item.style.color = "red";
                    item.style.fontSize = "4rem";
                    event.stopPropagation();
    })
    }
    
    // document.body.onclick = function(event) {
    //     for (let item of colectie) {
    //         item.onclick = function(event) {
    //             item.style.color = "red";
    //             item.style.fontSize = "4rem";
    //             event.stopPropagation();
    //         }
    //     }
    //     for (let i = 0; i < colectie.length; i++) {
    //         colectie[i].style.color = copie1[i];
    //         colectie[i].style.fontSize = copie2[i];
    //     }
    // }

    setTimeout(function stergere_inserare() {
        let colectie2 = document.getElementsByClassName("de_sters");
        let P = document.querySelector("#statistici");
        
        for (let i = colectie2.length - 1; i >= 0; i--) {
            P.removeChild(colectie2[i]);
        }
        
        let Img = document.createElement("img");
        Img.src = "Resurse/altele1.png";
        Img.alt = "Imagine_statistici";
        Img.style.width = "1000px";
        Img.style.height = "600px";
        P.appendChild(Img);
    }, 5000);
}