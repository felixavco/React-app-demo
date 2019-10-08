import React from 'react'

const Footer = () => {
    return (
        <footer>
           <div className="container mt-5 py-3">
                <h4>My React App {new Date().getFullYear()}</h4>   
            </div> 
        </footer>
    )
}

export default Footer
