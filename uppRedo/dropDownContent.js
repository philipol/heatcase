const dropdownWebb = document.querySelector("#webbutvecklingLink")
const dropdownMarket = document.querySelector("#marketingLink")
const dropdownDesign = document.querySelector("#designLink")
const dropdownAnalys = document.querySelector("#analysLink")
const dropdownSocial = document.querySelector("#socialLink")
const dropdownSeo = document.querySelector("#seoLink")
const dropdownContent = document.querySelector('.dropdownContent')
let dropdownContentImg = document.querySelector('.dropdownContentImg')
let dropdownContentH = document.querySelector('.dropdownContentH')
let dropdownContentP = document.querySelector('.dropdownContentP')


dropdownWebb.addEventListener('click', function() {
    dropdownContent.classList.remove("dropdownContent")
    dropdownContentImg.src = "img/frontend-stor.jpg"
    dropdownContentH.textContent = 'Webbutveckling'
    dropdownContentP.textContent = 'Vi tillhandahåller ett brett utbud av'+
    'webbutvecklingslösningar för att kunna hjälpa ditt företag framåt, med'+
    'stor erfarenhet av att utveckla webbplatser åt en mängd olika branscher'+
    'och strategier som du kan lita på, kan du vara säker på att Norderbergs'+
    'är rätt partner att utveckla din nästa eller uppdatera din befintliga hemsida.'
    console.log('hello Webb')    
}, )
dropdownMarket.addEventListener('click', function() {
    dropdownContent.classList.remove("dropdownContent")
    dropdownContentImg.src = "img/adds.jpg"
    dropdownContentH.textContent = 'Marketing'
    dropdownContentP.textContent = 'Vi marknadsför alla typer av företag, stora som små så'+
    'att du skall kunna nå din kundgrupp snabbare och billigare. Eftersom närvaron online'+
    'är större än någonsin är det nu det bästa sättet att hitta dina kunder, därför lägger'+ 
    'vårt största fokus just här. Några av dem trafik källorna vi jobbar mest med innefattar, '+

    'Visnings annonser, video annonser, sökmotor annonsering, sociala medier. '+
    'Denna typ av annonsering är kostnadseffektiv och du betalar endast efter resultat.'+
    'Vi hjälper dig att ta fram allt nödvändigt material, optimera både kampanjerna'+
    ' efter hand och din hemsida dit vi skickar kunderna för bästa resultat.'
    console.log('hello marketing')    
})
dropdownDesign.addEventListener('click', function() {
    dropdownContent.classList.remove("dropdownContent")
    dropdownContentImg.src = "img/design.jpg"
    dropdownContentH.textContent = 'Design'
    dropdownContentP.textContent = 'Oavsett om du behöver en ny design till en hemsida,'+
    'produktvideo, animation eller en ny logotype med grafisk profil eller'+ 
    'bara annonsmaterial så finns vi här för att lösa det. Våra begåvade designers'+
    'och videoproducenter hjälper dig att visa din produkt eller företag i det bästa möjliga ljuset.'
    console.log('hello design')    
})
dropdownAnalys.addEventListener('click', function() {
    dropdownContent.classList.remove("dropdownContent")
    dropdownContentImg.src = "img/analys.jpg"
    dropdownContentH.textContent = 'Analys'
    dropdownContentP.textContent = '"Marketing without Data is like driving with your eyes closed" - Dan Zarrillo.'+
    'Detta gäller vare sig om du skall driva trafik genom direktmarknadsföring eller för att'+
    ' se hur din hemsida presterar. Mäter man inte vad som funkar eller ej så får man gissa, något som kan kosta en mycket.'
    console.log('hello analys')    
})
dropdownSocial.addEventListener('click', function() {
    dropdownContent.classList.remove("dropdownContent")
    dropdownContentImg.src = "img/socialamedier-temp.jpg"
    dropdownContentH.textContent = 'Socialamedier'
    dropdownContentP.textContent = 'Fyra av fem Svenskar använde sociala medier 2017. Detta är en av de största kanalerna som finns i nuläget och ger företagare en plattform att marknadsföra på som låter oss skräddarsy material efter din målgrupp ner på detaljnivå.'+
    'Genom sociala medier kan vi Öka/underhålla kundengagemang, direkt kommunikation - med vår målgrupp, varumärkesbyggande'+
    ', Skapa trovärdighet, räckvidd - Nå ut med kampanjer, generera leads, kundservice,'+ 
    'omvärldsbevakning - Vad sägs om dig? Vad sägs om ditt företag? Få snabb feedback från kunderna'
    console.log('hello social')    
})
dropdownSeo.addEventListener('click', function() {
    dropdownContent.classList.remove("dropdownContent")
    dropdownContentImg.src = "img/seo-temp.jpg"
    dropdownContentH.textContent = 'Seo/Sökoptimering'
    dropdownContentP.textContent = 'SEO är en förkortning för Search Engine Optimization'+
    'och kallas på svenska sökmotoroptimering. Syftet med SEO är att synas på ett bra'+
    'sätt i sökmotorerna och komma så högt upp som möjligt i deras sökresultat. Om man'+
    'syns på ett bra sätt i sökresultaten med relevanta sökord och intressanta texter '+
    'så lär det leda till flera klick och besök till din webbplats.' + 
    ' Varför är det viktigt med SEO? Svaret är enkelt - syns man inte så finns man inte.'+
    'Tänk dig ett flådigt dukat bord som står redo, men ingen gäst är där eller vet om att det ens finns.'+
    'Om du lägger väldigt mycket pengar på att ta fram koncept, design och bygga en'+
    'site som ingen besöker så är det ju pengar i sjön.'
    console.log('hello seo')    
})
