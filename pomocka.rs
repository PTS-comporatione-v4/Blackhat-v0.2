// CICADA 6845 // TEST 05 — pomocka 5/5
// Signál je zakódovaný. Prečítaj kód, nie len výstup.
// Toto je piata z 5 častí. Zvyšné: signal1.py, signal2.py, pomocka1.js, pomocka2.js

fn main() {
    let data = [79, 83, 72, 90];
    // každý bajt je o 7 väčší, než má byť
    let sprava: String = data.iter().map(|b| (b - 7) as char).collect();
    println!("{}", sprava);
}
