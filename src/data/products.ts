export interface ProductSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Advantage {
  title: string;
  description: string;
}

export interface GraphiteProduct {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  applications: string[];
  advantages: Advantage[];
  specs: ProductSpec[];
  faq: FAQ[];
  seoTitle: string;
  seoDescription: string;
}

export const graphiteProducts: GraphiteProduct[] = [
  {
    id: 'r8710',
    name: 'R8710',
    slug: 'r8710',
    shortDescription: 'Grafit drobnoziarnisty o najwyższej jakości powierzchni. Idealny do precyzyjnych elektrod EDM.',
    description: 'R8710 to grafit izotropowy o ultradrobnym ziarnie od SGL Carbon, zaprojektowany do najbardziej wymagających zastosowań EDM. Zapewnia wyjątkową jakość powierzchni i najwyższą precyzję obróbki elektroerozyjnej. Idealny do produkcji skomplikowanych elektrod o małych promieniach i cienkich żebrach.',
    longDescription: `Grafit EDM R8710 od SGL Carbon to flagowy gatunek z linii grafitów izotropowych, przeznaczony do zastosowań wymagających najwyższej precyzji obróbki elektroerozyjnej. Dzięki ultradrobnej strukturze ziarna o wielkości zaledwie 5 μm, R8710 umożliwia produkcję elektrod o wyjątkowo gładkiej powierzchni — co bezpośrednio przekłada się na jakość obrabianych form wtryskowych i matryc.

W praktyce oznacza to, że elektrody wykonane z R8710 pozwalają osiągnąć chropowatość powierzchni VDI 12-16 bez dodatkowej obróbki wykończeniowej. To kluczowa zaleta w branżach, gdzie liczy się każdy mikrometr — takich jak produkcja form do elementów medycznych, konektorów elektronicznych czy precyzyjnych obudów optycznych. Wysoka gęstość 1,83 g/cm³ minimalizuje porowatość materiału, co redukuje zużycie elektrody nawet o 30% w porównaniu z gatunkami o większym ziarnie.

R8710 sprawdza się szczególnie tam, gdzie wymagane są elektrody o złożonej geometrii z cienkimi żebrami (poniżej 0,3 mm) i małymi promieniami wewnętrznymi. Izotropowe właściwości gwarantują jednakową jakość obróbki niezależnie od kierunku skrawania, co eliminuje ryzyko pęknięć i nierównomiernego zużycia. Jako oficjalny dystrybutor SGL Carbon na Polskę, zapewniamy pełną dostępność tego gatunku — od standardowych bloków po niestandardowe wymiary na zamówienie.`,
    applications: [
      'Precyzyjne elektrody EDM do form wtryskowych o złożonej geometrii',
      'Formy do produkcji elementów medycznych (implanty, obudowy urządzeń)',
      'Elektrody do konektorów elektronicznych i mikrokomponentów',
      'Matryce do branży optycznej wymagające chropowatości VDI 12-16',
      'Obróbka elektroerozyjna z tolerancjami poniżej ±0,005 mm',
      'Elektrody o cienkich żebrach (< 0,3 mm) i małych promieniach',
    ],
    advantages: [
      { title: 'Ultradrobna struktura ziarna (5 μm)', description: 'Najdrobniejsze ziarno w ofercie SGL Carbon zapewnia idealnie gładką powierzchnię elektrody i najwyższą precyzję odwzorowania geometrii formy.' },
      { title: 'Doskonała jakość powierzchni', description: 'Osiągalna chropowatość VDI 12-16 bez dodatkowej obróbki wykończeniowej — oszczędność czasu i kosztów produkcji.' },
      { title: 'Wysoka wytrzymałość mechaniczna (70 MPa)', description: 'Wytrzymałość na zginanie 70 MPa pozwala na wykonanie cienkich żeber i delikatnych detali bez ryzyka złamania.' },
      { title: 'Niskie zużycie elektrody', description: 'Wysoka gęstość 1,83 g/cm³ i niska porowatość redukują zużycie elektrody nawet o 30% w porównaniu z gatunkami średnioziarnistymi.' },
      { title: 'Izotropowe właściwości', description: 'Jednakowe parametry we wszystkich kierunkach — brak preferowanego kierunku obróbki, eliminacja ryzyka pęknięć.' },
    ],
    specs: [
      { label: 'Wielkość ziarna', value: '5', unit: 'μm' },
      { label: 'Gęstość', value: '1.83', unit: 'g/cm³' },
      { label: 'Wytrzymałość na zginanie', value: '70', unit: 'MPa' },
      { label: 'Wytrzymałość na ściskanie', value: '140', unit: 'MPa' },
      { label: 'Twardość Shore', value: '62', unit: '' },
      { label: 'Rezystywność', value: '14', unit: 'μΩm' },
      { label: 'CTE (20-200°C)', value: '4.2', unit: '10⁻⁶/K' },
    ],
    faq: [
      {
        question: 'Dla jakich zastosowań najlepiej nadaje się grafit R8710?',
        answer: 'R8710 jest optymalnym wyborem wszędzie tam, gdzie wymagana jest najwyższa precyzja i jakość powierzchni — formy wtryskowe do elementów medycznych, konektory elektroniczne, elementy optyczne. Sprawdza się przy elektrodach o złożonej geometrii z cienkimi żebrami poniżej 0,3 mm.',
      },
      {
        question: 'Jaka jest różnica między R8710 a R8650?',
        answer: 'R8710 ma mniejsze ziarno (5 μm vs 8 μm), wyższą gęstość (1,83 vs 1,80 g/cm³) i wytrzymałość (70 vs 55 MPa na zginanie). Daje lepszą jakość powierzchni (VDI 12-16 vs VDI 18-22), ale jest droższy. R8650 to lepszy wybór, gdy najwyższa precyzja nie jest krytyczna.',
      },
      {
        question: 'W jakich wymiarach dostępny jest R8710?',
        answer: 'Oferujemy R8710 w standardowych blokach od 25×25 mm do 610×410 mm, o grubościach od 15 do 200 mm. Dostępne są również niestandardowe wymiary na zamówienie. Skontaktuj się z nami, aby sprawdzić aktualną dostępność konkretnych wymiarów.',
      },
      {
        question: 'Jak szybko mogę otrzymać dostawę grafitu R8710?',
        answer: 'Standardowe wymiary wysyłamy w ciągu 1-2 dni roboczych z naszego magazynu w Polsce. Wymiary niestandardowe realizujemy w ciągu 5-10 dni roboczych. Oferujemy dostawę na terenie całej Polski — skontaktuj się z nami po szczegóły.',
      },
    ],
    seoTitle: 'Grafit EDM R8710 - SGL Carbon | Precyzyjne elektrody | AK Technic',
    seoDescription: 'Grafit EDM R8710 od SGL Carbon - ultradrobnoziarnisty grafit izotropowy (5μm) do precyzyjnych elektrod EDM. Oficjalny dystrybutor w Polsce. Bezpłatna wycena.',
  },
  {
    id: 'r8650',
    name: 'R8650',
    slug: 'r8650',
    shortDescription: 'Grafit drobnoziarnisty o doskonałym stosunku jakości do ceny. Uniwersalny gatunek do szerokiego zakresu zastosowań.',
    description: 'R8650 to wszechstronny grafit drobnoziarnisty od SGL Carbon, oferujący znakomity balans między jakością powierzchni, wytrzymałością i ceną. Doskonały wybór do produkcji elektrod EDM w szerokim zakresie zastosowań przemysłowych.',
    longDescription: `Grafit EDM R8650 od SGL Carbon to najpopularniejszy gatunek w naszej ofercie i najczęściej wybierany materiał elektrodowy przez polskie narzędziownie i zakłady produkcyjne. Jego popularność wynika z doskonałego stosunku jakości do ceny — R8650 oferuje drobnoziarnistą strukturę (8 μm), która zapewnia bardzo dobrą jakość powierzchni przy znacznie niższym koszcie niż gatunek premium R8710.

W codziennej praktyce produkcyjnej R8650 sprawdza się w zdecydowanej większości zastosowań EDM. Elektrody z tego gatunku osiągają chropowatość powierzchni VDI 18-22, co jest w pełni wystarczające dla form wtryskowych w branży motoryzacyjnej, AGD czy przemysłu opakowaniowego. Jednorodna struktura materiału zapewnia przewidywalne zachowanie podczas obróbki CNC i stabilne parametry erozji — co przekłada się na powtarzalność produkcji elektrod w seriach.

R8650 jest szczególnie ceniony przez technologów za łatwość obróbki na frezarkach CNC. Materiał ten dobrze współpracuje zarówno z frezami z węglików spiekanych, jak i frezami diamentowymi PCD. Gęstość 1,80 g/cm³ zapewnia niskie zużycie elektrody, a wytrzymałość na zginanie 55 MPa pozwala na realizację większości geometrii elektrod spotykanych w produkcji form. Jeśli szukasz niezawodnego, ekonomicznego grafitu do codziennej produkcji elektrod EDM — R8650 to sprawdzony wybór.`,
    applications: [
      'Uniwersalne elektrody EDM do form wtryskowych',
      'Formy dla przemysłu motoryzacyjnego (obudowy, elementy wnętrza)',
      'Elektrody do obróbki stali narzędziowych (1.2343, 1.2344, 1.2379)',
      'Formy do produkcji elementów AGD i artykułów gospodarstwa domowego',
      'Produkcja seryjna elektrod o powtarzalnych parametrach',
      'Elektrody do matryc tłocznych i narzędzi kuźniczych',
    ],
    advantages: [
      { title: 'Doskonały stosunek jakości do ceny', description: 'Najczęściej wybierany gatunek w Polsce — oferuje drobnoziarnistą strukturę w przystępnej cenie, redukując koszty produkcji elektrod.' },
      { title: 'Bardzo dobra jakość powierzchni (VDI 18-22)', description: 'Ziarno 8 μm zapewnia jakość powierzchni wystarczającą dla zdecydowanej większości form wtryskowych i matryc.' },
      { title: 'Wysoka jednorodność materiału', description: 'Izotropowa struktura gwarantuje powtarzalne właściwości w każdym bloku — kluczowe przy produkcji seryjnej elektrod.' },
      { title: 'Łatwa obróbka CNC', description: 'Doskonale współpracuje z frezami VHM i PCD. Pozwala na wysokie prędkości skrawania bez ryzyka wykruszeń.' },
      { title: 'Szeroki zakres zastosowań', description: 'Od form motoryzacyjnych po matryce tłoczne — R8650 sprawdza się w 80% typowych zastosowań EDM w przemyśle.' },
    ],
    specs: [
      { label: 'Wielkość ziarna', value: '8', unit: 'μm' },
      { label: 'Gęstość', value: '1.80', unit: 'g/cm³' },
      { label: 'Wytrzymałość na zginanie', value: '55', unit: 'MPa' },
      { label: 'Wytrzymałość na ściskanie', value: '115', unit: 'MPa' },
      { label: 'Twardość Shore', value: '55', unit: '' },
      { label: 'Rezystywność', value: '15', unit: 'μΩm' },
      { label: 'CTE (20-200°C)', value: '4.5', unit: '10⁻⁶/K' },
    ],
    faq: [
      {
        question: 'Czy R8650 nadaje się do precyzyjnych form wtryskowych?',
        answer: 'Tak, R8650 z ziarnem 8 μm zapewnia jakość powierzchni VDI 18-22, co jest wystarczające dla większości form wtryskowych w branży motoryzacyjnej, AGD i opakowaniowej. Dla zastosowań wymagających wyższej precyzji (medycyna, elektronika) zalecamy R8710.',
      },
      {
        question: 'Jaki jest stosunek ceny R8650 do R8710?',
        answer: 'R8650 jest znacząco tańszy od R8710 — dokładne ceny zależą od wymiarów bloku i zamawianej ilości. Skontaktuj się z nami, aby otrzymać indywidualną wycenę dostosowaną do Twojego zapotrzebowania.',
      },
      {
        question: 'Jakie frezy są zalecane do obróbki R8650?',
        answer: 'Do obróbki R8650 zalecamy frezy z węglików spiekanych (VHM) z powłoką diamentową lub frezy PCD. Dla obróbki zgrubnej sprawdzają się frezy VHM bez powłoki. Dobieramy parametry skrawania indywidualnie — skontaktuj się z nami po rekomendacje.',
      },
    ],
    seoTitle: 'Grafit EDM R8650 - SGL Carbon | Uniwersalny grafit | AK Technic',
    seoDescription: 'Grafit EDM R8650 od SGL Carbon - najpopularniejszy drobnoziarnisty grafit (8μm) o doskonałym stosunku jakości do ceny. Oficjalny dystrybutor w Polsce.',
  },
  {
    id: 'r8500',
    name: 'R8500',
    slug: 'r8500',
    shortDescription: 'Grafit średnioziarnisty o dużej wytrzymałości. Ekonomiczne rozwiązanie do elektrod o większych wymiarach.',
    description: 'R8500 to wytrzymały grafit średnioziarnisty od SGL Carbon, przeznaczony do produkcji większych elektrod EDM i zastosowań wymagających dużej wytrzymałości mechanicznej. Ekonomiczne rozwiązanie dla obróbki zgrubnej i średnio-dokładnej.',
    longDescription: `Grafit EDM R8500 od SGL Carbon to ekonomiczny gatunek średnioziarnisty, zaprojektowany z myślą o zastosowaniach, gdzie priorytetem jest wytrzymałość mechaniczna i konkurencyjna cena materiału. Ziarno o wielkości 15 μm zapewnia solidną strukturę, która wytrzymuje duże obciążenia podczas obróbki elektroerozyjnej — co czyni R8500 idealnym materiałem do produkcji dużych elektrod i obróbki zgrubnej.

W praktyce produkcyjnej R8500 jest pierwszym wyborem do elektrod o wymiarach powyżej 200 mm, gdzie masa elektrody i obciążenia mechaniczne są znaczące. Materiał ten doskonale sprawdza się w obróbce zgrubnej form o dużych wymiarach — np. zderzaków samochodowych, obudów urządzeń AGD czy elementów mebli ogrodowych. Wytrzymałość na ściskanie 100 MPa pozwala na intensywne cykle erozyjne bez ryzyka uszkodzenia elektrody.

Dodatkową zaletą R8500 jest szeroka dostępność wymiarów — oferujemy ten gatunek w blokach do 1500 mm długości, co pozwala na obróbkę nawet bardzo dużych form. Niższa cena w porównaniu z gatunkami drobnoziarnistymi czyni R8500 optymalnym wyborem przy produkcji seryjnej, gdzie koszty materiałowe mają bezpośredni wpływ na rentowność projektu. Wielu naszych klientów stosuje strategię dwuetapową: obróbka zgrubna elektrodą z R8500, a następnie wykończenie elektrodą z R8650 lub R8710.`,
    applications: [
      'Duże elektrody EDM do form o wymiarach powyżej 200 mm',
      'Obróbka zgrubna form wtryskowych (zderzaki, obudowy, panele)',
      'Produkcja seryjna elektrod przy optymalizacji kosztów',
      'Formy do elementów AGD i mebli (duże gniazda)',
      'Elektrody do matryc kuźniczych i narzędzi do obróbki plastycznej',
      'Zastosowania wymagające dużej odporności na obciążenia mechaniczne',
    ],
    advantages: [
      { title: 'Wysoka wytrzymałość mechaniczna', description: 'Wytrzymałość na ściskanie 100 MPa i na zginanie 45 MPa — idealne do dużych elektrod narażonych na duże obciążenia podczas erozji.' },
      { title: 'Ekonomiczna cena', description: 'Najniższy koszt za kilogram w ofercie SGL Carbon. Optymalizacja budżetu przy produkcji seryjnej i obróbce zgrubnej.' },
      { title: 'Duża dostępność wymiarów', description: 'Bloki do 1500 mm długości — możliwość realizacji nawet największych elektrod bez łączenia materiału.' },
      { title: 'Dobre właściwości obróbcze', description: 'Mimo średniego ziarna, R8500 obrabia się równomiernie i przewidywalnie na maszynach CNC.' },
      { title: 'Sprawdzony w produkcji seryjnej', description: 'Tysiące elektrod wyprodukowanych z R8500 przez polskie narzędziownie potwierdzają niezawodność tego gatunku.' },
    ],
    specs: [
      { label: 'Wielkość ziarna', value: '15', unit: 'μm' },
      { label: 'Gęstość', value: '1.78', unit: 'g/cm³' },
      { label: 'Wytrzymałość na zginanie', value: '45', unit: 'MPa' },
      { label: 'Wytrzymałość na ściskanie', value: '100', unit: 'MPa' },
      { label: 'Twardość Shore', value: '48', unit: '' },
      { label: 'Rezystywność', value: '16', unit: 'μΩm' },
      { label: 'CTE (20-200°C)', value: '4.8', unit: '10⁻⁶/K' },
    ],
    faq: [
      {
        question: 'Czy R8500 nadaje się do obróbki wykończeniowej?',
        answer: 'R8500 z ziarnem 15 μm najlepiej sprawdza się w obróbce zgrubnej i średnio-dokładnej. Do wykończenia zalecamy zastosowanie drugiej elektrody z gatunku R8650 lub R8710. Strategia dwuetapowa pozwala zoptymalizować koszty przy zachowaniu wysokiej jakości końcowej.',
      },
      {
        question: 'Jakie są maksymalne wymiary bloków R8500?',
        answer: 'R8500 oferujemy w blokach do 1500 mm długości i przekrojach do 610×410 mm. Niestandardowe wymiary realizujemy na zamówienie. Skontaktuj się z nami, aby omówić Twoje wymagania wymiarowe.',
      },
      {
        question: 'Ile kosztuje grafit R8500?',
        answer: 'Cena R8500 zależy od wymiarów bloku i zamawianej ilości. Jako oficjalny dystrybutor SGL Carbon oferujemy konkurencyjne ceny hurtowe. Wyślij zapytanie z wymiarami i ilością — przygotujemy indywidualną ofertę w ciągu 24 godzin.',
      },
    ],
    seoTitle: 'Grafit EDM R8500 - SGL Carbon | Wytrzymały i ekonomiczny | AK Technic',
    seoDescription: 'Grafit EDM R8500 od SGL Carbon - średnioziarnisty grafit (15μm) o dużej wytrzymałości do dużych elektrod EDM. Ekonomiczny. Oficjalny dystrybutor w Polsce.',
  },
  {
    id: 'r8510',
    name: 'R8510',
    slug: 'r8510',
    shortDescription: 'Grafit drobno-średnioziarnisty o zrównoważonych właściwościach. Pomiędzy R8650 a R8500.',
    description: 'R8510 to grafit od SGL Carbon łączący cechy gatunków drobno- i średnioziarnistych. Oferuje dobrą jakość powierzchni przy zachowaniu wyższej wytrzymałości mechanicznej. Idealny kompromis dla zastosowań wymagających zarówno precyzji, jak i trwałości.',
    longDescription: `Grafit EDM R8510 od SGL Carbon zajmuje unikalne miejsce w portfolio gatunków — łączy w sobie cechy grafitów drobnoziarnistych (dobra jakość powierzchni) i średnioziarnistych (wysoka wytrzymałość). Z ziarnem 10 μm plasuje się dokładnie pomiędzy R8650 (8 μm) a R8500 (15 μm), oferując zrównoważony kompromis dla zastosowań, gdzie oba parametry mają znaczenie.

R8510 jest szczególnie ceniony w produkcji form do branży opakowaniowej, gdzie elektrody muszą jednocześnie odwzorowywać drobne detale (tekstury, napisy, logo) i wytrzymywać wielokrotne cykle erozyjne. Gęstość 1,79 g/cm³ zapewnia niskie zużycie, a wytrzymałość na zginanie 50 MPa pozwala na realizację żeber i geometrii, które byłyby ryzykowne przy użyciu R8500.

W porównaniu z R8650, R8510 oferuje lepszą wytrzymałość przy nieznacznie niższej jakości powierzchni — co czyni go idealnym wyborem dla narzędziowni, które potrzebują jednego uniwersalnego gatunku do większości swoich zleceń. R8510 doskonale sprawdza się również w obróbce narzędzi kuźniczych i matryc do tłoczenia, gdzie konieczne jest połączenie precyzji z odpornością na obciążenia. Konkurencyjna cena czyni ten gatunek atrakcyjną alternatywą dla droższego R8650 w zastosowaniach, gdzie różnica jakości powierzchni VDI 20-24 vs VDI 18-22 nie jest krytyczna.`,
    applications: [
      'Elektrody EDM o średniej precyzji z wymaganiem wysokiej wytrzymałości',
      'Formy do opakowań z teksturami, napisami i logo',
      'Narzędzia kuźnicze i matryce do tłoczenia blach',
      'Elektrody o złożonej geometrii wymagające odporności na pękanie',
      'Formy do elementów technicznych z tworzyw sztucznych',
      'Produkcja elektrod w strategii jednego gatunku dla narzędziowni',
    ],
    advantages: [
      { title: 'Balans między precyzją a wytrzymałością', description: 'Ziarno 10 μm i wytrzymałość 50 MPa — optymalny kompromis, gdy potrzebujesz zarówno dobrej powierzchni, jak i odporności elektrody.' },
      { title: 'Dobra jakość powierzchni (VDI 20-24)', description: 'Wystarczająca do większości form opakowaniowych, AGD i technicznych, gdzie najwyższa precyzja nie jest wymagana.' },
      { title: 'Niższe zużycie niż gatunki gruboziarniste', description: 'Gęstość 1,79 g/cm³ zapewnia mniejszą porowatość niż R8500, co przekłada się na niższe zużycie elektrody o ok. 15%.' },
      { title: 'Wszechstronność zastosowań', description: 'Jeden gatunek na większość zleceń — od form opakowaniowych po narzędzia kuźnicze. Uproszczenie logistyki magazynowej.' },
      { title: 'Konkurencyjna cena', description: 'Tańszy od R8650 przy zachowaniu drobnoziarnistych właściwości — optymalizacja kosztów bez znaczącej utraty jakości.' },
    ],
    specs: [
      { label: 'Wielkość ziarna', value: '10', unit: 'μm' },
      { label: 'Gęstość', value: '1.79', unit: 'g/cm³' },
      { label: 'Wytrzymałość na zginanie', value: '50', unit: 'MPa' },
      { label: 'Wytrzymałość na ściskanie', value: '110', unit: 'MPa' },
      { label: 'Twardość Shore', value: '52', unit: '' },
      { label: 'Rezystywność', value: '15', unit: 'μΩm' },
      { label: 'CTE (20-200°C)', value: '4.6', unit: '10⁻⁶/K' },
    ],
    faq: [
      {
        question: 'Kiedy wybrać R8510 zamiast R8650?',
        answer: 'R8510 to lepszy wybór, gdy potrzebujesz wyższej wytrzymałości (50 vs 55 MPa, ale korzystniejsza cena) przy akceptowalnej jakości powierzchni. Idealny do form opakowaniowych, narzędzi kuźniczych i zastosowań, gdzie VDI 20-24 jest wystarczające.',
      },
      {
        question: 'Czy R8510 nadaje się do cienkich żeber elektrod?',
        answer: 'Tak, wytrzymałość na zginanie 50 MPa pozwala na realizację żeber o grubości ok. 0,5 mm. Dla cieńszych żeber (poniżej 0,3 mm) zalecamy R8710 z wytrzymałością 70 MPa.',
      },
      {
        question: 'Jak R8510 wypada w porównaniu z grafitami innych producentów?',
        answer: 'R8510 od SGL Carbon odpowiada klasie izotropowego grafitu drobno-średnioziarnistego. Wyróżnia go wysoka jednorodność i powtarzalność parametrów partia-do-partii, co jest cechą charakterystyczną grafitów SGL Carbon. Skontaktuj się z nami — pomożemy porównać z grafitem, którego obecnie używasz.',
      },
    ],
    seoTitle: 'Grafit EDM R8510 - SGL Carbon | Zrównoważony grafit | AK Technic',
    seoDescription: 'Grafit EDM R8510 od SGL Carbon - grafit drobno-średnioziarnisty (10μm) łączący precyzję z wytrzymałością. Oficjalny dystrybutor w Polsce. Bezpłatna wycena.',
  },
];

