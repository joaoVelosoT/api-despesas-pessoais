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


logout();
saldoTotal();
totalEntradas();
totalSaidas();
