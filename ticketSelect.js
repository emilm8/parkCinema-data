const tableBody = document.querySelector("#table tbody");
const data3 = [];

function filmtable() {
    fetch(`https://parkcinema-opal.vercel.app/detail`)
        .then(res => res.json())
        .then(mel => {
            data3.length = 0;
            data3.push(...mel); 
            showFilm();
        })
}
filmtable();

function showFilm() {
    let showtableHTML = "";
    data3.forEach(item => {
        showtableHTML += `
        <tr class="border-b bg-[#373737] text-white  border-[#d9dadb] fira-sans-medium  transition" >
            <td class="py-4 px-2 text-sm max-sm:p-1">${item.time}</td>
            <td class="py-4 px-2 text-sm max-sm:p-1 max-sm:text-[12px]"> <div class="flex justify-center items-center gap-2 max-xxs:leading-none"> <span class="max-xxs:text-[8px] max-xxs:leading-none">${item.theatreTitle} | ${item.hallTitle}</span> </div> </td>
            <td class="py-4 px-2 text-sm max-sm:p-1"> <div class="flex flex-col leading-none gap-1">${item.type.slice(1)}</div> </td>
            <td class="py-4 px-2 max-sm:p-1 text-center"><img alt="flag" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/img/${item.language.toLowerCase()}-flag.svg" style="color: transparent;"></td>
            <td class="py-4 px-2 text-sm max-sm:p-1">
            <div class="flex items-center justify-center">
             <div class="border border-solid border-[#d9dadb] min-h-[40px] rounded-[10px] flex flex-col gap-1 p-0.5 max-xxs:px-[1px] py-1 min-w-[20px] max-xxxs:leading-none max-md:leading-[13px] md:leading-[16px] max-w-[100px] justify-center items-center !w-max px-4">
                 <span class="text-[12px] max-xs:text-[10px] max-xxs:text-[8px] text-wrap whitespace-pre">${item.subtitle !== "NONE" ? (item.subtitle === "AZ" ? "AZE<br>sub" : `${item.subtitle}<br>sub`) : "Alt yazı <br> yoxdu"}</span>
             </div>
            </div>
            </td>
            <td class="py-4 px-2 text-end max-sm:p-1">
                <a class="md:!w-max inline-block text-end" href="/ticket.htm?id=${item.id}">
                    <button class="flex items-center justify-center bg-[#a81a1a] px-4 py-2 opacity-65  h-[36px]    text-sm   duration-200 rounded-[20px]   transition md:!w-[160px] !w-[100px] max-sm:!w-[60px] max-sm:!p-0 max-sm:!text-[12px] max-sm:leading-3">Bilet Al</button>
                </a>
            </td>
        </tr>
        `;
    });
    tableBody.innerHTML = showtableHTML;
}


