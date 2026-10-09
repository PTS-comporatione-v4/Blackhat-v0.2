# CICADA 6845 // TEST 05 — pomocka 1/5
# Signál je zakódovaný. Prečítaj kód, nie len výstup.
# Toto je prvá z 5 častí. Zvyšné: signal2.py, pomocka1.js, pomocka2.js, pomocka.rs
import base64

signal = "RU5JR01B"  # base64

sprava = base64.b64decode(signal).decode("utf-8")
print(sprava)
