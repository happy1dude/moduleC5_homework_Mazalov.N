// XML
const xmlStudent= `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlStudent, "text/xml");

const listNode = xmlDOM.querySelector("list");
// console.log(listNode)
const allStud = listNode.querySelectorAll("student");
// console.log(firstStud)
const first = allStud[0];
// console.log(first)
const second = allStud[1];
// console.log(second)

// Первый студент Ivan
const firstStud = first.querySelector("name");
const firsNameFirst = firstStud.querySelector("first");
const lastNameFirst = firstStud.querySelector("second");
const ageNodeFirst = first.querySelector("age");
const profNodeFirst = first.querySelector("prof");
const atrrLangFirst = firstStud.getAttribute("lang");

// Второй студент Петр
const secondStud = second.querySelector("name");
const firstNameSecond = secondStud.querySelector("first");
const lastNameSecond = secondStud.querySelector("second");
const atrrLangSecond = secondStud.getAttribute("lang");
const ageNodeSecond = second.querySelector("age");
const profNodeSecond = second.querySelector("prof");


const result = {
  list: [
    {name: firsNameFirst.textContent + ' ' + lastNameFirst.textContent , age: Number(ageNodeFirst.textContent), prof: profNodeFirst.textContent, lang: atrrLangFirst},
    {name: firstNameSecond.textContent + ' ' + lastNameSecond.textContent, age: Number(ageNodeSecond.textContent), prof: profNodeSecond.textContent, lang: atrrLangSecond}
  ]
};

console.log(result);

// JSON
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

// console.log(jsonString);

const data = JSON.parse(jsonString);
// console.log('data' , data)
const list = data.list;
// console.log('list' , list)

const first = list[0];
// console.log('first', first);
const second = list[1];
// console.log(second);

const result =
    {
        list: [
            { name: first.name, age: Number(first.age), prof: first.prof },
            { name: second.name, age: Number(second.age), prof: second.prof },
        ]
    }
console.log(result)