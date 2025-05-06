const table = document.getElementById("table")

function handleOturacaq(){
  let kod = ""
  for (let i = 1; i <= 12; i++) { 
    kod+= '<tr class="" >'
    let count = 1
    for (let j = 1; j <=17; j++) {
      let cell = ""
      let style = ""
      let dataAttrs = ""
      
       let isReserved = (i === 4 && (j === 7 || j === 8 || j === 9))
      let isSeat = false
      
      if(i > 6 && j < 3){
        cell = ""
        style = "bg-transparent"
      }
      else if(!(  (j>2 && j <6  ) && i > 1 )){
        isSeat = true

        if(isReserved){
          style = "bg-black m-1 text-white border-separate border-spacing-1 cursor-not-allowed"
          dataAttrs = `data-row="${i}" data-col="${j}" data-seat-num="${count}" data-status="reserved"`
        } else {
          style = "bg-[#c6c6c6] m-1 text-black border-separate border-spacing-1 cursor-pointer hover:bg-gray-400"
          dataAttrs = `data-row="${i}" data-col="${j}" data-seat-num="${count}" data-status="available" onclick="toggleSeatSelection(this)"`
        }
        cell = count++
      }

      if(j > 16 && i > 1){  
        cell = ""
        style ="bg-transparent"
      }
    
      kod+= ` <td class="${style}" ${isSeat ? dataAttrs : ''}> ${cell} </td> `
    }
    kod+= '</tr>'
  }

  table.innerHTML = kod
}

handleOturacaq()


function toggleSeatSelection(seatElement) {

  if (seatElement.dataset.status === "reserved") {
    return;
  }
  

  if (seatElement.dataset.status === "selected") {
    seatElement.dataset.status = "available";
    seatElement.classList.remove("bg-red-500");
    seatElement.classList.add("bg-[#c6c6c6]");
  } else {
    seatElement.dataset.status = "selected";
    seatElement.classList.remove("bg-[#c6c6c6]");
    seatElement.classList.add("bg-red-700");
  }
}


function markSeatsAsReserved(seats) {
  // seats parameter should be an array of objects with row and seat numbers
  // Example: [{row: 4, seat: 7}, {row: 4, seat: 8}, {row: 4, seat: 9}]
  
  const allSeats = document.querySelectorAll('td[data-seat-num]');
  
  // Reset all seats to available first
  allSeats.forEach(seat => {
    if (seat.dataset.status !== "reserved") {
      seat.dataset.status = "available";
      seat.classList.remove("bg-green-500", "bg-black", "text-white");
      seat.classList.add("bg-[#c6c6c6]", "text-black");
    }
  });
  
  // Mark the specified seats as reserved
  seats.forEach(seatInfo => {
    const targetSeat = document.querySelector(`td[data-row="${seatInfo.row}"][data-col="${seatInfo.col}"]`);
    if (targetSeat) {
      targetSeat.dataset.status = "reserved";
      targetSeat.classList.remove("bg-[#c6c6c6]", "bg-green-500", "text-black");
      targetSeat.classList.add("bg-black", "text-white", "cursor-not-allowed");
      targetSeat.removeAttribute("onclick");
    }
  });
}

let scale = 1;
const seatContainer = document.getElementById('seat-container');

document.getElementById('zoom-in').addEventListener('click', () => {
  scale = Math.min(scale + 0.1, 2); // Maximum 200%
  seatContainer.style.transform = `scale(${scale})`;
});

document.getElementById('zoom-out').addEventListener('click', () => {
  scale = Math.max(scale - 0.1, 0.5); // Minimum 50%
  seatContainer.style.transform = `scale(${scale})`;
});