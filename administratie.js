window.onload=function() {//utilizarea lui target si a lui currentTarget, utilizarea clasei Date cu mai multe metode, utilizarea
    //evenimentului generat de tastatura si a lui localStorage.
    const menu = document.querySelector('.meniu');

    menu.addEventListener('click', function(event) {
        
        if (event.target.tagName === 'A') {
            console.log('Link-ul pe care s-a facut clic:', event.target.textContent);
            console.log('Meniul la care este atasat: ', event.currentTarget.textContent);
        }
    });



    function afiseazaDataCurenta() {
        var dataCurenta = new Date();
        var zi = dataCurenta.getDate();
        var luna = dataCurenta.getMonth() + 1; 
        var an = dataCurenta.getFullYear();
    
        alert(`Data curenta: ${zi}/${luna}/${an}`);
    }
    afiseazaDataCurenta();
    


   
var paragraf = document.createElement("p");
paragraf.style.color = "blue";
paragraf.style.fontSize = "2rem";
paragraf.id = "ultimul_paragraf";
document.body.appendChild(paragraf);
for(item of ["1","2","3","4","5","6"]){
if (localStorage.getItem(item)) {
    var prs = document.getElementById("id" + item);
    paragraf.textContent +=item + ')' + prs.textContent + '; ';
}}

function salveazaTasta(tasta) {
    if (parseInt(tasta) >= 0 && parseInt(tasta) <= 6)
        localStorage.setItem(tasta, tasta);
}

document.addEventListener('keydown', function(event) {
    if (!localStorage.getItem(event.key)) {
        if (parseInt(event.key) >= 0 && parseInt(event.key) <= 6) {
            var prs = document.getElementById("id" + event.key);
            paragraf.textContent +=event.key + ')' + prs.textContent + '; ';
        }
    }
    salveazaTasta(event.key);
});

document.getElementById("ultimul_paragraf").onclick = function curatare() {
    localStorage.clear();
    location.reload();
}

};