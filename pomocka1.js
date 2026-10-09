// CICADA 6845 // TEST 05 — pomocka 3/5
// Signál je zakódovaný. Prečítaj kód, nie len výstup.
// Toto je tretia z 5 častí. Zvyšné: signal1.py, signal2.py, pomocka2.js, pomocka.rs

const signal = "TUCOP";  // odzadu

const sprava = signal.split("").reverse().join("");
console.log(sprava);
