# CGI Suvepraktika 2026 – Restorani Laua Broneerimise Rakendus

**Osaline lahendus** – frontend (Vue.js) + backend (Spring Boot) skeleton. Töö jäi pooleli tehniliste ja isiklike takistuste tõttu, aga siin on kõik, mis valmis sai + täielik plaan ja selgitused.

## Projekti ülevaade
Ülesanne: Luua veebirakendus restorani laua broneerimiseks ja soovitamiseks, arvestades filtreid (kuupäev, kellaaeg, inimeste arv, tsoon, eelistused), efektiivset paigutust (ei pane 2 inimest 8-kohalisse lauda), visuaalset saaliplaani värvidega (vaba, hõivatud, soovitatud, valitud), juhuslikke hõivatud laudu.

Lõpptulemus: Üks peamine leht filtritega + saaliplaan + modal edukuse/ebaõnnestumise jaoks.

## Praegune seis (8. märts 2026)
- **Frontend (Vue.js)**:
    - App.vue (peamine canvas)
    - FiltersView.vue: filtrid (location, date 1–30, time 11:00–17:00, visitors 1-2/3-4/>5, options: window/quiet/accessible)
    - TableView.vue: grid saaliplaan, tabelid kategooriatega (capacity), värvid (yellow=available, black=not available, green=selected, red=taken), klikk valimiseks + modal popup
    - Global styles (global.css) – kõik lehed ühtses stiilis
    - Funktsionaalsus: filtrite submit → emit parentile → TableView update (fake filtering by visitors/category)
    - Dev server ei käivitu (Windows Node PATH probleem) – kood on siin, töötab teoreetiliselt kui keskkond fikseeritud.

- **Backend (Spring Boot)**:
    - Entities: RestaurantTable (id, number, capacity, zone, nearWindow, quietCorner, accessible, x/y pos) + Reservation (id, table, date, start/end time, guestCount)
    - Repositories: TableRepository + ReservationRepository (overlap query: findByTableIdAndDateAndStartTimeLessThanEqualAndEndTimeGreaterThanEqual)
    - H2 in-memory DB konfig (application.properties)
    - Plaanitud: RecommendationService (filter + score: capacity efficiency + preferences boonus), Controller (/api/recommend POST), DataLoader (fake tables/reservations)
    - Praegu töötab H2 console (localhost:8080/h2-console), tabelid luuakse automaatselt.

## Plaanitud arhitektuur ja loogika (põhineb paberkavanditel 3.03 ja 4.03)
### Frontend
- Pealeht (FiltersView + TableView kõrvuti flex layout)
- Filtrid → emit → TableView update (staatused based on visitors/category)
- Tabelid: grid (4 columns), clickable kui available, modal success/failure

### Backend
- Entities: nagu eespool
- Availability: filter by capacity >= guests, zone match, remove overlap (start < existingEnd && end > existingStart)
- Recommendation: score = 100 - (capacity - guests)*10 + boonus (window +20, quiet +20, accessible +20)
- API: POST /api/recommend → return { recommended, available, occupied }
- Random hõivatud: CommandLineRunner insert fake reservations

### Ühendamine
Frontend POST fetch('/api/recommend', { body: JSON.stringify(filters) }) → backend returns JSON → update table statuses (recommended class)

## Tehtud töö ja raskused (aus tagasiside)
- 3.03: Paberkavandid (skitseeritud 2 lehte + modal) – lisatud pildid allpool
- 4.03: Backend struktuur planeeritud (entities, overlap, scoring)
- 7.–8.03: Vue komponendid loodud, aga dev server ei käivitu (Node PATH issue Windowsis) → kood on siin, aga ei testitud live
- Emotsionaalne ülekoormus + hirm vigu teha → palju edasilükkamist
- Aega kulus ~20–30 tundi kokku (planeerimine, katsetamine, freeze perioodid)

**Eeldused**:
- Reservation kestus 2 tundi (startTime + 2h = endTime)
- Tabelid staatilised (15 tk), random hõivatud alguses
- Soovitus: kõige parem skoor (capacity match + preferences)

## Järgmised sammud (kui aega oleks olnud)
- Backend: RecommendationService + Controller + DataLoader
- Frontend: real fetch backendist, update table statuses (set 'recommended')
- Ühendada: CORS fix + API call FiltersView'st
- Testid + Docker (bonus)

## Lisatud failid / visuaalid
- Sketches: Снимок экрана 2026-03-07 021351.jpg (paberkavandid)
- Kood: src/views/* (Vue), src/main/java/* (Spring)

Tänan võimaluse eest! Olen valmis tagasisidet kuulama ja selgitama.

Tair Safiulin