import React from 'react';

function Loader() {
  return (
    <div>
      <center>
        <div style={{ marginLeft: "250px", marginTop: "200px" }}>
          <div
            className="spinner-grow text-primary"
            role="status"
            style={{ width: '5rem', height: '5rem' }} // Increase spinner size
          >
            <span className="visually-hidden">Loading...</span>
          </div>

          <h2 style={{ fontSize: '2.5rem', marginTop: '20px' }}>LOADING...</h2> {/* Increase text size */}
        </div>
      </center>
    </div>
  );
}

export default Loader;
