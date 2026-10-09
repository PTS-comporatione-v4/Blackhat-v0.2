// CICADA 6845 // TEST 05 — pomocka 4/5
// Signál je zakódovaný. Prečítaj kód, nie len výstup.
// Toto je štvrtá z 5 častí. Zvyšné: signal1.py, signal2.py, pomocka1.js, pomocka.rs

const signal = "WYRM";  // každé písmeno je posunuté o 3 dopredu

const sprava = signal.split("").map(c =>
  String.fromCharCode((c.charCodeAt(0) - 65 - 3 + 26) % 26 + 65)
).join("");
console.log(sprava);
