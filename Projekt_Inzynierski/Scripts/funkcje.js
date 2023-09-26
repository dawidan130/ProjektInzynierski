//Funkcja wylogowania
//Rozwiązanie tymczasowe
function wyloguj() {
    window.location.href = "/Home/StronaGłówna";
}

//Przejście do strony ze statystykami

function statystyki() {
    window.location.href = "/Home/Statystyki";
}

//Przejście do strony ze ustawieniami

function ustawienia() {
    window.location.href = "/Home/Ustawienia";
}

//Powrót do strony menu

function menu() {
    window.location.href = "/Home/MenuGłówne";
}

function starttest(test) {
    window.location.href = "/Home/" + test;
}