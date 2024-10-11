import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagramSquare,FaLinkedin,FaTwitterSquare,FaFacebookSquare, } from "react-icons/fa";



function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <div className="col-md-4 d-flex align-items-center">
    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <svg className="bi" width="30" height="24">
        <use xlinkHref="#bootstrap" />
      </svg>
    </a>
    <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
  </div>

  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex p-2">
  <li className="ms-3">
    <a className="text-muted" href="#">
      <FaLinkedin />
    </a>
  </li>
  <li className="ms-3">
    <a className="text-muted" href="#">
      <FaTwitterSquare />
    </a>
  </li>
  <li className="ms-3">
    <a className="text-muted" href="#">
      <FaFacebookSquare />
    </a>
  </li>
  <li className="ms-3">
    <a className="text-muted" href="#">
      <FaInstagramSquare />
    </a>
  </li>
</ul>

</footer>

  )
}

export default Footer