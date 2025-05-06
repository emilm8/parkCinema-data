const cards = document.getElementById("cards")

const data = []

fetch('https://park-cinema-data-i64l.vercel.app/landing')
.then(r => r.json())
.then( mel => {
    data.lenght = 0
    data.push(...mel)
    handle()
})

function handle() {
    data.map( item => {
        cards.innerHTML += ` <div class="relative w-[280px] rounded-2xl overflow-hidden shadow-lg bg-gray-800 group">
  
 
  <div class="w-full h-[400px] overflow-hidden">  
   <a href="/detail.html?id=${item.id} "> <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75" alt="Patrul"class="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"/></a> 
  </div>

 
  <div class="absolute bottom-0 w-full h-28 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>

   
  <div class="absolute bottom-4 left-4 z-20 text-white">
    <h2 class="text-lg font-semibold">  ${item.name}</h2>
    <p class="text-sm text-gray-300">${item.firstScreeningDate.slice(0,10)}</p>
    <p class="text-sm text-gray-300">16+</p>
  </div>

  
  <div class="absolute bottom-4 right-4 z-20 w-6 h-6 rounded-full border border-white overflow-hidden">
    <img src="img/flag1.svg" alt="RU" class="w-full h-full object-cover"/>
  </div>

</div>
`
    })
}


