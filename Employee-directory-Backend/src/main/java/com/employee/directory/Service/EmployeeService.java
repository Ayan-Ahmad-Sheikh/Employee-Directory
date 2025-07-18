package com.employee.directory.Service;

import java.util.List;

import com.employee.directory.Model.Employee;

public interface EmployeeService {
    String createEmployee(Employee em);
    List<Employee> readAllEmployee();
    boolean updateEmployee(Long id, Employee em);
    boolean deleteEmployee(Long id);
    Employee getEmployeeById(Long id);
}
