let text1 = "Uwielbiam JavaScript";
let text2 = "Jestem świetnym programistą";

function dlugosc(parametr1, parametr2) {
    
    let wynik;
    
    let zmienna1 = text1.length;
    let zmienna2 = text2.length;

    if (zmienna1 > zmienna2) {
        wynik = text1;
    } else {
        wynik = text2;
    }

    return wynik;
}

console.log(dlugosc(text1,text2));