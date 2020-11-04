import React from 'react'
import ReactDom from 'react-dom'
import Header from "./components/Header.jsx"
import Section from "./components/Section.jsx"
import ElementsSection from "./components/ElementsSection.jsx"
import './App.css'

function App () {
   return ( 
    <div>
        <Header nome="Matheus Borçari Santana"></Header>
        <Section>
            <ElementsSection></ElementsSection>
        </Section>
    </div>
    )
}

export default App