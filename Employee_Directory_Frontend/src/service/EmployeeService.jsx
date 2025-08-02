import axios from 'axios';

const Employee_API_URL = import.meta.env.VITE_BackEndUrl;

class EmployeeService {
    saveEmployee(employee) {
        return axios.post(Employee_API_URL + "/employees", employee);
    }

    getAllEmployees() {
        return axios.get(Employee_API_URL + "/employees");
    }

    getEmployeeById(id) {
        return axios.get(Employee_API_URL + "/employees" + "/" + id);
    }

    deleteEmployeeById(id) {
        return axios.delete(Employee_API_URL + "/employees" + "/" + id);
    }

    updateEmployee(employee, id) {
        return axios.put(Employee_API_URL + "/employees" + "/" + id, employee);
    }
}

export default new EmployeeService();