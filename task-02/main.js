import { calculateSum, calculateAverage } from "./utils.js";
import {
  students,
  displayAllStudents,
  getStudentsAboveOrEqual,
  getClassAverage,
  findStudentById,
  addStudent,
} from "./students.js";

// Exemplu simplu de utilizare a funcțiilor din utils.js
const sampleValues = [4, 8, 15, 16, 23];
console.log("Suma valorilor de test:", calculateSum(sampleValues));
console.log("Media valorilor de test:", calculateAverage(sampleValues));

// Afișarea tuturor elevilor
console.log("\n--- Toți elevii ---");
displayAllStudents(students);

// Elevii cu nota >= 8
console.log("\n--- Elevi cu nota >= 8 ---");
const topStudents = getStudentsAboveOrEqual(students, 8);
displayAllStudents(topStudents);

// Media clasei
console.log("\n--- Media clasei ---");
console.log(`Media clasei este: ${getClassAverage(students).toFixed(2)}`);

// Căutarea unui elev după id (cu try/catch)
console.log("\n--- Căutare elev după id ---");
try {
  const found = findStudentById(students, 2);
  console.log(`Elev găsit: ${found.name} (nota ${found.grade})`);

  const notFound = findStudentById(students, 99);
  console.log(notFound);
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}

// Adăugarea unui elev nou
console.log("\n--- Adăugare elev nou ---");
const updatedStudents = addStudent(students, { id: 6, name: "Radu", grade: 8 });
displayAllStudents(updatedStudents);
