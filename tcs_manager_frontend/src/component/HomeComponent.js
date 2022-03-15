import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'

const HomeComponent = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")
    }, [])

    return (
        <HeaderComponent />
    );
}

export default HomeComponent;
