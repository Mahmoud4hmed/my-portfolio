'use client';
import React from 'react';
import Image from 'next/image';
import notzilla from '../../assets/Notzilla.png'
import andalus from '../../assets/andalus.png'
import quran from '../../assets/quran.png'
import blog from '../../assets/blog.png'
import air from '../../assets/air.jpg'
import lms from '../../assets/LMS.png'
import todo from '../../assets/todo.png'
import xo from '../../assets/xo.png'
import './main.css'
import { useState } from 'react'

const projects = [
    {Name:'Notzilla', Image: notzilla, Description:'Notzilla is a web app that allows you to take notes', Link:'https://github.com/mahmoud4hmed/Notzilla', Language:'Python', Type:'Fullstack'},
    {Name:'Flask Blog', Image: blog, Description:'Flask Blog is a web based blog for sports', Link:'https://github.com/mahmoud4hmed/Flask_blog', Language:'Python', Type:'Flask'},
    {Name:'Quran', Image: quran, Description:'Quran is a web app for reading the quran', Link:'https://github.com/mahmoud4hmed/Quran ', Language:'JavaScript', Type:'React'},
    {Name:'AndalusEdu', Image: andalus, Description:'AndalusEdu is an  educational platform', Link:'https://github.com/mahmoud4hmed/AndalusEdu ', Language:'Python', Type:'Django'},
    {Name:'AirSpear', Image: air, Description:'AirSpear is a cyber security tool for network pentesting', Link:'https://github.com/Mahmoud4hmed/AirSpear ', Language:'C', Type:'C'},
    {Name:'LMS', Image: lms, Description:'Library Management System', Link:'https://github.com/Mahmoud4hmed/Library_Management_System_in_Django ', Language:'Python', Type:'Django'},
    {Name:'ToDo List', Image: todo, Description:'ToDo List is a web app that allows you to take notes', Link:'https://github.com/Mahmoud4hmed/todo-list ', Language:'JavaScript', Type:'React'},
    {Name:'XO', Image: xo, Description:'This is a simple XO game', Link:'https://github.com/Mahmoud4hmed/xo ', Language:'TypeScript', Type:'React'},
]

const Main = () => {

    const [active, setActive] = useState("all");
    const [array, setArray] = useState(projects);

    const handleFilter = (type) => {

        setActive(type)

        const newArray = projects.filter((item) => {
            return item.Type === type
        })
        setArray(newArray)
        
    }

    return (
        <div id='projects' className='flex gap-12 globalMain'>
            <section className='flex flex-col gap-3 items-start text-center typeButtons'>
            <button onClick={() => {
                setActive("all")
                setArray(projects)
                }} className={active === "all"? 'active' : ''}>All projects</button>
                
            <button onClick={() => {
                handleFilter("Django")
                }} className={active === "Django"? 'active' : ''}>Django</button>
                
            <button onClick={() => {
                handleFilter("Flask")
                }} className={active === "Flask"? 'active' : ''}>Flask</button>
                
            <button onClick={() => {
                handleFilter("React")
                }} className={active === "React"? 'active' : ''}>React js</button>
                
            <button onClick={() => {
                handleFilter("Fullstack")
                }} className={active === "Fullstack"? 'active' : ''}>Fullstack</button>
                
            <button onClick={() => {
                handleFilter("C")
                }} className={active === "C"? 'active' : ''}>C Programming</button>
                
            </section>

            <section className='flex flex-wrap gap-3 justify-center h-fit'>

            {array.map((item) => {
                return(
                    <article key={item} className='border border-[var(--border)] hover:border-[--blue] duration-300 w-72 rounded-lg hover:rotate-1 hover:scale-105 cursor-pointer h-fit'>
                    <Image src={item.Image} width={300} height={300} className='rounded-t-lg' alt='pfp'/>
                    <div className='w-72 py-3 rounded-b-lg px-2 bg-[#ffffff0d]'>
                        <h1 className='text-xl font-bold text-[var(--title)]'>{item.Name}</h1>
                        <p className='text-sm text-[var(--subtitle)]'>{item.Description}</p>
                        <div className='flex gap-3 mt-3 justify-between text-lg items-center'>
                            <div className='flex gap-3 text-[var(--subtitle)]'>
                                <div className='icon-link cursor-pointer hover:text-[var(--icon-hover)]'></div>
                                <a href={item.Link} target='_blank' className='icon-github cursor-pointer hover:text-[var(--icon-hover)]'></a>
                            </div>
                            <h1 target='_blank' className='text-[var(--blue)] flex'>more
                            <span className='icon-arrow_forward self-center mr-2'></span>
                            </h1>
                        </div>
                    </div>
                </article>
                )
            })}

            </section>
        </div>
    );
}

export default Main;
