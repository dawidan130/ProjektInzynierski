//Rozwiązanie tymczasowe
//------
//Funckja logowania
function zaloguj() {
    window.location.href = "/Home/MenuGlowne";
}

// Funkcja wylogowania
function wyloguj() {
    window.location.href = "/Home/StronaGlowna";
}
//------

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
    window.location.href = "/Home/MenuGlowne";
}

//Uruchominie odpowieniego testu
function starttest(test) {
    sessionStorage.setItem("test", test);
    window.location.href = "/Home/" + test;
}

//Przejście do strony z wynikiami testu
function wynik() {
    window.location.href = "/Home/Wynik";
}

function uruchom_ponownie() {
    let test = sessionStorage.getItem("test");
    window.location.href = "/Home/" + test;
}