# Zlatá trefa - audioguide

Statická webová aplikace pro audioprůvodce k výstavě **Zlatá trefa: příběh olympijského vítěze Josefa Panáčka**.

## Jak spustit

Nejjednodušší varianta: rozbalit ZIP a otevřít `index.html` v prohlížeči.

Doporučená varianta pro lokální test v prohlížeči:

```bash
cd zlata-trefa-audioguide
python -m http.server 8000
```

Poté otevřít adresu `http://localhost:8000`.

## Orientace ve výstavě

Aplikace nepoužívá QR kódy. Počítá s fyzicky umístěnými čísly u panelů. Číslování odpovídá panelům:

1. Josef Panáček
2. Atlet
3. Myslivec
4. Střelec
5. Mistrovství Evropy
6. Legenda
7. Zdeňka
8. Co je skeet?
9. Olympijský vítěz
10. Olympijské hry v Montrealu 1976

## Audio soubory

První zastavení je už připojeno jako:

`assets/audio/01-josef-panacek.mp3`

Další audio doplňte do stejné složky pod těmito názvy:

- `02-atlet.mp3`
- `03-myslivec.mp3`
- `04-strelec.mp3`
- `05-mistrovstvi-evropy.mp3`
- `06-legenda.mp3`
- `07-zdenka.mp3`
- `08-co-je-skeet.mp3`
- `09-olympijsky-vitez.mp3`
- `10-montreal-1976.mp3`

Po doplnění souborů není nutné měnit kód aplikace.

## Úprava textů

Texty zastavení jsou uložené přímo v souboru `index.html` v proměnné `STOPS`. Pro rychlé úpravy vyhledejte název zastavení a změňte položku `script`, `hook` nebo `look`.

## Nasazení

Celou složku lze nahrát na běžný webhosting jako statický web. Není potřeba databáze ani backend.

## Oprava přehrávání

V této verzi je opravena chyba v JavaScriptu, která v předchozím balíku zastavila celý skript a tím i audio přehrávač.

Pokud se audio po otevření stále nespustí:

1. ZIP nejprve celý rozbalte, nespouštějte `index.html` přímo z náhledu archivu.
2. Otevřete zastavení 1 - pouze zde je zatím vložený zvukový soubor.
3. Pokud jste aplikaci už zkoušel přes `localhost`, proveďte tvrdé obnovení stránky nebo otevřete anonymní okno, aby se nenačetla stará cache.
