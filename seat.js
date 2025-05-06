const table = document.getElementById("table")

function handleOturacaq(){
  let kod = ""
  for (let i = 1; i <= 12; i++) {
    kod+= '<tr>'
    let count = 1
    for (let j = 1; j <=17; j++) {
      let cell = ""


      
      if(  i > 6 && j < 3  ){
        cell = ""
      }
      else if( !(  (j>2 && j <6  ) && i > 1 ) ){
        cell = count++
      }

      if(j> 16 && i > 1){  
        cell = ""
      }
      

      kod+= ` <td> ${cell } </td> `
    }
    kod+= '</tr>'
    
  }

  table.innerHTML = kod
}

handleOturacaq()