export interface ConsumableCategory {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
}

export const consumableCategories: ConsumableCategory[] = [
  {
    id: 'drut',
    name: 'Drut EDM',
    slug: 'drut',
    shortDescription: 'Drut molibdenowy i mosiężny do wycinania elektroerozyjnego (WEDM). Różne średnice i gatunki.',
    seoTitle: 'Drut EDM - drut molibdenowy i mosiężny do WEDM | AK Technic',
    seoDescription: 'Drut do wycinania elektroerozyjnego (WEDM) - drut molibdenowy, mosiężny i powlekany. Średnice 0,10-0,30mm. Kompatybilny z Sodick, Mitsubishi, Fanuc. Dostawa w całej Polsce.',
  },
  {
    id: 'filtry',
    name: 'Filtry',
    slug: 'filtry',
    shortDescription: 'Filtry do maszyn EDM - filtry dielektryka, filtry powietrza i filtry workowe. Kompatybilne z popularnymi markami.',
    seoTitle: 'Filtry do maszyn EDM - filtry dielektryka i powietrza | AK Technic',
    seoDescription: 'Filtry do maszyn elektroerozyjnych - filtry dielektryka, powietrza i workowe. Kompatybilne z Sodick, Mitsubishi, Fanuc, AgieCharmilles. Szybka dostawa w Polsce.',
  },
  {
    id: 'elektrody',
    name: 'Elektrody',
    slug: 'elektrody',
    shortDescription: 'Elektrody miedziane i grafitowe do obróbki elektroerozyjnej. Standardowe kształty i wymiary na zamówienie.',
    seoTitle: 'Elektrody EDM - miedziane i grafitowe | Produkcja na zamówienie | AK Technic',
    seoDescription: 'Elektrody do obróbki elektroerozyjnej EDM - miedziane, grafitowe i wolframowo-miedziane. Standardowe wymiary i produkcja CNC na zamówienie. Oficjalny dystrybutor SGL Carbon.',
  },
  {
    id: 'frezy',
    name: 'Frezy',
    slug: 'frezy',
    shortDescription: 'Frezy do grafitu i metalu - frezy diamentowe, węglikowe i HSS. Optymalne parametry skrawania.',
    seoTitle: 'Frezy do grafitu i metalu - diamentowe PCD, węglikowe VHM | AK Technic',
    seoDescription: 'Frezy do obróbki grafitu i metalu - diamentowe PCD, z węglików spiekanych VHM i HSS. Dobór frezów do materiału. Doradztwo techniczne i szybka dostawa.',
  },
];

export function getProductBySlug(slug: string): GraphiteProduct | undefined {
  return graphiteProducts.find(p => p.slug === slug);
}
