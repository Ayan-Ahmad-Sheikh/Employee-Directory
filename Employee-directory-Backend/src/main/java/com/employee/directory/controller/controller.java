package com.employee.directory.controller;

import org.springframework.web.bind.annotation.RestController;

import com.employee.directory.Model.Employee;
import com.employee.directory.Service.EmployeeService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


// @CrossOrigin (origins = "https://http://localhost:5173")
@RestController
public class controller {
    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeService.readAllEmployee();
    }
    
    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id)
    {
        return employeeService.getEmployeeById(id);
    }

    @PostMapping("/employees")
    public String createEmployee(@RequestBody Employee em)
    {
        return employeeService.createEmployee(em);
    }

    @PutMapping("/employees/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee em)
    {
        if (employeeService.updateEmployee(id, em))
        {
            return "Updated Successfully";
        }

        return "Not Found";
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable Long id)
    {
        if (employeeService.deleteEmployee(id))
        {
            return "Delete Successfully";
        }
        
        return "Not Found";
    }
}
