"use strict";
/**
 * Builder
 * ========
 *
 * 1) Interfejs Budowniczego deklaruje etapy konstrukcji produktu
 * wspólne dla wszystkich typów budowniczych.
 *
 * 2) Konkretni Budowniczowie zapewniają różne implementacje
 * etapów konstrukcji. Konkretni budowniczowie mogą tworzyć
 * produkty któ©e nie mają wspólnego interfejsu.
 *
 * 3) Produkty to powstałe obiekty. Produkty konstruowane przez
 * różnych budowniczych nei muszą należeć do tej samej
 * hierarchii klas, czy interfejsu.
 *
 * 4) Klasa Kierownik definiuje kolejność w jakiej należy
 * wywołać etapy konstrukcyjne, aby móc stworzyć i następnie
 * użyć ponownie określone konfiguracje produktów.
 *
 * 5) Klient musi dopasować jeden z obiektów budowniczych do
 * kierownika. Zazwyczaj robi się to tylko raz, za pośrednictwem
 * parametru przekazywanego do konstruktora kierownika.
 * Następnie kierownik za pomocą obiektu budowniczego wykonuje dalszą
 * konstrukcję. Jednakże istnieje alternatywne podejście
 * w przypadku przekazania obiektu budowniczego metodzie produkcyjnej kierownika.
 * W takim przypadku kierownik może skorzystać z różnych budowniczych.
 */ 
