import React, { useEffect, useState } from "react";
import { Navbar } from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CompaniesTable } from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchJobByText } from "../../redux/jobSlice";
import { AdminJobsTable } from "./AdminJobsTable";
import useGetAllAdminJobs from "../../hooks/useGetAllAdminJobs";

export const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input,setInput]=useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setSearchJobByText(input))
  },[input]);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-18">
        <div className="flex items-center justify-between my-5">
          <Input 
            className='w-fit'
            placeholder="Filter by name, role"
            onChange={(e)=>setInput(e.target.value)}
          />
          <Button className='cursor-pointer' onClick={()=> navigate("/admin/jobs/create")}>New Jobs</Button>
        </div>
        <AdminJobsTable/>
      </div>
    </div>
  );
};
