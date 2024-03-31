import React from 'react'
import notfound from '../assets/notfound.png'
const Notfound = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row ms-5 me-5">
                    <div className="col-lg-5">
                        <img src={notfound} alt="notfound" width={620} />
                    </div>
                    <div className="col-lg-5">
                        <div className="mt-1">
                            
                            <h1 style={{ fontSize: "100px" }}>404 </h1>
                            <div className="fw-bold bg-secondary bg-gradient text-light p-3 mt-2 ms-5 fs-2 rounded" style={{ width: "95%" }}>
                            <h2 style={{ fontSize: "60px" }}>Page Introuvable!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notfound