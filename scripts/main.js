

// Agregar Ingreso


const listaIngresos = [];

const Ingreso = function(categoria,monto){
    this.categoria = categoria
    this. monto = monto
}

function agregarIngreso(){
    const form = document.createElement("form")
    form.innerHTML=`
    <label for="catIngreso-input">Categoría:</label>
    <input id="catIngreso-input" type="text" required>
    
        
    <label for="montIngreso-input">Monto:</label>
    <input id="montIngreso-input" type="number" step="0.01" required>
    


    <button type= "submit">Agregar</button>

    `
    form.addEventListener("submit", function(event){
        event.preventDefault()

        const categoriaInput = document.getElementById("catIngreso-input").value.trim()
        const montoInput = parseFloat(document.getElementById("montIngreso-input").value.trim())

        
        const ingreso = new Ingreso (categoriaInput, montoInput)

        listaIngresos.push(ingreso)

          // Actualizar el total de montos
          const totalMonto = listaIngresos.reduce((total, ingreso) => total + ingreso.monto, 0);
          const totalMontoElement = document.getElementById("total-monto");
          totalMontoElement.textContent = `Total: ${totalMonto.toFixed(2)}`;


        localStorage.setItem("almacenar", JSON.stringify(listaIngresos))
        

        console.table(listaIngresos)

        const container = document.createElement("div")

        listaIngresos.forEach( (ingreso)=>{
            const card = document.createElement("div")

            const categoria = document.createElement("h2")
            categoria.textContent=  ingreso.categoria
            card.appendChild(categoria)

            const monto = document.createElement("p")
            monto.innerHTML=  `Monto: ${ingreso.monto}`
            card.appendChild(monto)
            container.appendChild(card)
        }  )


        const body = document.querySelector("body")
        body.appendChild(container);
        form.reset()
    })


    const body = document.querySelector("body")
    body.appendChild(form);

    
}

// Agregar gasto 

const listaGastos =[];

const Gasto = function(categoria,titulo,monto){
    this.categoria = categoria
    this.titulo = titulo
    this. monto = monto
}


function agregarGasto(){

    const form = document.createElement("form")
    form.innerHTML=`
    <label for="categoria-input">Categoría:</label>
    <input id="categoria-input" type="text" required>
    
    <label for="titulo-input">Título:</label>
    <input id="titulo-input" type="text" required>
    
    <label for="monto-input">Monto:</label>
    <input id="monto-input" type="number" step="0.01" required>
    

    <button type= "submit">Agregar</button>
    
    `

    form.addEventListener("submit", function(event){
        event.preventDefault()

        const categoriaInput = document.getElementById("categoria-input").value.trim()
        const tituloInput = document.getElementById("titulo-input").value.trim() 
        const montoInput = parseFloat(document.getElementById("monto-input").value.trim())

  
        const gasto = new Gasto (categoriaInput, tituloInput, montoInput)

   
        listaGastos.push(gasto)
        
        // Actualizar el total de montos
        const totalMonto = listaGastos.reduce((total, gasto) => total + gasto.monto, 0);
        const totalMontoElement = document.getElementById("total-monto-gasto");
        totalMontoElement.textContent = `Total: ${totalMonto.toFixed(2)}`;

        localStorage.setItem("almacenar", JSON.stringify(listaGastos))
        

        console.table(listaGastos)

        const container = document.createElement("div")



        listaGastos.forEach( (gasto)=>{
            const card = document.createElement("div")

            const categoria = document.createElement("h2")
            categoria.textContent=  gasto.categoria
            card.appendChild(categoria)

            const titulo= document.createElement("p")
            titulo.innerHTML=  gasto.titulo
            card.appendChild(titulo)

            const monto = document.createElement("p")
            monto.innerHTML=  `Monto: ${gasto.monto}`
            card.appendChild(monto)
            container.appendChild(card)
        }  )


        const body = document.querySelector("body")
        body.appendChild(container);
        form.reset()
    })


    const body = document.querySelector("body")
    body.appendChild(form);


}




// botonera

let btnAgregarIngreso = document.getElementById("agregarIngreso")

btnAgregarIngreso.addEventListener("click",agregarIngreso)

let btnAgregarGasto = document.getElementById("agregarGasto")

btnAgregarGasto.addEventListener("click",agregarGasto)