import React from 'react'

const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '75vh'}}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <h6 className="mt-2">Loading...</h6>
        </div>
    )
}

export default Loader
