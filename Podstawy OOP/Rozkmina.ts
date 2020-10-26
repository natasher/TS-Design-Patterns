/**
 * +--------------------+
 * |    Cat             |  > Nazwa
 * +--------------------+
 * | + name             |
 * | + gender           |
 * | + age              |  > Pola (stan)
 * | + weight           |      + publiczne
 * | + color            |      - prywatne
 * | ...                |      (readonly)
 * +--------------------+
 * | + breathe()        |
 * | + each(food)       |
 * | + run(destination) |  > Metody (zachowanie)
 * | + sleep(hours)     |
 * | + meow()           |
 * +--------------------+
 *
 * Pola + Metody -> sładowe
 *
 * Kot Leo jest obiektem, instancją klasy Cat.
 * Kot Luna też jest instancją klasy Cat.
 *
 */

/**
 * Filary programowania obiektowego
 * -----------------------------------------
 * => Abstrakcja
 *
 *    Model rzeczywistego obiektu lub zjawiska,
 *    ogranicznego do pewnego kontekstu, przez
 *    co dokładnie przedstawia szczegóły związane
 *    z tym kontekstem, ale pomija pozostałe.
 *
 * => Hermetyzacja
 *
 *    Zdolność obiektu do ukrywania części swojego stanu
 *    i zachowania przed innymi obiektami, eksponując
 *    reszcie programu tylko ograniczony interfejs.
 *    Hermetyzować coś oznacza uczynić to coś `prywatnym`
 *    lub `chronionym` (protected - składowa klasy dostępna
 *    także dla podklas).
 *    `interface` interesują się tylko zachowaniem obiektu
 *    i nie można w nich zadeklarować pola prywatnego.
 *
 * => Dziedziczenie
 *
 *    Możliwość tworzenia nowych klas na bazie istniejących.
 *    Główną zaletą dziedziczenia jest możliwość ponownego
 *    wykorzystania kodu. Jeśli potrzebujesz stworzyć klasę
 *    nieco inną od istniejącej, nie trzeba powtarzać tego
 *    samego kodu. Wystarczy rozszerzyć istniejącą i umieścić
 *    dodatkową funkcjonalność w tak powstałej podklasie.
 *    Podklasa przejmie pola i metody klasy bazowej.
 *
 *    Konsekwencją dziedziczenia jest przejęcie przez podklasy
 *    interfejsu klasy-rodzica. Nie można ukryć metody w podklasie
 *    jeśli zadeklarowano ją w klasie bazowej. Musisz ponadto
 *    zaimplementować wszystkie metody zadeklarowane jako
 *    abstrakcyjne, nawet jeśli nie mają racji bytu
 *    w twojej podklasie.
 *
 * => Polimorfizm
 *
 *    To zdolność programu do wykrywania faktycznej klasy
 *    obiektu i wywoływania jego implementacji nawet gdy
 *    typ jest nieznany w danym kontekście.
 *
 */


/**
 * Relacje pomiędzy obiektami
 * --------------------------
 *
 * (A po lewej, B po prawej)
 *
 * => Zależność ( [ profesor ]- - - - ->[ przedmiot ] )
 *
 *    Istnieje pomiędzy dwiema klasami, jeśli pewne zmiany
 *    definicji jednej z nich mogą skutkować modyfikacjami
 *    drugiej. Zależność zwykłe zachodzi gdy w kodzie znajdą
 *    się nazwy konkretnych klas.
 *
 *    Klasa A może odczuć zmiany dokonywane w klasie B.
 *
 * => Asocjacja ( [ profesor ]-------->[ student ] )
 *
 *    Jeden obiekt korzysta z innego lub wchodzi w interakcję
 *    z innym obiektem. Strzałka prowadzi od obiektu
 *    korzystającego w kierunku wykorzystywanego.
 *    Możliwa dwukierunkowa asocjacja. ( [ p ]<-->[ s ] )
 *
 *    Obiekt A wie o obiekcie B.
 *    Klasa A jest zależna od klasy B.
 *
 * => Agregacja ( [ wydział ]<>------->[ profesor ] )
 *
 *    Asocjacja "jeden do wielu", "wiele do wielu", "całość-część",
 *    pomiędzy wieloma obiektami. Kontener po stronie <> i -> po
 *    stronie komponentu. Może istnieć bez Kontenera.
 *
 *    Obiekt A wie o obiekcie B i składa się z B.
 *    Klasa A jest zależna od B.
 *
 * => Kompozycja ( [ uniwersytet ]<*>------>[ wydział ] )
 *
 *    Szczególny rodzaj agregacji, w którym jeden obiekt
 *    składa sie z jednej lub wielu instancji innego.
 *    Komponent istenieje wyłącznie jako część kontenera.
 *
 *    Obiekt A wie o obiekcie B, składa się z B i zarządza cyklem życia B.
 *    Klasa A jest zależna od B.
 *
 * -> Implementacja ( [ A ]- - -|>[ B ] )
 *
 *    Klasa A definiuje metody zadeklarowane w interfejsie B.
 *    Obiekty A można traktować jak B.
 *    Klasa A jest zależna od B.
 *
 * -> Dziedziczenie ( [ A ]---|>[ B ] )
 *
 *    Klasa A dziedziczy interfejs i implementację po klasie B
 *    ale może go rozszerzyć. Obiekt A można traktować jak B.
 *    Klasa A jest zależna od b.
 *
 */
