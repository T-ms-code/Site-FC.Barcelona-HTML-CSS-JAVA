window.onload=function f(){//Modificarea stilului unui element, selector css, id, crearea unui element, inputuri functionale,setInterval
    //schimbarea aleatoare a unor proprietati, folosirea metodei random din clasa Math, validarea datelor folosind expresii regulate.
let c=document.querySelector("#contact>h2");
let culori=["blue", "green","red","orange", "white"];
let marimi=["1rem", "2rem", "3rem", "4rem", "5rem"];
let nr=0;

setInterval(function(){

    c.style.color=culori[Math.floor(Math.random() * 5)];
    c.style.fontSize=marimi[Math.floor(Math.random() * 5)];
}, 2000);


let form=document.createElement("form");
form.action="mailto:xm7mihai@gmail.com";
form.method="post";
form.enctype="text/plain";

let name = document.createElement("label");
name.textContent ="Name:";
name.setAttribute("for", "name");
let input1 = document.createElement("input");
input1.type="text";
input1.name="n1";
input1.setAttribute("id", "name");
input1.pattern="[A-Za-z]{1,}";

let email = document.createElement("label");
email.textContent ="E-mail:";
email.setAttribute("for", "email");
let input2 = document.createElement("input");
input2.type="email";
input2.name="n2";
input2.setAttribute("id", "email");
input2.pattern="[a-zA-Z0-9]{1,}@gmail.com";

let comment = document.createElement("label");
comment.textContent ="Comment:";
comment.setAttribute("for", "comment");
let input3 = document.createElement("input");
input3.type="text";
input3.name="n3";
input3.size="50";
input3.setAttribute("id", "comment");

let submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Send");

let resetButton = document.createElement("input");
resetButton.setAttribute("type", "reset");
resetButton.setAttribute("value", "Reset");

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(name);
form.appendChild(document.createElement("br"));
form.appendChild(input1);
form.appendChild(document.createElement("br"));
form.appendChild(email);
form.appendChild(document.createElement("br"));
form.appendChild(input2);
form.appendChild(document.createElement("br"));
form.appendChild(comment);
form.appendChild(document.createElement("br"));
form.appendChild(input3);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(submitButton);
form.appendChild(resetButton);
form.appendChild(document.createElement("br"));

document.getElementById("contact").appendChild(form);

//Validare suplimentare, in caz ca esueaza cea implicita:
form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        alert("Formularul conține date invalide. Te rugăm să corectezi erorile și să încerci din nou.");
    }
});

}