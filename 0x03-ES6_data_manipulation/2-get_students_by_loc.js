export default function getStudentsByLocation (students, location) {
  return students.filter(loc => loc.location === location);
};
