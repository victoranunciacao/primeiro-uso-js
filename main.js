function somar() {
  var tn1 = document.getElementById("numero1");
  var tn2 = document.getElementById("numero2");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var soma = n1 + n2;
  var res = document.querySelector(".result");
  res.innerHTML = `Resultado: <br> A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`;
}
