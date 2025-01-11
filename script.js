///selecionar os elementos do formulário 
const form = document.querySelector("form")
const Valor = document.getElementById("valor")
const nome_da_despesa = document.getElementById("titulo")
const categoria = document.getElementById("categoria")

const extendList = document.querySelector("ul")
const expendQuantity = document.querySelector(".cont-direito header p")
const expendTotal = document.querySelector(".valortotal")
//captura o evento  para formata o valor do input.
Valor.oninput = () =>  {
  //obtém o valor atual e remove os carácteres não numérico
  let value = Valor.value.replace(/\D/g, "")

  value = Number(value) / 100
  //atualiza o valor do input
  Valor.value = formatBRL(value)

}

function formatBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return value
}
form.onsubmit = (event) => {
event.preventDefault()

const newDespesa =  {
 id: new Date().getTime(),
 nome_da_despesa: nome_da_despesa.value,
 categoria_id: categoria.value,
 categoria_name: categoria.options[categoria.selectedIndex].text,
 Valor: Valor.value,
 created_at: new Date(),
}


despesaAdd(newDespesa)

}

function despesaAdd(newDespesa) {
  try {
    //criando a lista
    const despesaItem = document.createElement("li")
    despesaItem.classList.add("lista")

    const extendTitle = document.createElement("div")
    extendTitle.classList.add("title")

    const h4Title = document.createElement("h4")
    h4Title.textContent = newDespesa.nome_da_despesa

    
    const PTitle = document.createElement("p")
    PTitle.textContent = newDespesa.categoria_name

  const totalSpan = document.createElement("span")
  totalSpan.classList.add("totalnew")
  totalSpan.innerHTML = `<small>R$</small>${newDespesa.Valor.replace("R$", "").trim()}`
    
    
    
     const removeDiv = document.createElement("div")
    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove")
    removeIcon.setAttribute("src", "/assets/Remove.svg")
    removeIcon.setAttribute("alt", "icone de remover")
    removeDiv.append(removeIcon)



    ///criando icone de image
    const despesaIcons = document.createElement("img")
    despesaIcons.setAttribute("src", `assets/${newDespesa.categoria_id}.svg`)
    despesaIcons.setAttribute("alt", newDespesa.categoria_name)

    ///adicionando dentro da minha lista
    despesaItem.append(despesaIcons, extendTitle, totalSpan,removeDiv)
    extendList.append(despesaItem)
    extendTitle.append(h4Title, PTitle) 
    
    clearInput()

    updateTotals()
    
  } catch (error) {
    alert("não foi possível atualizar")
    console.log(error);
    
  }
  
  
}
function updateTotals() {
  try {
    const items = extendList.children
    expendQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa" }`
    
    
    let total = 0;
    for (let item = 0; item < items.length; item++ ) {
     itemAmount = items[item].querySelector(".totalnew")
      
      let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")
      
      
      value = parseFloat(value)
      
      
      if (isNaN(value)) {
        return alert("não foi possível calcular os totais")
      }
      total += Number(value)
      
    }
     const symbol = document.createElement("small")
    symbol.textContent = "R$"
    total = formatBRL(total).toUpperCase().replace("R$", "")
    expendTotal.innerHTML = ""
    expendTotal.append(symbol, total) 
     
    
    
   
    

    
    
  } catch (error) {
    console.log(error);
    alert("não foi possível atualizar totais")
    
  }
}
extendList.addEventListener("click", function(event){
  if (event.target.classList.contains("remove")) {
    const item = event.target.closest(".lista")
    item.remove()
  }
  updateTotals()
})
function clearInput() {
  Valor.value = ""
  categoria.value = ""
  nome_da_despesa.value = ""

  nome_da_despesa.focus()
}

