# CGI Suvepraktika 2026 – Minu katse

Kahjuks ei jõudnud ma täielikku töötavat rakendust valmis teha aja ja tehniliste takistuste tõttu.

Mida ma tegin ja plaanisin:
- Vue.js frontend:
    - App.vue – peamine leht / canvas
    - FiltersView.vue – filtrid (kuupäev, kellaaeg, inimeste arv, tsoon, eelistused)
    - TableView.vue – saaliplaan (tabelite visualiseerimine)
- Plaan: filtritest andmed → backend (Spring Boot) → soovitatud laudade highlight TableView's
- Andmemudel (mõeldud backendile):
    - RestaurantTable: id, number, capacity, zone, nearWindow, quietCorner, accessible, xPos, yPos
    - Reservation: id, tableId, date, startTime, endTime, guestCount
- Soovitusloogika idee: skoor = (capacity - guests) miinus + eelistuste boonus (nt +20 akna eest)

Praegune seis: Vue struktuur paigas, aga dev server ei käivitu (Node PATH probleem Windowsis).
Lisasin failid src/views/ kausta, aga node_modules / käivitamine jäi pooleli.

Manuses / repo's on failid App.vue, FiltersView.vue, TableView.vue + see README.

Tänan võimaluse eest proovida. Olen teadlik, et see on väga osaline, aga tahtsin siiski näidata, mida ma mõtlesin ja kuhu jõudsin.

[Sinu nimi]
[Sinu kontakt kui soovid]