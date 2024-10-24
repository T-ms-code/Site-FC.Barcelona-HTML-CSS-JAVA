window.onload=function(){//metoda toUpperCase pentru String, classList, getComputedStyle, modificarea de proprietati.
  setTimeout(function (){
  let s1=document.querySelector("#statistici>p:nth-child(2)");
  let s2=document.querySelector("#statistici>p:last-child");
  let S1=s1.innerHTML.toUpperCase();
  let S2=s2.innerHTML.toUpperCase();
  s1.innerHTML=S1;
  s2.innerHTML=S2;

  let Img=document.createElement("img");
  Img.src="Resurse/altele2.jpg";
  Img.alt="Messi cu balonul de aur";
  Img.classList.add("galerie-statica");
  Img.classList.add("grid1-item1");
  Img.id="imaginebalon";
  document.getElementById("palmares").append(Img);

  let Img2=document.querySelector("#viata_personala>img");
  let stil=window.getComputedStyle(Img2);
  Img2.style.width=(parseInt(stil.getPropertyValue("width"))-500)+"px";
  Img2.style.height=(parseInt(stil.getPropertyValue("height"))-500)+"px";
  },6000)
}