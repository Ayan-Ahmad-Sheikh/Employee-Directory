import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import EmployeeService from "../service/EmployeeService";

function AddEmployee() {
    const [employee, setEmployee] = useState(
        {
            name: "",
            mobileNo: "",
            emailId: "",
            department: "",
            jobTitle: "",
            gender: "",
            workingMode: ""
        }
    );

    const saveData = (e) => {
        e.preventDefault();
        // console.log(employee);
        EmployeeService.saveEmployee(employee)
        .then ((response) => {
            // console.log("Saved", response);
            navigate("/");
        })
        .catch ((error) => {
            console.log(error);
        })
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee((prev) => ({ ...employee, [e.target.name]: value }));
    }

    const clearForm = (e) => {
        e.preventDefault();
        setEmployee({
            name : "",
            mobileNo : "",
            emailId : "",
            department : "",
            jobTitle : "",
            gender : "",
            workingMode : ""
        })
    }
    
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center border-2 w-2xl mx-auto mt-10 rounded-2xl">
            <h2 className="text-3xl my-5 font-bold">Add Employee</h2>
            <div className="w-full p-5 flex flex-col justify-center items-center gap-3">
                <div className="text-[18px] flex gap-5">
                    <span className="min-w-[200px]">Enter Name : </span>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={(e) => handleChange(e)}
                        className="bg-white text-black px-5 py-1 w-[300px] rounded-[10px]"
                        placeholder="Write Full Name Here..." />
                </div>

                <div className="text-[18px] flex gap-5">
                    <span className="min-w-[200px]">Enter Mobile No. : </span>
                    <input
                        type="number"
                        name="mobileNo"
                        value={employee.mobileNo}
                        onChange={(e) => handleChange(e)}
                        placeholder="Write Mobile No. Here..."
                        className="bg-white text-black px-5 py-1 w-[300px] rounded-[10px]" />
                </div>

                <div className="text-[18px] flex gap-5">
                    <span className="min-w-[200px]">Enter emailId Address : </span>
                    <input
                        type="text"
                        name='emailId'
                        value={employee.emailId}
                        onChange={(e) => handleChange(e)}
                        className="bg-white text-black px-5 py-1 w-[300px] rounded-[10px]"
                        placeholder="Write emailId Address Here..." />
                </div>

                <div className="text-[18px] flex gap-5">
                    <span className="min-w-[200px]">Enter Your Department</span>
                    <input
                        type="text"
                        name="department"
                        value={employee.department}
                        onChange={(e) => handleChange(e)}
                        className="bg-white text-black px-5 py-1 w-[300px] rounded-[10px]"
                        placeholder="Write Here..." />
                </div>

                <div className="text-[18px] flex gap-5">
                    <span className="min-w-[200px]">Enter Your Job Title : </span>
                    <input
                        type="text"
                        name="jobTitle"
                        value={employee.jobTitle}
                        onChange={(e) => handleChange(e)}
                        className="bg-white text-black px-5 py-1 w-[300px] rounded-[10px]"
                        placeholder="Write Job Title Here..." />
                </div>

                <div className="text-[18px] flex gap-5">
                    <span className="min-w-[200px]">Select Gender:</span>
                    <select
                        name="gender"
                        id="gender"
                        value={employee.gender}
                        onChange={(e) => handleChange(e)}
                        className="bg-white text-black px-5 py-1 w-[300px] rounded-[10px]">
                        <option value="Select an Option">Select an Option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="text-[18px] flex gap-5">
                    <span className="min-w-[200px]">Select Working Mode : </span>
                    <select
                        name="workingMode"
                        id="workingMode"
                        value={employee.workingMode}
                        onChange={(e) => handleChange(e)}
                        className="bg-white text-black px-5 py-1 w-[300px] rounded-[10px]">
                        <option value="Select an Option">Select an Option</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="On-site">On-site</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-center items-center gap-10 m-5">
                <button className="text-2xl font-bold px-5 py-2 rounded-2xl bg-stone-500 hover:bg-stone-800 cursor-pointer" onClick={(e) => saveData(e)}>Save</button>
                <button onClick={(e) => clearForm(e)} className="text-2xl font-bold px-5 py-2 rounded-2xl bg-stone-500 hover:bg-stone-800 cursor-pointer">clear</button>
                <button className="text-2xl font-bold px-5 py-2 rounded-2xl bg-stone-500 hover:bg-stone-800 cursor-pointer" onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>)
}

export default AddEmployee;