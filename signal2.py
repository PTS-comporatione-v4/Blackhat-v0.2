# CICADA 6845 // TEST 05 — pomocka 2/5
# Signál je zakódovaný. Prečítaj kód, nie len výstup.
# Toto je druhá z 5 častí. Zvyšné: signal1.py, pomocka1.js, pomocka2.js, pomocka.rs

signal = "43484345"  # šestnástková sústava

sprava = bytes.fromhex(signal).decode("utf-8")
print(sprava)
