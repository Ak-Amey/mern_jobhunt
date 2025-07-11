import React, { useEffect } from 'react'
import {COMPANY_API_END_POINT} from '../utils/constant'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setCompanies} from '../redux/companySlice'

export const useGetAllCompanies = () => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchCompanies = async()=>{
        try{
            const res=await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true})
            if(res.data.success){
                dispatch(setCompanies(res.data.companies))
            }
        }catch(err){
            console.log(err);
        }
    }
    fetchCompanies()
  },[])
}

export default useGetAllCompanies
