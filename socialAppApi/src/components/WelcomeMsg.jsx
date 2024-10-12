import React from 'react';

function WelcomeMsg({onFetchPost}) {
  return (
    <div style={styles.container}>
      <div style={styles.messageBox}>
        <h2 style={styles.heading}>There are no posts!!</h2>
        <p style={styles.subText}>Please check back later.</p>
        <button style={styles.button} onClick={onFetchPost}>
          Fetch Posts
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    marginLeft:'200px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    backgroundColor: '#f4f4f9',
    margin: 0,
  },
  messageBox: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2em',
    color: '#333',
    margin: 0,
  },
  subText: {
    color: '#666',
    marginTop: '10px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default WelcomeMsg;
