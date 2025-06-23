# System rezerwacji biletów na wydarzenia

## Opis projektu

Aplikacja internetowa napisana w Node.js z wykorzystaniem wzorca architektonicznego MVC oraz Server-Side Rendering (EJS). Projekt umożliwia użytkownikom przeglądanie wydarzeń oraz rezerwowanie i anulowanie biletów.

Celem projektu jest zaprezentowanie umiejętności tworzenia aplikacji webowych opartych na MVC, wykorzystując Node.js i Express.js.

---

## Funkcjonalności

- Przeglądanie listy dostępnych wydarzeń
- Szczegóły wydarzenia (data, miejsce, opis)
- Rezerwacja biletów (wybór liczby miejsc, sektora)
- Możliwość anulowania rezerwacji

---

## Instrukcja uruchomienia

   git clone https://github.com/Atetiuk/ticket-reservation-mvc.git

   cd projekt

   npm init -y

   npm install express ejs

   node app.js


## Struktura aplikacji

# Modele (/models)
Event.js – struktura danych wydarzenia (nazwa, opis, data, lokalizacja, dostępne miejsca)

Reservation.js – reprezentuje rezerwację (ID wydarzenia, liczba miejsc, ID rezerwacji)

# Kontrolery (/controllers)
eventController.js – logika przeglądania wszystkich wydarzeń i szczegółów pojedynczego eventu

reservationController.js – obsługa tworzenia i anulowania rezerwacji, walidacja danych

# Trasy (/routes)
events.js – ścieżki do: /events, /events/:id

reservations.js – ścieżki do: /reservations, /reservations/cancel/:id

# Widoki (/views)
layout.ejs – wspólny layout wszystkich widoków

events/index.ejs – lista wydarzeń

events/details.ejs – szczegóły wydarzenia z formularzem rezerwacji

reservations/confirmation.ejs – potwierdzenie rezerwacji

reservations/cancel.ejs – potwierdzenie anulowania

