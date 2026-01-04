# 🚋 Kalkulator Biletowy MPK Łódź

**🔗 Wersja online:** [https://piotrrgw.github.io/MPK_bilet_Lodz/](https://piotrrgw.github.io/MPK_bilet_Lodz/)

---

Prosta, lekka i responsywna aplikacja internetowa, która pomaga pasażerom MPK Łódź wybrać najkorzystniejszą opcję opłaty za przejazd: **Taryfę Przystankową** lub **Bilet Czasowy**.

Aplikacja porównuje koszty w czasie rzeczywistym i sugeruje bezpieczniejsze rozwiązania w przypadku ryzyka opóźnień.

## ✨ Główne Funkcjonalności

* **Porównanie cen:** Automatycznie oblicza koszt przejazdu na podstawie liczby przystanków oraz czasu podróży, wskazując tańszą opcję (oznaczoną kolorem zielonym).
* **Kalkulacja "na żywo":** Ceny aktualizują się natychmiast po wpisaniu danych, bez konieczności klikania przycisków.
* **Bufor bezpieczeństwa (+5 min):** Inteligentny system wykrywa, gdy zadeklarowany czas przejazdu jest bliski limitowi biletu czasowego (np. 18 min dla biletu 20-minutowego). W takiej sytuacji system ostrzega o ryzyku opóźnienia i sugeruje zakup biletu o dłuższym czasie ważności.
* **Dostępność (A11y & WCAG):**
    * Wysoki kontrast (High Contrast) dla osób słabowidzących.
    * Pełna obsługa czytników ekranowych.
    * Responsywność (RWD) – wygodna obsługa na telefonach (duże pola dotykowe).
* **Prywatność:** Aplikacja działa całkowicie lokalnie w przeglądarce. Nie wykorzystuje Google Tag Managera (GTM) ani plików cookie śledzących użytkownika.

## 🚀 Jak uruchomić?

Aplikacja jest dostępna pod adresem: [https://piotrrgw.github.io/MPK_bilet_Lodz/](https://piotrrgw.github.io/MPK_bilet_Lodz/)

Alternatywnie, możesz uruchomić ją lokalnie:
1.  Pobierz plik `index.html`.
2.  Otwórz go w dowolnej przeglądarce internetowej (Chrome, Firefox, Safari, Edge, Opera).

## 🛠 Technologie

* **HTML5:** Semantyczna struktura.
* **CSS3:** Stylowanie z wykorzystaniem zmiennych CSS (Custom Properties) oraz Flexbox/Grid.
* **JavaScript (Vanilla JS):** Logika obliczeniowa bez zewnętrznych bibliotek.

## 📜 Cennik (Zasady Logiki)

Aplikacja opiera się na taryfikatorze MPK Łódź (stan na 2025/2026):

* **Taryfa Przystankowa:**
    * Opłata startowa (1. przystanek).
    * Opłata rośnie liniowo do 19. przystanku.
    * Powyżej 19. przystanku cena jest stała (cap cenowy).
* **Bilety Czasowe:**
    * System dobiera najtańszy bilet pokrywający wpisany czas (20 min, 40 min, 80 min lub 24h).

## 📅 Historia Zmian (Changelog)

### v1.1 (2026-01-04)
* **Dodano:** Automatyczne przeliczanie cen po zmianie wartości w polach (usunięto przycisk "Oblicz").
* **Dodano:** Logikę bufora bezpieczeństwa (5 minut). Wyświetlanie ostrzeżenia i sugestii droższego biletu, jeśli czas przejazdu + 5 min przekracza limit tańszego biletu.
* **Ulepszono:** Interfejs użytkownika (UI) – dynamiczne podświetlanie zwycięskiej oferty.

### v1.0 (2026-01-04)
* Pierwsza wersja kalkulatora.
* Podstawowe porównanie taryfy przystankowej i czasowej.
* Implementacja podstawowych zasad WCAG.

## 👥 Autorzy

* **Piotr M 🚂** – Concept, Project Lead
* **Gemini** – AI Development & Coding

---
*Aplikacja stworzona z myślą o pasażerach.*