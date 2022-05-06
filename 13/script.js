function ObjectandArrays(){
alert(`Прізвище студента, його вага. Вивести під таблицею  прізвище студента, який важить найбільше.`)
let StudentInfo = prompt("Прізвище студента, його вага");
let Students = [];
let max = 0;
while(StudentInfo !=null){
    let StudentData = StudentInfo.split(" ");
    if (StudentData[1] > max){
        max = StudentData[1];
    }

    let Student = {
        "name": StudentData[0],
        "weight": +StudentData[1]
    }
    Students.push(Student);
    StudentInfo = prompt("Прізвище студента, його вага");
}
console.table(Students);
console.log(Students);
console.log(max);
let NameOfBigest = Students.find(name => name.weight == max);
console.log(NameOfBigest.name);
let body = document.getElementsByTagName("body")[0];
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  let row = document.createElement("tr");
  let cell = document.createElement("td");
  let cellText = document.createTextNode("№");
  cell.appendChild(cellText);
  row.appendChild(cell);
  tblBody.appendChild(row);
  
  cell = document.createElement("td");
   cellText = document.createTextNode("Прізвище студента");
  cell.appendChild(cellText);
  row.appendChild(cell);
  tblBody.appendChild(row);
  
  cell = document.createElement("td");
  cellText = document.createTextNode("Вага");
  cell.appendChild(cellText);
  row.appendChild(cell);
  tblBody.appendChild(row);

  for (let i = 0; i < Students.length; i++) {
    row = document.createElement("tr");

    let cell = document.createElement("td");
    let cellText = document.createTextNode(i+1);
      cell.appendChild(cellText);
      row.appendChild(cell);

       cell = document.createElement("td");
     cellText = document.createTextNode(Students[i].name);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
     cellText = document.createTextNode(Students[i].weight);
      cell.appendChild(cellText);
      row.appendChild(cell);

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "0.5");

  let para = document.createElement("p");
  para.innerText ="Прізвище студента, який важить найбільше - " +  NameOfBigest.name;
  document.body.appendChild(para);

}
