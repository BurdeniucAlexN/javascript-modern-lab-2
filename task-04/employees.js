// Modul pentru gestionarea angajaților unei companii
// Angajat: { id, name, department, salary, experience }

export const employees = [
  { id: 1, name: "Ana Popescu", department: "IT", salary: 12000, experience: 5 },
  { id: 2, name: "Ion Rusu", department: "Vânzări", salary: 8500, experience: 2 },
  { id: 3, name: "Maria Ionescu", department: "IT", salary: 15000, experience: 7 },
  { id: 4, name: "Vlad Ciobanu", department: "Marketing", salary: 9000, experience: 1 },
  { id: 5, name: "Elena Munteanu", department: "Vânzări", salary: 10500, experience: 4 },
  { id: 6, name: "Radu Guțu", department: "IT", salary: 11000, experience: 3 },
  { id: 7, name: "Cristina Vasilache", department: "Marketing", salary: 9800, experience: 6 },
];

export const getEmployeesByDepartment = (list, department) =>
  list.filter((employee) => employee.department === department);

export const calculateAverageSalary = (list) => {
  if (list.length === 0) return 0;
  const total = list.reduce((sum, { salary }) => sum + salary, 0);
  return total / list.length;
};

export const getExperiencedEmployees = (list, minYears = 3) =>
  list.filter((employee) => employee.experience > minYears);

export const giveRaise = (list, percentage, minYears = 3) =>
  list.map((employee) =>
    employee.experience > minYears
      ? { ...employee, salary: Math.round(employee.salary * (1 + percentage / 100)) }
      : employee
  );

export const groupByDepartment = (list) =>
  list.reduce((groups, employee) => {
    const { department } = employee;
    const current = groups[department] || [];
    return { ...groups, [department]: [...current, employee] };
  }, {});
