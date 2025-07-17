import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService.jsx';

function ListEmployee() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployee] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getAllEmployees();
                setEmployee(response.data);
            }
            catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployeeById(id)
        .then(() => {
            if(employees){
            setEmployee((prevElement) => {
                return prevElement.filter((employee) => employee.id !==id);
            })
           }
        })
    };

    return (
        <div className="container mx-auto my-8">
            <button className="bg-cyan-900 hover:bg-cyan-950 cursor-pointer text-2xl border-2 px-5 py-2 rounded-2xl" onClick={() => navigate("\addEmployee")}>Add Employee</button>

            <div className="mt-10 w-full overflow-x-auto">
                <table className="shadow table-auto border-collapse border border-gray-400 rounded-2xl overflow-hidden w-full">
                    <thead className="bg-slate-600">
                        <tr>
                            <th className="px-6 py-3 uppercase">Id</th>
                            <th className="px-6 py-3 uppercase tracking-wide max-w-[200px] truncate">Name</th>
                            <th className="px-6 py-3 uppercase tracking-wide max-w-[200px] truncate">Department</th>
                            <th className="px-6 py-3 uppercase tracking-widemax-w-[200px] truncate">job Title</th>
                            <th className="px-6 py-3 uppercase tracking-wide">Gender</th>
                            <th className="px-6 py-3 uppercase tracking-widemax-w-[200px] truncate">Mobile No</th>
                            <th className="px-6 py-3 uppercase tracking-widemax-w-[200px] truncate">Email</th>
                            <th className="px-6 py-3 uppercase tracking-wide">Working Mode</th>
                            <th className="px-6 py-3 uppercase tracking-wide">Action</th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id} className="bg-white text-black hover:bg-blue-200">
                                    <td className="text-left px-6 py-4 whitespace-nowrap">{employee.id}</td>
                                    <td className="text-left px-6 py-4 whitespace-nowrap max-w-[200px] truncate">{employee.name}</td>
                                    <td className="text-left px-6 py-4 whitespace-nowrap max-w-[200px] truncate">{employee.department}</td>
                                    <td className="text-left px-6 py-4 whitespace-nowrap max-w-[200px] truncate">{employee.jobTitle}</td>
                                    <td className="text-left px-6 py-4 whitespace-nowrap">{employee.gender}</td>
                                    <td className="text-left px-6 py-4 whitespace-nowrap max-w-[200px] truncate">{employee.mobileNo}</td>
                                    <td className="text-left px-6 py-4 whitespace-nowrap max-w-[200px] truncate">{employee.emailId}</td>
                                    <td className="text-left px-6 py-4 whitespace-nowrap">{employee.workingMode}</td>
                                    <td className="text-left px-6 py-4 whitespace-nowrap flex gap-2">
                                        <a
                                            className="px-3 py-2 cursor-pointer hover:bg-violet-700 rounded-2xl"
                                            onClick={(e) => { editEmployee(e, employee.id)}}
                                        >Edit</a>
                                        <a
                                            className="px-3 py-2 cursor-pointer hover:bg-violet-700 rounded-2xl"
                                            onClick={(e) => {deleteEmployee(e, employee.id)}}
                                        >Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}

export default ListEmployee;