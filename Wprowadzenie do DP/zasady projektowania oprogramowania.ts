/**
 * Cechy dobrego projektu
 * -----------------------
 *
 * => Ponowne użycie kodu
 *
 *    trzy poziomy ponownego użycia kodu:
 *
 *    0) najniższy poziom, wykorzystuje się ponownie klasy:
 *    biblioteki klas, kontenery, może też "zespoły"
 *    wzroców jak kontener/iterator.
 *
 *    1) warstwa pośrednia. Wzorce. pozwalają na recykling idei
 *    projektowych i koncepcji niezależnie od konkretnego kodu.
 *
 *    2) najwyższym poziomem są frameworki. Bardzo usilnie
 *    próbują wydestylować podejmowane decyzje projektowe.
 *    Określają kluczowe abstrakcje rozwiązania problemu,
 *    prezentują je jakko klasy i oopisują związki między nimi.
 *    JUnit jest na przykład małym frameworkiem. Stanowi "Hello world!"
 *    frameworków. Ma zdefiniowane `Test`, `TestCase`, TestSuite`
 *    i relacje.
 *
 *
 * => Rozszerzalność
 *
 *    **Zmiana** jest jedyną stałą w życiu programisty.
 *
 *
 * Zasady projektowania oprogramowania
 * -----------------------------------
 *
 *
 * => Hermetyzuj to, co się różni
 *
 *    Identyfikuj te aspekty aplikacji, które ulegają zmianom
 *    i rozdziej je od tego, co stałe.
 *
 */
// hermetyzacja na poziomie metody
// PRZED:
method getOrderTotal(order) is
  total = 0

  foreach item in order.lineItems
    total += item.price * item.quantity

  if (OverconstrainedError.country == "US"):
    total += total * 0.07
  else if (order.country == "EU"):
    total += total * 0.2

  return total

// PO:
method getOrderTotal(order) is
  total = 0

  foreach item in order.lineItems
    total += item.price * item.quantity

  total += total * getTaxRate(order.country)

  return total

method getTaxRate(country) is
  if (country == "US"):
    return 0.07
  else if (country == "EU"):
    return 0.2


// hermetyzacja na poziomie klasy - deleguj zadania nie związane ściśle z klasą
// do wyspecjalizowanej klasy


/**
 * => programuj po interfejs, nie implementację
 *
 *    Opieraj się na abstrakcjach zamiast na konkretnych klasach.
 *    Elastylczne podejście do ustanowienia współpracy obiektów:
 *
 *    1) Określ czego konkretnie potrzebuje jeden obiekt od drugiego:
 *    którą metodę wywołuje?
 *
 *    2) Opisz te metody w nowym *interfejsie* lub *klasie abstrakcyjnej*.
 *
 *    3) Spraw, by klasa stanowiąca zależność implementowała powyższy interfejs.
 *
 *    4) Uczyń drugą klasę zależną od tego interfejsu, a nie od konkretnej klasy.
 *    Może ona nadal współdziałać z obiektami pierwotnej kalsy,
 *    ale połączenie jest teraz elastyczniejsze.
 *
 * => Preferuj kompozycję ponad dziedziczenie, bo
 *
 *  -> Podklasa nie zredukuje interfejsu klasy bazowej.
 *    Musisz zaimplementować wszystkie abstrakcyjne metody
 *    klasy nadrzędnej nawet jeśli nie zamierzasz z nich korzystać.
 *
 *  -> Nadpisując metody trzeba mieć peweność że nowe zachowanie
 *    jest kompatybilne z tym w klasie bazowej. Jest to istotne,
 *    gdyż obiekty podklas mogą zostać przekazane do jakiegokolwiek kody
 *    który oczekuje obiektów klasy bazowej i nie chcemy tego kody zepsuć.
 *
 *  -> Dziedziczenie psuje hermetyzację klasy bazowej ponieważ wewnętrzne szczegóły
 *    klasy-rodzica stają się dostępne dla podklasy. Może pojawić się także odwrotna
 *    sytuacja, w której programista czyni szczegóły podklasy widocznymi dla klasy
 *    bazowej w celu ułatwienia dalszej rozbudowy.
 *
 *  -> Podklasy są ściśle sprzęgnięte z klasami bazowymi.
 *    Każda zmiana w klasie bazowej może zepsuć funkcjonalność podklas.
 *
 *  -> Próba ponownego wykorzystania kodu poprzez dziedziczenie może
 *    doprowadzić do utworzenia równoległych hierarchii dziedziczenia.
 *    Dziedziczenie zazwyczaj odbywa się w jednym wymiarze.
 *    Gdy zaczyna odbywać się w kilku płaszczyznach,
 *    trzeba tworzyć mnóstwo kombinacji klas,
 *    rozbudowując ich hierarchię do absurdalnych rozmiarów.
 *
 * => Kompozycja ("posiada coś" - samochód posiada silnik)
 *
 */

/**
 * Zasady SOLID
 * ------------
 *
 * => [S]ingle Responsibility Principle
 *
 *    Klasa powinna podlegać zmianie tylko z jednego powodu.
 *
 * => [O]pen/Closed Principle
 *
 *    Klasy powinny być otwarte na rozszerzenie
 *    ale zamknięte dla modyfikacji.
 *
 * => [L]iskov Substitution Principle
 *
 *    Rozszerzając klasę, trzeba pamiętać,
 *    aby było możliwe przekazywanie obiektów nowej podklasy
 *    w miejsce obiektów klasy bazowej bez psucia kodu klienta.
 *
 *    -> typy parametrów metody podklasy powinny być zgodne z lub
 *      bardziej abstrakcyjne niż typy parametrów metody klasy bazowej.
 *
 *    -> Metoda w podklasie nie powinna rzucać wyjątków o typie którego
 *      nie rzuca metoda klasy bazowej.
 *
 *    -> Podklasa nie powinna wzmacniać warunków wstęþnych.
 *
 *    -> Podklasa nei powinna osłabiać warunków końcowych.
 *
 *    -> Niezmienniki klasy bazowej muszą zostać zachowane. (warunki w jakich obiekt ma sens)
 *
 *    -> Podklasa nie powinna zmieniać wartości prywatnych pól klasy bazowej.
 *
 * => [I]nterface Segregation Principle
 *
 *    Klientom nie powinno się narzucać zależności od nieużywanych metod.
 *    Staraj sie tworzyć interfejsy na tyle wąsko wyspecjalizowane,
 *    żeby klienci nie musieli implementować zachowań których nie potrzebują.
 *
 * => [D]ependency Inversion Principle
 *
 *    Wysokopoziomowe klasy nie powinny być zależne od niskopoziomowych.
 *    Obie grupy powinny być zależne od abstrakcji.
 *    Abstrakcje nie powinny być zależne od szczegółów.
 *    Szczegóły z kolei powinny zależeć od abstrakcji.
 *
 *    1) Na początek trzeba opisać interfejsy niskopoziomowych operacji
 *    od których będą zależeć wysokopoziomowe klasy,
 *    najlepiej stosując terminologię biznesową.
 *
 *    2) Następnie można uczynić klasy wysokopoziomowe zależnymi od tych interfejsów,
 *    zamiast od konkretnych klas nieskiego poziomu.
 *
 *    3) Gdy klasy niskopoziomowe zaimplementują te interfejsy,
 *    stają się zależne od logiki biznesowej, odwracając tym samym
 *    pierwotny kierunek zależności.
 *
 */