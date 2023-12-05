﻿//Rozwiązanie tymczasowe
//------
//Funckja logowania
function zaloguj() {
    sessionStorage.setItem("poziom", "Średni");
    window.location.href = "/Home/MenuGlowne";
}

// Funkcja wylogowania
function wyloguj() {
    window.location.href = "/Home/StronaGlowna";
}
//------
//Przejście do strony z informcjami (instrukcje,opisy)
function info() {
    window.location.href = "/Home/Info";
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

//Uruchamianie ponownie danego testu
function uruchom_ponownie() {
    let test = sessionStorage.getItem("test");
    window.location.href = "/Home/" + test;
}

//Pobieranie aktualnego poziomu (rozwiązanie bez bazy)
function pobierz_poziom() {
    let poziom = sessionStorage.getItem("poziom");
    return poziom;
}

function poziomHTML() {
    let poziom = sessionStorage.getItem("poziom");
    let str = 'Poziom: ' + poziom + '';
    return str;
}