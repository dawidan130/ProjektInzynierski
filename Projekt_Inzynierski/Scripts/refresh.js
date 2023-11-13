//Przeładowywanie strony przy cofaniu poprzez przeglądarkę lub też przejściu do przodu
window.addEventListener("pageshow", function (event) {
    var przejscie = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if (przejscie) {
        window.location.reload();
    }
});