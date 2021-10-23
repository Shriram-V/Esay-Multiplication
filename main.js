function getTablesFromInput() {

  num1 = document.getElementById("number_for_tables").value * 1;
  num2 = document.getElementById("number_for_tables").value * 2;
  num3 = document.getElementById("number_for_tables").value * 3;
  num4 = document.getElementById("number_for_tables").value * 4;
  num5 = document.getElementById("number_for_tables").value * 5;
  num6 = document.getElementById("number_for_tables").value * 6;
  num7 = document.getElementById("number_for_tables").value * 7;
  num8 = document.getElementById("number_for_tables").value * 8;
  num9 = document.getElementById("number_for_tables").value * 9;
  num10 = document.getElementById("number_for_tables").value * 10;

    console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);
  console.log(num5);
  console.log(num6);
  console.log(num7);
  console.log(num8);
  console.log(num9);
  console.log(num10);

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
  document.getElementById("num3").innerHTML = num3;
  document.getElementById("num4").innerHTML = num4;
  document.getElementById("num5").innerHTML = num5;
  document.getElementById("num6").innerHTML = num6;
  document.getElementById("num7").innerHTML = num7;
  document.getElementById("num8").innerHTML = num8;
  document.getElementById("num9").innerHTML = num9;
  document.getElementById("num10").innerHTML = num10;

  document.getElementById("number_for_tables").value = "";
  
}