import {
  employees,
  getEmployeesByDepartment,
  calculateAverageSalary,
  getExperiencedEmployees,
  giveRaise,
  groupByDepartment,
} from "./employees.js";

console.log("=== Raport angajați ===\n");

// Gruparea angajaților după departament
const grouped = groupByDepartment(employees);
console.log("--- Angajați grupați pe departamente ---");
for (const [department, list] of Object.entries(grouped)) {
  console.log(`\n${department}:`);
  list.forEach(({ name, salary, experience }) => {
    console.log(`  - ${name} | salariu: ${salary} MDL | experiență: ${experience} ani`);
  });
}

// Filtrare pe un singur departament (exemplu)
console.log("\n--- Angajați din IT ---");
const itEmployees = getEmployeesByDepartment(employees, "IT");
itEmployees.forEach(({ name, salary }) => {
  console.log(`${name}: ${salary} MDL`);
});

// Salariul mediu
const averageSalary = calculateAverageSalary(employees);
console.log(`\nSalariul mediu al companiei: ${averageSalary.toFixed(2)} MDL`);

// Angajați cu experiență > 3 ani
console.log("\n--- Angajați cu experiență > 3 ani ---");
const experienced = getExperiencedEmployees(employees, 3);
experienced.forEach(({ name, experience }) => {
  console.log(`${name}: ${experience} ani`);
});

// Majorare salariu cu 10% pentru cei cu experiență > 3 ani
console.log("\n--- Salarii după majorarea cu 10% ---");
const updatedEmployees = giveRaise(employees, 10, 3);
updatedEmployees.forEach(({ name, salary, experience }) => {
  console.log(`${name} (${experience} ani): ${salary} MDL`);
});

// Raport final cu template literals
console.log("\n=== Raport final ===");
updatedEmployees.forEach(({ name, department, salary, experience }) => {
  console.log(
    `${name} lucrează în departamentul ${department}, are ${experience} ani experiență și un salariu de ${salary} MDL.`
  );
});
