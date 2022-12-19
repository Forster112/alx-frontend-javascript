export default function createReportObject(employeesList) {
  const myObj = {
    allEmployees: {
        ...employeesList
    },
    getNumberOfDepartments(){
        let numemp = 0
        for (const key of Object.keys(myObj)) numemp += 1;
        return numemp;
    }
  }

  return myObj
}
