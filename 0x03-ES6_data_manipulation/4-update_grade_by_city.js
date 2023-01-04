export default function updateStudentGradeByCity(students, city, newGrades) {
  const filstd = students.filter((std) => std.location === city);
  return filstd.map((std) => ({...std, grade: newGrades.filter((g) => g.studentId === std.id).map((g) => g.grade)[0] || 'N/A'}));
}
