import { calculateAverage } from "./utils.js";

export const students = [
  { id: 1, name: "Ana", grade: 9 },
  { id: 2, name: "Ion", grade: 7 },
  { id: 3, name: "Maria", grade: 10 },
  { id: 4, name: "Vlad", grade: 6 },
  { id: 5, name: "Elena", grade: 8 },
];

export function displayAllStudents(list) {
  list.forEach(({ id, name, grade }) => {
    console.log(`#${id} - ${name}: nota ${grade}`);
  });
}

export function getStudentsAboveOrEqual(list, minGrade) {
  return list.filter((student) => student.grade >= minGrade);
}

export function getClassAverage(list) {
  const grades = list.map((student) => student.grade);
  return calculateAverage(grades);
}

export function findStudentById(list, id) {
  const student = list.find((s) => s.id === id);
  if (!student) {
    throw new Error(`Elevul cu id ${id} nu a fost găsit.`);
  }
  return student;
}

export function addStudent(list, newStudent) {
  return [...list, newStudent];
}
