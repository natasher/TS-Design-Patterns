/**
 * Metoda Wytwórcza (Konstruktor wirtualny)
 * =========================================
 *
 * Udostępnia interfejs do tworzenia obiektów w ramach klasy bazowej,
 * ale pozwala podklasom zmieniać typ tworzonych obiektów.
 *
 * Zamieniamy bezpośrednie wywołania konstruktorów obiektów( te z `new` ;) )
 * na wywołanie specjalnej metody wytwórczej.
 * Obiekty zwracane przez metodą wytwórczą często są nazywane `produktami`.
 *
 * Ograniczenie:
 * -------------
 * podklasy mogą zwracać różne typy produktów tylko wtedy,
 * gdy produkty te mają współną klasę bazową lub wspólny interfejs,
 * zwracany typ w klasie bazowej powinien być zgodny z tym interfejsem.
 *
 * Tworzenie produktów *nie* jest główną odpowiedzialnością Klasy Twórcy.
 * Klasa kreacyjna zawiera już jakąś ważną logikę biznesową związaną
 * z produktami.
 *
 * Składowe:
 * ----------
 * 1) Produkt deklaruje interfejs, który jest wspólny dla wszystkich
 * obiektów zwracanych przez twórcę oraz jego podklasy.
 *
 * 2) Konkretne Produkty są różnymi implementacjami interfejsu produktów.
 *
 * 3) Klasa Twórca deklaruje metodę wytwórczą, która zwraca nowe
 * obiekty-produkty. Istotne jest, że typ zwracany przez tę metodę jest
 * zgodny z interfejsem produktu.
 *
 * 4) Konkretni Twórcy nadpisują bazową metodę wytwórczą,
 * co sprawia, że zwraca ona inny typ obiektu.
 *
 * Zastosowanie:
 * -------------
 * Stosuj gd ynie wiesz z góry jakie typy obiektów pojawią się w twoim programie
 * i jakie będą między nimi zależności
 *
 * Oddziela Kod konstruujący produkty od kody który faktycznie z tych produktów
 * korzysta. Dlatego też łatwiej jest rozszerzać kod konstruujący produkty
 * bez konieczności ingerencji w resztę kodu.
 *
 *
 * Aby istniejący obiekt mógł zostać wykorzystany ponownie:
 * 1) Najpiew musisz stworzyć jakiś magazyn, któ©y będzie pamiętał
 * wszystkie utworzone obiekty.
 *
 * 2) Gdy ktoś zgłosi zapotrzebowanie na obiekt, program powinien
 * odszukać wolny obiekt spośród ych już istniejących w puli.
 *
 * 3) zwrócić go kodowi klienckiemu.
 *
 * 4) Jeśli nie ma żadnych wolnych obiektów,
 * program powinien utworzyć nowy (i dodać go do puli magazynowej).
 *
 *
 * Jak implementować?
 * ------------------
 * 1) Wszystkie produkty powinny być zgodne z tym samym interfejsem.
 * Interfejs ten powinien deklarować metody,
 * które są sensowne dla każdego produktu.
 *
 * 2) Dodaj pustą metodę wytwórczą do klasy kreacyjnej.
 * Zwracany typ tej metody powinien być zgodny zinterfejsem
 * wspólnym dla produktów.
 *
 * 3) W kodzie kreacyjnym należy odnaleźć wszystkie odniesienia do
 * konstruktorów produktów. Jeden po drugim, trzeba zamienić je na
 * wywołania metody wytwórczej, ekstrahując przy tym kod kreacyjny produktów,
 * aby umieścić go w metodzie wytwórczej.
 *
 * 4) Teraz stwórz zestaw podklas kreacyjnych dla każdego typu produktu
 * wymienionego w metodzie wytwórczej. Nadpisz metodę wytwórczaą
 * w każdej z podklas i wyekstrahuj stosowne fragmenty kodu
 * konstruującego z metody bazowej.
 *
 * 5) Jeśli mamy zbyt wiele typów produktów i nie ma sensu tworzyć
 * podklasy dla każdego z nich, możesz wykorzystać ponownie parametr
 * kontrolny klasy bazowej w podklasach.
 *
 * 6) Jeśli po dokonaniu wszystkich ekstrakcji, bazowa metoda
 * wytwórcza została pusta, możęsz uczynić ją abstrakcyjną.
 * Jeśli jednak coś w niej pozostało, możesz pozostawić to
 * jako domyślne zachowanie sie metody.
 */