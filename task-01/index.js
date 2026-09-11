const grades = [7, 9, 5, 10, 8, 6];

// 1. Toate notele mai mari sau egale cu 8
const highGrades = grades.filter((grade) => grade >= 8);
console.log("Note >= 8:", highGrades);

// 2. Media notelor
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Media notelor:", average.toFixed(2));

// 3. Fiecare notă mărită cu 1 punct, fără a depăși 10
const increasedGrades = grades.map((grade) => Math.min(grade + 1, 10));
console.log("Note mărite cu 1 (max 10):", increasedGrades);
