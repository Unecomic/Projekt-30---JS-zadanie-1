function sprawdzliczbe(){

    const input = document.getElementById("liczba");
    const wynik =document.getElementById("wynik");
    const liczba=Number(input.value);

    if(liczba>10){

        wynik.innerHTML="wieksz od 10 ";
    }
    else if(liczba <10){
         wynik.innerHTML="mniejsza od 10 ";
    }
    else if(liczba===10){
 wynik.innerHTML=" równa 10 ";
    }
}