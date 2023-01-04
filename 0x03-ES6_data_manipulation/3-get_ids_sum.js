export default function getStudentIdsSum (arr) {
  return arr.reduce((acc, std) => acc + std.id, 0);
};
