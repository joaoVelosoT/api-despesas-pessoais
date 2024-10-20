const logout = async () => {
  const btnLogOut = document.getElementById("logout-button");

  btnLogOut.addEventListener("click", (e) => {
    try {
      e.preventDefault();
      const token = sessionStorage.getItem("token");
      if (token) {
        // console.log("tem token");
        sessionStorage.clear("token");
        return (window.location.href = "../login/login.html");
      } else {
        console.log("nao tem token");
      }
      // console.log(token)
      // console.log("Clicou no logout")
    } catch (error) {
      console.error(error);
    }
  });
};

const saldoTotal = async () => {
  try {
    const saldoTotal = document.getElementById("total-dinheiro");
    const token = sessionStorage.getItem("token");
    const response = await fetch("http://localhost:3000/transicao/total", {
      method: "GET",
      headers: { Authorization: `${token}` },
    });

    const json = await response.json();
    saldoTotal.innerText = `R$${json.total}`;
    // console.log(json.total)
  } catch (error) {
    console.error(error);
  }
};

const totalEntradas = async () => {
  try {
    const totalEntradas = document.getElementById("total-entradas");
    const token = sessionStorage.getItem("token");

    const response = await fetch("http://localhost:3000/transicao/entradas", {
      method: "GET",
      headers: { Authorization: `${token}` },
    });

    const json = await response.json();
    // console.log(json)
    totalEntradas.innerText = `R$${json.totalEntradas}`;
  } catch (error) {
    console.error(error);
  }
};

const totalSaidas = async () => {
    try {
      const totalSaidas = document.getElementById("total-saidas");
      const token = sessionStorage.getItem("token");
  
      const response = await fetch("http://localhost:3000/transicao/saidas", {
        method: "GET",
        headers: { Authorization: `${token}` },
      });
  
      const json = await response.json();
      console.log(json)
      totalSaidas.innerText = `R$${json.totalSaidas}`;
    } catch (error) {
      console.error(error);
    }
};

const transacao = async () => {
  const valor = document.getElementById("valor");
  const descricao = document.getElementById("descricao");
  const tipo = document.getElementById("tipo");
  const form = document.getElementById("transaction-form");
  const msgError = document.getElementsByClassName("error-message")[0];


  form.addEventListener('submit', async(e) => {
    e.preventDefault();

    if(!valor.value || !descricao.value || !tipo.value){
      msgError.textContent = "Envie todos os dados !"
      msgError.style.display = "block"
      return 
    }

    if(valor.value < 0){
      msgError.textContent = "O valor não pode ser negativo"
      msgError.style.display = "block"
      return 
    }

    msgError.textContent = "";
    msgError.style.display = "none";
    
    const data = JSON.stringify({
      valor : valor.value,
      descricao : descricao.value,
      tipo : tipo.value
    })

    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch('http://localhost:3000/transicao/', {
        method : 'POST',
        headers: {
           Authorization: `${token}`,
           "Content-Type": "application/json; charset=UTF-8"
          },
        body : data
      })

      const json = await response.json();

      saldoTotal();
      totalEntradas();
      totalSaidas();
      alert("Transação feita com sucesso !")
      valor.value = "";
      descricao.value = "";
      
    } catch (error) {
      console.error(error);
    }




  })
}





transacao();
logout();
saldoTotal();
totalEntradas();
totalSaidas();
