class Notas {
  constructor() {
    this.id
  }
  adicionarNota() {
    let notaTxt = inpNota.value;
    let newCard = `<div class="note">
    <div>
    ${notaTxt}
    </div>
    <div>
        <button onclick="deleteNota()">
            -
        </button>
    </div>
  </div>`
    notes.innerHTML += newCard;
    console.log(i)

    let meuInput = document.getElementById("inpNota");
    meuInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
        console.log("Teste")
      }
    });
  }
}

let notas = new Notas()



// function deleteNota(e) {

//   notas = document.querySelectorAll(".note")
//   for (i = 0; i++; i < notas.lenght) {
//     if (i == e) {
//       notas[e].remove();
//       notas[e]
//       notas.indexOf(e)
//     }
//   }
//   console.log(notas[e])
//   console.log(e)
// }



