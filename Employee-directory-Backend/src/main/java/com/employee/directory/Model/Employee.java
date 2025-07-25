package com.employee.directory.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    private Long id;
    private String name;
    private Long mobileNo;
    private String emailId;
    private String department;
    private String jobTitle;
    private String gender;
    private String workingMode;
}