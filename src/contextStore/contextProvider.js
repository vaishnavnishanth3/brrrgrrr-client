import { useEffect, useState } from "react";
import Context from "./context"
import axios from "axios";
const ContextProvider=(props)=>{
    const [userData,setUserData]=useState(null)
    
    const contextValues={
        userData,
        setUserData
    }

    useEffect(()=>{
            axios.get(`http://localhost:3001/orders/${JSON.parse(localStorage.getItem("user")).userData.userId}`)
            .then(res=>{
                console.log(res)
                const user=JSON.parse(localStorage.getItem("user"))
                setUserData({userData:{...user.userData,orders:res.data.order,customizedBurgers:res.data.customizedBurgers}})
            })
    },[localStorage.getItem('user')])
    return <Context.Provider value={contextValues}>
                {props.children}
    </Context.Provider>
}
export default ContextProvider;