package com.employee.directory.Service;

import java.util.ArrayList;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.directory.Model.Employee;
import com.employee.directory.Repository.EmployeeRepository;
import com.employee.directory.entity.EmployeeEntity;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public String createEmployee(Employee em) {
        EmployeeEntity entity = new EmployeeEntity();
        BeanUtils.copyProperties(em, entity);
        employeeRepository.save(entity);
        return "Saved SuccessFully";
    }

    @Override
    public List<Employee> readAllEmployee() {
        List<EmployeeEntity> employeeList = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();

        for (EmployeeEntity employeeEntity : employeeList) {
            Employee em = new Employee();
            em.setId(employeeEntity.getId());
            em.setName(employeeEntity.getName());
            em.setMobileNo(employeeEntity.getMobileNo());
            em.setEmailId(employeeEntity.getEmailId());
            em.setDepartment(employeeEntity.getDepartment());
            em.setJobTitle(employeeEntity.getJobTitle());
            em.setGender(employeeEntity.getGender());
            em.setWorkingMode(employeeEntity.getWorkingMode());

            employees.add(em);
        }

        return employees;
    }

    @Override
    public boolean updateEmployee(Long id, Employee em) {
        Optional<EmployeeEntity> optional = employeeRepository.findById(id);

        if (optional.isPresent()) {
            EmployeeEntity existingEmployee = employeeRepository.findById(id).get();

            existingEmployee.setName(em.getName());
            existingEmployee.setMobileNo(em.getMobileNo());
            existingEmployee.setEmailId(em.getEmailId());
            existingEmployee.setDepartment(em.getDepartment());
            existingEmployee.setJobTitle(em.getJobTitle());
            existingEmployee.setGender(em.getGender());
            existingEmployee.setWorkingMode(em.getWorkingMode());

            employeeRepository.save(existingEmployee);
            return true;
        }

        return false;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        Optional<EmployeeEntity> optional = employeeRepository.findById(id);

        if (optional.isPresent()) {
            EmployeeEntity existingEmployeeEntity = optional.get();
            employeeRepository.delete(existingEmployeeEntity);
            return true;
        }

        return false;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();

        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);

        return employee;
    }

}
