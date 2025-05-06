const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const film = document.getElementById("film");

const data2 = [];

function getfilm() {
    fetch(`https://park-cinema-data-i64l.vercel.app/landing/${id}`)
        .then(res => res.json())
        .then(film => {
            data2.length = 0;
            data2.push(film); 
            showDetail();
        })
}
getfilm();

function showDetail() {
    film.innerHTML = "";
    data2.map(item => {
        film.innerHTML += `
        <div class="grid grid-cols-2 max-md:flex max-md:flex-col-reverse gap-5 my-10 w-full h-full">
            <div>
                <div class="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                    <div class="rounded-[30px] overflow-hidden max-lg:hidden">
                        <img alt="${item.name || 'movie'}" width="500" height="500" class="w-full h-full object-cover" src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75">
                    </div>
                    <div class="flex flex-col">
                        <h1 class="text-[#D9DADB] text-xl font-semibold mt-2">${item.name || 'Film Adı yoxdur'}</h1>
                        <div class="flex text-[#D9DADB] text-sm items-center gap-0.5 my-2">
                            <span>${item.genres?.[0]?.title || 'Janr yoxdur'}</span>
                        </div>
                        <p class="text-[#D9DADB] !text-[16px] font-semibold mb-1">Dil</p>
                        <ul class="flex items-center gap-2 mb-4">
                           <img src="img/flag3.svg" alt="">

                        </ul>
                        <div class="mb-4">
                            <p class="text-[#D9DADB] !text-[16px] font-semibold">Altyazı</p>
                                <img src="img/flag1.svg" alt="">

                        </div>
                        <div class="flex flex-col gap-2 max-md:flex-row max-md:justify-between w-full">
                            <div class="flex flex-1 flex-col gap-2">
                                <p class="text-[#D9DADB] !text-[16px] font-normal"><span class="font-semibold">Müddət:</span> ${item.duration ? `${Math.floor(item.duration / 60)} saat ${item.duration % 60} dəq` : 'Məlumat yoxdur'}</p>
                                <p class="text-[#D9DADB] !text-[16px] font-normal"><span class="font-semibold">İl:</span> ${item.year || '2024'}</p>
                                <p class="text-[#D9DADB] !text-[16px] font-normal"><span class="font-semibold">Ölkə:</span> ${item.country || 'Məlumat yoxdur'}</p>
                                <p class="text-[#D9DADB] !text-[16px] font-normal"><span class="font-semibold">Rejissor:</span> ${item.director || 'Naməlum'}</p>
                            </div>
                            <div class="flex flex-col flex-1 gap-2">
                                <p class="text-[#D9DADB] font-normal"><span class="text-[16px] font-semibold">Aktyorlar:</span> ${item.actors?.join(', ') || 'Məlumat yoxdur'}</p>
                                <p class="text-[#D9DADB] !text-[16px] font-normal"><span class="font-semibold">Yaş Həddi:</span> ${item.ageLimit === 'SIXTEEN' ? '16+' : item.ageLimit === 'EIGHTEEN' ? '18+' : '12+'}</p>
                                <p class="text-[#D9DADB] !text-[16px] font-normal"><span class="font-semibold">Nümayiş Tarixi:</span> ${item.firstScreeningDate?.split('T')[0] || 'Naməlum'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <h2 class="text-[#D9DADB]">${item.description || 'Film haqqında məlumat yoxdur.'}</h2>
                </div>
            </div>
            <div class="max-ld:row-span-1">
                <div class="w-full aspect-video relative z-10 bg-cover rounded-3xl overflow-hidden">
                    ${item.youtubeUrl ? `<iframe class="absolute top-0 left-0 w-full h-full" src="${item.youtubeUrl.replace('watch?v=', 'embed/')}"  frameborder="0" allowfullscreen></iframe>` : `<div class="text-white p-4">Video yoxdur</div>`}
                </div>
            </div>
        </div>`;
    });
}