import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { data } from "react-router-dom";

// fetch question hook to fetch api data and set value to store

export const useFetchQuestion=()=>{
    const dispatch=useDispatch()
    const [getData, setGetData]=useState({isLoading:false,apiData:[],serverError:null})

    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}))

        // async function fetch backend data
        (async()=>{
            try{
                let question=await data;
                if(question.length>0){
                    setGetData(prev => ({...prev,isLoading:false}));
                    setGetData(prev => ({...prev,apiData:question}));

                    // dispatch
                }
            }
        })();
    })
}