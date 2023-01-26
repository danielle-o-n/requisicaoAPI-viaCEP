const inputCep = document.querySelector("#cep");
inputCep.addEventListener("blur", (e) => {
  let consulta = inputCep.value.replace("-", "");
  const options = {
    method: "get",
    mode: "cors",
    cache: "default",
  };
  const myfunccion = (dados) => {
    for (const campo in dados) {
      if (document.querySelector("#" + campo)) {
        document.querySelector("#" + campo).value = dados[campo];
      }
    }
  };
  fetch(`https://viacep.com.br/ws/${consulta}/json/`, options)
    .then((response) => {
      response.json().then((data) => {
        myfunccion(data);
      });
    })
    .catch((e) => {
      e;
    });
});
