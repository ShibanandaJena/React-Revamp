import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function Employee(props) {
    return (
        <>
            <div className="row">
               {props.length>0?<div className="col">
                    <div className="card" style={{ width: "18rem" }} >
                        <div className="card-body">
                            <h5 className="card-title">Name:{props.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Designation:{props.tag}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">EMP-ID:{props.id}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Email_id:{props.email}</h6>

                        </div>
                    </div>
                </div>:"No Cards"}
            </div>
        </>
    )
}

export default Employee