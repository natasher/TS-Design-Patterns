"use strict";
/**
 * 1) produkty Abstrakcyjne deklarują interfejsy odmiennych produktów,
 * które składają sie na wspólną rodzinę.
 *
 * 2) Konkretne Produkty to różnorakie implementacje abstrakcyjnych
 * produktów, pogrupowane według wariantów. Każdy abstrakcyjny produkt
 * (fotel/sofa) musi być zaimplementowany w ewszystkich zadanych wariantach
 * (Wiktoriański/Nowoczesny)
 *
 * 3) Interfejs Fabryki Abstrakcyjnej deklaruje zestaw metod służących
 * tworzeniu każdego z abstrakcyjnych produktów.
 *
 * 4) Konkretne Fabryki implementuja metody kreacyjne fabryki abstrakcyjnej.
 * Każda konkretna fabryka jest związana z jakimś określonym wariantem produktu
 * i produkuje wyłącznie meble w tym stylu.
 *
 * 5) Mimo, że konkretne fabryki tworzą konkretne egzemplarze produktu,
 * sygnatury ich metod kreacyjnych muszą zwracać stosowne abstrakcyjne produkty.
 * Dzięki temu kod kliencki, który korzysta z fabryki, nie zostanie sprzęgnięty
 * z jakimś konkretnym wariantem produktu, jaki otrzymuje z fabryki.
 *
 *
 * Jak zaimplementować
 * ------------------------
 *
 * 1) Stwórz mapę poszczególnych typów produktów z uwzględnieniem wariantów
 * w jakich mogą one być dostępne.
 *
 * 2) Dla każdego typu produktu zaimplementuj abstrakcyjny interfejs.
 * Niech wszystkie konkretne klasy produktów implementują powyższe interfejsy.
 *
 * 3) Zadeklaruj interfejs fabryki abstrakcyjnej zawierający zestaw metod
 * kreacyjnych wszystkich produktów abstrakcyjnych.
 *
 * 4) Zaimplementuj zestaw konkretnych klas fabrycznych -
 * po jednym dla każdego wariantu produktu.
 *
 * 5) Gdzieś w progrmie umieść kod inicjalizujący fabrykę. Kod ten powinien
 * powołać do życia obiekt jednej z konkretnych klas fabrycznych - zależnie
 * od konfiguracji programu, czy też środowiska, w jakim został uruchomiony.
 * Przekaż następnie ten obiekt fabryczny każdej klasie, której zadaniem jest
 * konstrukcja produktów.
 *
 * 6) Przejrzyj kod aplikacji, wyszukując wszelkie bezpośrednie wywołania
 * konstruktorów produktów. Zamień te wywołania na takie, które odnoszą
 * się do stosownych metod kreacyjnych obiektu fabrycznego.
 */ 
