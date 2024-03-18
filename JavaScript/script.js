// Proměnné
let userInput = document.getElementById('date');
let calcBtn = document.getElementById('calc-btn');
let result = document.getElementById('result');

// Získání aktuálního datumu (max hodnota, kterou může uživatel zadat)
userInput.max = new Date().toISOString().split('T')[0];
// console.log(userInput.max);

// Funkce pro výpočet věku
function calculateAge() {
    // Kontrola, zdali uživatel zadal datum
    if (userInput.value == "") {
        alert("You must write date of your birth!");
    } else {
        // Datum zadané uživatelem
        let birthDay = new Date(userInput.value);

        // Vytvoření proměnných pro datum zadané uživatelem
        let d1 = birthDay.getDate(); // Den
        let m1 = birthDay.getMonth() + 1; // Měsíc
        let y1 = birthDay.getFullYear(); // Rok
        // console.log(`${d1}.${m1}.${y1}`);

        // Aktuální datum
        let today = new Date();
        // console.log(today);

        // Vytvoření proměnných pro aktuální datum
        let d2 = today.getDate(); // Den
        let m2 = today.getMonth() + 1; // Měsíc
        let y2 = today.getFullYear(); // Rok
        // console.log(`${d2}.${m2}.${y2}`);

        // Vytvoření proměnných pro výsledné datum
        let d3, m3, y3;

        // Výpočet roku
        y3 = y2 - y1;
        
        // Výpočet měsíce
        if (m2 >= m1) {
            m3 = m2 - m1
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        // Výpočet dne
        if (d2 > d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1
            // console.log(getDaysInMonth(y1, m1));
        }

        // Normalizace záporného roku
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        // Výsledná odpověď 
        result.innerHTML = `You are
            <span>${y3}</span> years,
            <span>${m3}</span> months and
            <span>${d3}</span> days old.`;
    }
}

// Funkce pro počet dní v měsíci
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Zavolání funkce po stisknutí tlačítka
calcBtn.addEventListener(`click`, calculateAge);