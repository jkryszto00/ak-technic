import type { FAQ, Advantage } from './products';

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  capabilities: string[];
  advantages: Advantage[];
  process: string[];
  faq: FAQ[];
  relatedProducts: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: 'frezowanie-grafitu-cnc',
    name: 'Frezowanie grafitu CNC',
    slug: 'frezowanie-grafitu-cnc',
    shortDescription: 'Precyzyjna obróbka grafitu na centrach frezarskich CNC. Produkcja elektrod EDM według dokumentacji klienta.',
    description: 'Oferujemy profesjonalne frezowanie grafitu na nowoczesnych centrach obróbczych CNC. Produkujemy elektrody EDM o złożonych kształtach geometrycznych z najwyższą precyzją. Doświadczenie w obróbce wszystkich gatunków grafitu SGL Carbon pozwala nam dobrać optymalne parametry skrawania.',
    longDescription: `Frezowanie grafitu CNC to nasza kluczowa specjalizacja — realizujemy ponad 500 elektrod rocznie dla klientów z całej Polski. Dysponujemy nowoczesnymi centrami obróbczymi 3- i 5-osiowymi, dedykowanymi wyłącznie do obróbki grafitu, co eliminuje ryzyko zanieczyszczenia krzyżowego i pozwala na utrzymanie najwyższych standardów czystości.

Obróbka grafitu wymaga specjalistycznej wiedzy i doświadczenia — niewłaściwe parametry skrawania prowadzą do wykruszeń, słabej jakości powierzchni i przedwczesnego zużycia narzędzi. Nasi operatorzy i technolodzy pracują z grafitem od lat i znają specyfikę każdego gatunku SGL Carbon. Dobieramy optymalne strategie obróbki CAM, parametry skrawania i narzędzia indywidualnie do każdego zlecenia — uwzględniając gatunek grafitu, geometrię elektrody i wymaganą jakość powierzchni.

Jako oficjalny dystrybutor SGL Carbon mamy natychmiastowy dostęp do wszystkich gatunków grafitu (R8710, R8650, R8510, R8500). Oznacza to, że możemy zrealizować Twoje zlecenie kompleksowo — od doboru i dostawy materiału, przez programowanie CAM, frezowanie CNC, aż po kontrolę jakości i montaż na uchwytach EROWA. To oszczędność Twojego czasu i eliminacja ryzyka błędów koordynacyjnych.`,
    capabilities: [
      'Obróbka 3- i 5-osiowa CNC na dedykowanych centrach do grafitu',
      'Tolerancje do ±0,01 mm (±0,005 mm po uzgodnieniu)',
      'Maksymalne wymiary detalu: 500×400×300 mm',
      'Obróbka wszystkich gatunków grafitu SGL Carbon (R8710, R8650, R8510, R8500)',
      'Produkcja seryjna (do 100+ szt.) i jednostkowa',
      'Realizacja według dokumentacji CAD/CAM klienta (STEP, IGES, Parasolid)',
    ],
    advantages: [
      { title: 'Wieloletnie doświadczenie w obróbce grafitu', description: 'Ponad 500 elektrod rocznie — znamy specyfikę każdego gatunku SGL Carbon i dobieramy optymalne parametry skrawania.' },
      { title: 'Dedykowany park maszynowy', description: 'Centra CNC przeznaczone wyłącznie do grafitu z profesjonalnym odciągiem pyłu — brak zanieczyszczenia krzyżowego.' },
      { title: 'Optymalne parametry dla każdego gatunku', description: 'Indywidualny dobór strategii CAM, prędkości skrawania i narzędzi do R8710, R8650, R8510 i R8500.' },
      { title: 'Szybkie terminy realizacji', description: 'Standardowe elektrody w 3-5 dni roboczych. Tryb ekspresowy (24-48h) dostępny po uzgodnieniu.' },
      { title: 'Kontrola jakości na każdym etapie', description: 'Pomiar wymiarowy na maszynie współrzędnościowej. Raporty pomiarowe dołączane do każdego zlecenia.' },
    ],
    process: [
      'Otrzymujemy dokumentację CAD (STEP, IGES) i analizujemy geometrię elektrody',
      'Dobieramy optymalny gatunek grafitu i przygotowujemy wycenę (w ciągu 24h)',
      'Po akceptacji programujemy ścieżki narzędzia w systemie CAM',
      'Frezujemy elektrodę na centrum CNC z kontrolą wymiarową w trakcie obróbki',
      'Wykonujemy pomiar końcowy i przygotowujemy raport pomiarowy',
      'Pakujemy i wysyłamy — lub montujemy na uchwycie EROWA na życzenie',
    ],
    faq: [
      {
        question: 'Jak długo trwa realizacja zlecenia frezowania grafitu?',
        answer: 'Standardowy czas realizacji to 3-5 dni roboczych od akceptacji wyceny. Dla pilnych zleceń oferujemy tryb ekspresowy z realizacją w 24-48 godzin (po uzgodnieniu). Czas zależy od złożoności geometrii i ilości sztuk.',
      },
      {
        question: 'Czy mogę dostarczyć własny materiał do obróbki?',
        answer: 'Tak, obrabiamy grafit dostarczony przez klienta. Jednakże jako oficjalny dystrybutor SGL Carbon możemy zaoferować materiał w konkurencyjnej cenie — co upraszcza logistykę i gwarantuje certyfikowaną jakość grafitu.',
      },
      {
        question: 'Jakie formaty plików CAD przyjmujecie?',
        answer: 'Przyjmujemy pliki w formatach STEP (.stp/.step), IGES (.igs), Parasolid (.x_t), a także natywne formaty SolidWorks, NX i CATIA. Jeśli masz dokumentację 2D, możemy na jej podstawie stworzyć model 3D.',
      },
      {
        question: 'Czy montujecie elektrody na uchwytach EROWA?',
        answer: 'Tak, oferujemy montaż elektrod na uchwytach EROWA ITS 50 i ITS 72 jako część usługi. Elektroda jest gotowa do zamontowania w maszynie EDM od razu po otrzymaniu. Uchwyty EROWA dostępne w naszej ofercie.',
      },
    ],
    relatedProducts: ['r8710', 'r8650', 'r8500', 'r8510'],
    seoTitle: 'Frezowanie grafitu CNC - precyzyjna obróbka elektrod EDM | AK Technic Bydgoszcz',
    seoDescription: 'Profesjonalne frezowanie grafitu CNC - produkcja elektrod EDM z grafitu SGL Carbon. Obróbka 3/5-osiowa, tolerancje ±0,01mm. Wycena w 24h. Bydgoszcz.',
  },
  {
    id: 'frezowanie-metalu-cnc',
    name: 'Frezowanie metalu CNC',
    slug: 'frezowanie-metalu-cnc',
    shortDescription: 'Frezowanie CNC stali, aluminium i innych metali. Produkcja detali i narzędzi przemysłowych.',
    description: 'Realizujemy frezowanie metali na centrach obróbczych CNC. Obrabiamy stal narzędziową, stal nierdzewną, aluminium, miedź i inne metale. Specjalizujemy się w produkcji detali dla branży narzędziowej i form wtryskowych.',
    longDescription: `Oprócz specjalizacji w obróbce grafitu, AK Technic oferuje profesjonalne frezowanie CNC metali — stali narzędziowej, stali nierdzewnej, aluminium, miedzi i mosiądzu. Ta usługa jest naturalnym uzupełnieniem naszej oferty, pozwalającym klientom z branży narzędziowej i form wtryskowych realizować kompleksowe projekty u jednego dostawcy.

Nasz park maszynowy obejmuje centra obróbcze 3-osiowe zdolne do frezowania stali narzędziowej o twardości do 62 HRC. Specjalizujemy się w obróbce wykończeniowej gniazd form wtryskowych, produkcji wkładek formujących, suwaczek i elementów konstrukcyjnych form. Doświadczenie w branży narzędziowej pozwala nam rozumieć wymagania technologiczne i tolerancje specyficzne dla tego sektora.

Każde zlecenie traktujemy indywidualnie — od analizy dokumentacji, przez dobór strategii obróbki, po kontrolę jakości z raportem pomiarowym. Realizujemy zarówno produkcję jednostkową prototypów, jak i krótkie serie produkcyjne. Bliskość naszej narzędziowni grafitowej i metalowej pozwala na koordynację projektów wymagających obróbki obu materiałów — np. forma + elektrody w jednym zleceniu.`,
    capabilities: [
      'Frezowanie stali narzędziowej do 62 HRC (1.2343, 1.2344, 1.2379, 1.2083)',
      'Obróbka aluminium, miedzi, mosiądzu i stali nierdzewnej',
      'Tolerancje do ±0,02 mm',
      'Obróbka 3-osiowa na centrach CNC',
      'Produkcja jednostkowa i krótkie serie (do 50 szt.)',
      'Obróbka wykończeniowa gniazd form i wkładek formujących',
    ],
    advantages: [
      { title: 'Kompleksowa obsługa — grafit + metal', description: 'Forma i elektrody w jednym zleceniu. Jeden dostawca, jedna koordynacja, szybsza realizacja projektu.' },
      { title: 'Doświadczenie w branży narzędziowej', description: 'Znamy specyfikę form wtryskowych, matryc i narzędzi — rozumiemy wymagania tolerancyjne i jakościowe Twojej branży.' },
      { title: 'Obróbka materiałów o wysokiej twardości', description: 'Frezowanie stali do 62 HRC — obróbka wykończeniowa hartowanych elementów form bez konieczności erozji.' },
      { title: 'Krótkie terminy realizacji', description: 'Typowe zlecenia w 5-7 dni roboczych. Dla pilnych projektów — tryb ekspresowy po uzgodnieniu.' },
      { title: 'Raportowanie pomiarowe', description: 'Każdy detal z protokołem pomiarowym — dokumentacja jakościowa wymagana w branży motoryzacyjnej i medycznej.' },
    ],
    process: [
      'Analizujemy dokumentację techniczną i omawiamy wymagania z klientem',
      'Przygotowujemy wycenę uwzględniającą materiał, obróbkę i kontrolę jakości',
      'Zamawiamy materiał (lub przyjmujemy dostarczony przez klienta)',
      'Programujemy obróbkę CAM i frezujemy na centrum CNC',
      'Wykonujemy pomiar końcowy i przygotowujemy raport pomiarowy',
      'Pakujemy i wysyłamy gotowy detal kurierem lub transportem własnym',
    ],
    faq: [
      {
        question: 'Jakie stale narzędziowe obrabiajcie?',
        answer: 'Obrabiamy wszystkie popularne gatunki stali narzędziowych: 1.2343 (W.Nr. H11), 1.2344 (H13), 1.2379 (D2), 1.2083 (420), 1.2312, 1.2738 i inne. Frezujemy materiały o twardości do 62 HRC.',
      },
      {
        question: 'Czy mogę zlecić obróbkę formy i elektrod jednocześnie?',
        answer: 'Tak — to jedna z naszych kluczowych zalet. Koordynujemy obróbkę metalowych elementów formy i grafitowych elektrod EDM w ramach jednego projektu. Skraca to czas realizacji i eliminuje problemy z koordynacją między dostawcami.',
      },
      {
        question: 'Jakie są minimalne i maksymalne wymiary detali?',
        answer: 'Obrabiamy detale od kilku milimetrów do wymiarów 500×400×300 mm. Minimalna partia to 1 sztuka — realizujemy zarówno prototypy, jak i krótkie serie produkcyjne.',
      },
    ],
    relatedProducts: [],
    seoTitle: 'Frezowanie metalu CNC - obróbka stali narzędziowej, aluminium | AK Technic Bydgoszcz',
    seoDescription: 'Frezowanie CNC stali narzędziowej (do 62 HRC), aluminium i miedzi. Produkcja elementów form wtryskowych i narzędzi. Tolerancje ±0,02mm. Wycena w 24h.',
  },
  {
    id: 'toczenie-grafitu',
    name: 'Toczenie grafitu',
    slug: 'toczenie-grafitu',
    shortDescription: 'Toczenie CNC elementów grafitowych - tuleje, pierścienie, wałki i inne detale obrotowe.',
    description: 'Wykonujemy toczenie grafitu na tokarkach CNC. Produkujemy elementy obrotowe z grafitu: tuleje, pierścienie, wałki, uchwyty elektrod i inne detale. Doświadczenie w obróbce grafitu gwarantuje optymalną jakość powierzchni i dokładność wymiarową.',
    longDescription: `Toczenie grafitu CNC to specjalistyczna usługa wymagająca dedykowanego sprzętu i doświadczenia — grafit podczas toczenia generuje drobny pył, który bez odpowiedniego odciągu może uszkodzić prowadnice i łożyska maszyny. W AK Technic dysponujemy tokarkami CNC przystosowanymi do obróbki grafitu, wyposażonymi w profesjonalne systemy odciągu pyłu grafitowego.

Produkujemy szeroką gamę elementów obrotowych z grafitu: tuleje grafitowe (łożyskowe, uszczelniające, ślizgowe), pierścienie, wałki, dysze, elementy pomp i inne detale o geometrii obrotowej. Nasze tokarki CNC pozwalają na obróbkę grafitu o średnicach do 200 mm i długościach do 500 mm, z tolerancjami do ±0,02 mm.

Obrabiamy wszystkie gatunki grafitu dostępne w naszej ofercie — od ultradrobnoziarnistego R8710 po ekonomiczny R8500. Dla klientów potrzebujących elementów grafitowych do zastosowań przemysłowych (łożyska, uszczelnienia, elementy pieców) dobieramy gatunek grafitu optymalny pod kątem warunków pracy: temperatury, obciążeń i środowiska chemicznego.`,
    capabilities: [
      'Toczenie CNC grafitu wszystkich gatunków SGL Carbon',
      'Tolerancje do ±0,02 mm',
      'Średnice do 200 mm, długości do 500 mm',
      'Gwintowanie zewnętrzne i wewnętrzne w graficie',
      'Rowkowanie, wytaczanie i obróbka stożków',
      'Produkcja seryjna (do 500 szt.) i jednostkowa',
    ],
    advantages: [
      { title: 'Specjalistyczny sprzęt do obróbki grafitu', description: 'Tokarki CNC z profesjonalnym odciągiem pyłu grafitowego — ochrona maszyny i czyste środowisko pracy.' },
      { title: 'Czyste środowisko pracy z odciągiem pyłu', description: 'System filtracji klasy H13 wychwytuje 99,95% pyłu grafitowego — detale wolne od zanieczyszczeń.' },
      { title: 'Kontrola jakości wymiarowej', description: 'Pomiar na maszynie współrzędnościowej z raportem pomiarowym — pełna dokumentacja jakościowa.' },
      { title: 'Szybka realizacja zamówień', description: 'Standardowe elementy obrotowe w 3-5 dni roboczych. Serie do 500 sztuk w uzgodnionym terminie.' },
    ],
    process: [
      'Otrzymujemy rysunek techniczny lub model 3D elementu obrotowego',
      'Analizujemy geometrię i dobieramy gatunek grafitu (lub przyjmujemy materiał klienta)',
      'Przygotowujemy wycenę i uzgadniamy termin realizacji',
      'Programujemy i realizujemy toczenie CNC z kontrolą wymiarową',
      'Wykonujemy pomiar końcowy i dokumentację jakościową',
      'Pakujemy i wysyłamy gotowe detale',
    ],
    faq: [
      {
        question: 'Jakie elementy grafitowe produkujecie na tokarkach?',
        answer: 'Toczymy tuleje grafitowe (łożyskowe, uszczelniające, ślizgowe), pierścienie, wałki, dysze, elementy pomp, uchwyty elektrod i inne detale o geometrii obrotowej. Realizujemy zarówno produkcję jednostkową, jak i serie do 500 sztuk.',
      },
      {
        question: 'Czy możecie wykonać gwint w graficie?',
        answer: 'Tak, wykonujemy gwintowanie zewnętrzne i wewnętrzne w graficie na tokarkach CNC. Realizujemy gwinty metryczne, calowe i specjalne. Skontaktuj się z nami, przesyłając rysunek techniczny z parametrami gwintu.',
      },
      {
        question: 'Jaki gatunek grafitu jest najlepszy do tulei łożyskowych?',
        answer: 'Do tulei łożyskowych zalecamy grafity o wyższej gęstości i wytrzymałości — R8650 lub R8710 w zależności od obciążeń i temperatury pracy. Dobieramy gatunek indywidualnie do warunków eksploatacji — skontaktuj się z nami po rekomendację.',
      },
    ],
    relatedProducts: ['r8500', 'r8510'],
    seoTitle: 'Toczenie grafitu CNC - tuleje, pierścienie, wałki grafitowe | AK Technic Bydgoszcz',
    seoDescription: 'Profesjonalne toczenie grafitu CNC - produkcja tulei, pierścieni i wałków grafitowych. Średnice do 200mm, tolerancje ±0,02mm. Wszystkie gatunki SGL Carbon.',
  },
  {
    id: 'elektrody-edm-cnc',
    name: 'Elektrody EDM CNC',
    slug: 'elektrody-edm-cnc',
    shortDescription: 'Produkcja elektrod grafitowych EDM na maszynach CNC. Od projektu po gotową elektrodę.',
    description: 'Kompleksowa usługa produkcji elektrod EDM z grafitu. Od analizy dokumentacji, przez dobór odpowiedniego gatunku grafitu, projektowanie CAM, po gotową elektrodę z kontrolą jakości. Wieloletnie doświadczenie w produkcji elektrod dla branży form wtryskowych.',
    longDescription: `Produkcja elektrod EDM to nasza flagowa usługa — łączymy w niej wiedzę o materiałach (jako dystrybutor SGL Carbon), doświadczenie w obróbce CNC grafitu oraz znajomość procesu elektroerozji. Dzięki temu możemy doradzić nie tylko w doborze gatunku grafitu, ale również w optymalizacji geometrii elektrody pod kątem procesu EDM — co przekłada się na lepsze wyniki erozji i niższe koszty produkcji.

Oferujemy pełną obsługę od A do Z: klient przesyła nam dokumentację formy lub gniazda (model 3D), a my analizujemy geometrię, proponujemy strategię erozji (ile elektrod, jakie naddatki, jaki gatunek grafitu), programujemy obróbkę CAM i produkujemy gotowe elektrody z pełną kontrolą jakości. Na życzenie montujemy elektrody na uchwytach EROWA — gotowe do zamontowania w maszynie EDM.

W przypadku klientów realizujących regularne zlecenia oferujemy stałą współpracę z dedykowanym opiekunem technicznym, który zna specyfikę ich produkcji i może szybko reagować na pilne zapotrzebowania. Wielu naszych stałych klientów korzysta z modelu „just-in-time" — zamawiają elektrody z wyprzedzeniem 5-7 dni i otrzymują je dokładnie wtedy, kiedy są potrzebne na maszynie EDM.`,
    capabilities: [
      'Produkcja elektrod z wszystkich gatunków SGL Carbon (R8710, R8650, R8510, R8500)',
      'Obróbka 3- i 5-osiowa dla złożonych geometrii elektrod',
      'Montaż na uchwytach EROWA ITS 50, ITS 72 i MTS',
      'Pomiar na maszynie współrzędnościowej CMM',
      'Raporty pomiarowe dla każdej elektrody',
      'Profesjonalne pakowanie i zabezpieczenie transportowe',
    ],
    advantages: [
      { title: 'Kompleksowa obsługa od A do Z', description: 'Od analizy dokumentacji formy, przez dobór grafitu i strategię erozji, po gotową elektrodę na uchwycie EROWA. Jeden dostawca na cały proces.' },
      { title: 'Oficjalny dystrybutor grafitu SGL Carbon', description: 'Bezpośredni dostęp do wszystkich gatunków grafitu — natychmiastowa dostępność materiału bez czekania na dostawy.' },
      { title: 'Dobór optymalnego gatunku grafitu', description: 'Doradzamy, który grafit (R8710/R8650/R8510/R8500) da najlepsze wyniki przy Twoim konkretnym zastosowaniu EDM.' },
      { title: 'Doradztwo techniczne EDM', description: 'Pomagamy w optymalizacji geometrii elektrody, doborze naddatków i strategii erozji — nasze doświadczenie to Twoja oszczędność.' },
      { title: 'Gwarancja jakości z dokumentacją', description: 'Każda elektroda z raportem pomiarowym CMM. Tolerancje potwierdzone pomiarami — pewność, że elektroda spełni wymagania.' },
    ],
    process: [
      'Otrzymujemy model 3D formy/gniazda i analizujemy geometrię pod kątem EDM',
      'Proponujemy strategię erozji: ilość elektrod, naddatki, gatunek grafitu, szacunkowy czas erozji',
      'Po akceptacji wyceny dobieramy materiał z magazynu i programujemy obróbkę CAM',
      'Produkujemy elektrody na centrum CNC 3/5-osiowym z kontrolą w procesie',
      'Pomiar końcowy CMM + raport pomiarowy + opcjonalny montaż na uchwycie EROWA',
      'Pakowanie ochronne i wysyłka (lub odbiór osobisty w Bydgoszczy)',
    ],
    faq: [
      {
        question: 'Ile kosztuje produkcja elektrody EDM na zamówienie?',
        answer: 'Cena zależy od: złożoności geometrii, gatunku grafitu, ilości sztuk i tolerancji. Prosty kształt z R8500 to inna cena niż precyzyjna elektroda z R8710 na uchwycie EROWA. Prześlij nam model 3D — przygotujemy szczegółową wycenę w ciągu 24 godzin.',
      },
      {
        question: 'Czy produkujecie elektrody z miedzi?',
        answer: 'Specjalizujemy się w elektrodach grafitowych, ale realizujemy również elektrody z miedzi elektrolitycznej (Cu-ETP). Grafit jest jednak naszą główną rekomendacją ze względu na łatwość obróbki, mniejszą masę i lepszą jakość powierzchni w większości zastosowań EDM.',
      },
      {
        question: 'Jaki jest minimalny rozmiar zamówienia?',
        answer: 'Realizujemy zamówienia od 1 sztuki — nie ma minimalnego progu. Oczywiście przy większych seriach (10+ szt.) cena jednostkowa jest niższa. Skontaktuj się z nami — przygotujemy wycenę dopasowaną do Twojego zapotrzebowania.',
      },
      {
        question: 'Jak wygląda współpraca przy stałych zleceniach?',
        answer: 'Dla stałych klientów oferujemy dedykowanego opiekuna technicznego, priorytetowe terminy realizacji i model „just-in-time". Znamy specyfikę Twojej produkcji i możemy szybko reagować na pilne zapotrzebowania. Skontaktuj się, aby omówić warunki stałej współpracy.',
      },
    ],
    relatedProducts: ['r8710', 'r8650', 'r8510'],
    seoTitle: 'Elektrody EDM CNC - produkcja elektrod grafitowych na zamówienie | AK Technic',
    seoDescription: 'Produkcja elektrod EDM z grafitu SGL Carbon na zamówienie. Kompleksowa usługa od projektu po gotową elektrodę na uchwycie EROWA. Wycena w 24h. Bydgoszcz.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
