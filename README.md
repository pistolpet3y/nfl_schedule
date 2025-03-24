School project:

Använd teorin från kursen (inklusive noder och events, samt fetch, Axios eller liknande), i kombination med HTML och CSS, för att bygga en dynamisk webbplats.

Det är inte ett krav att en skiss eller en färgpalett tas fram (men det kan säkert vara till hjälp).

Mer specifika krav följer nedan.

Identifiera en eller flera webbtjänster att hämta information från
https://github.com/toddmotto/public-apis listar diverse webbtjänster som erbjuder JSON-data. Det är även tillåtet att använda webbtjänster som inte är med på den här listan eller webbtjänster som kräver ett konto.

Använd gärna Insomnia för att se vilka data som webbtjänsten/webbtjänsterna tillhandahåller.

Data från minst en webbtjänst ska konsumeras via JavaScript (fetch, Axios eller liknande) och visas upp som en del av detta projekt. Cities-tjänsten, eller en webbtjänst som har tagits upp som ett exempel under kursens gång, får inte användas för att uppfylla detta krav.

Vissa servrar är tyvärr inte konfigurerade på ett sätt så att externa webbplatser (som våra) kan hämta information från dem. Det kan nämligen uppstå CORS-problem när vi försöker göra webbanrop (med fetch, Axios eller liknande) mot vissa webbtjänster. Nedanstående kod (för ett JSON-GET-anrop med fetch) kan användas för att se om CORS-problem uppstår (byt ut punkterna mot webbtjänsten som du vill prova att använda):

fetch('...')
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
  })
Notera att CORS-problem inte uppstår i Insomnia. Man måste alltså använda fetch, Axios eller liknande, för att upptäcka om denna typ av problem uppstår.

Om det önskade resultatet visas i konsolen, så är det möjligt att hämta information från webbtjänsten. Då är webbtjänsten inte föremål för CORS-problem.

(Om CORS-problem uppstår, men webbtjänsten ändå önskas användas, kan ett webbläsartillägg som CORS Everywhere användas för att “stänga av” dessa CORS-problem. Dock kommer webbplatsen då endast att fungera för användare som har webbläsartillägget installerat, samt om en webbserver (som Live Server) används. Detta gör projektet svårare att publicera om det skulle önskas.)

Skapa en webbplats med en layout
Skapa en layout för en webbplats som kan presentera informationen som hämtas från webbtjänsten/webbtjänsterna.

HTML och CSS (eller Sass/liknande) måste användas för att skapa någon sorts layout. Använd till exempel grid-systemet från Bootstrap, Flexbox eller Grid Layout. Notera att det inte räcker att använda ett CSS-ramverk som Bootstrap, utan att “vanlig” CSS (eller Sass/liknande)-kod måste ingå. Notera att det inte är ett krav att använda ett CSS-ramverk.

Webbplatsen måste innehålla minst två webbsidor (HTML-filer). Länkar ska skapas så att användaren kan navigera mellan webbsidorna. Minst två av HTML-filerna som lämnas in ska läsa in och köra JavaScript-kod.

Webbplatsen behöver inte vara (men får gärna vara) responsiv.

Använd teorin från nod- och event-modulerna för att “knyta ihop” webbplatsen med informationen från webbtjänsten
Kombinera webbplatsen du har byggt med teorin från den första laborationen (inklusive noder och events) för att skapa en dynamisk webbapplikation.

Visa upp information från webbtjänsten/webbtjänsterna på webbplatsen.

Inlämningen måste vara interaktiv i att event hanteras på ett meningsfullt sätt. DOMContentLoaded/load-event-typen räknas inte.

JavaScript-ramverk (till exempel Vue.js eller React) får inte användas. jQuery får inte användas.

Ett tillräckligt stort bidrag måste göras. Insatsen kommer att bedömas utifrån att projektet pågår i runt två och en halv vecka.
