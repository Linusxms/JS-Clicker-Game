var anzahlGegossen = 0;

function giessen() {
    if(anzahlGegossen < 12) {
        anzahlGegossen = anzahlGegossen + 1;
        document.getElementById("bereits-gegossen").innerHTML = anzahlGegossen;
    }
    
    if(anzahlGegossen == 3) {
        document.getElementById("kartenbild").setAttribute("src", "Bilder/Dino 2.png");
        document.getElementById("benoetigtes-giessen").innerHTML = 6;
    }    
     if(anzahlGegossen == 6) {
        document.getElementById("kartenbild").setAttribute("src", "Bilder/Dino 3.png");
        document.getElementById("benoetigtes-giessen").innerHTML = 9;
    }    
     if(anzahlGegossen == 9) {
        document.getElementById("kartenbild").setAttribute("src", "Bilder/Dino 4.png");
        document.getElementById("benoetigtes-giessen").innerHTML = 12;
    }    
     if(anzahlGegossen == 12) {
        document.getElementById("kartenbild").setAttribute("src", "Bilder/Dino 7.png");
    }    
}
    
