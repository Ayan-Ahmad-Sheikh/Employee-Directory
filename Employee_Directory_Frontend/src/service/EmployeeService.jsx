import axios from 'axios';

const Employee_API_URL = process.env.BackEndUrl;

class EmployeeService {
    saveEmployee(employee) {
        return axios.post(Employee_API_URL, employee);
    }

    getAllEmployees() {
        return axios.get(Employee_API_URL);
    }

    getEmployeeById(id) {
        return axios.get(Employee_API_URL + "/" + id);
    }

    deleteEmployeeById(id) {
        return axios.delete(Employee_API_URL + "/" + id);
    }

    updateEmployee(employee, id) {
        return axios.put(Employee_API_URL + "/" + id, employee);
    }
}

export default new EmployeeService();