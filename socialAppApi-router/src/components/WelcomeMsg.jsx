import React from 'react';

function WelcomeMsg() {
  return (
    <div style={styles.container}>
      <div style={styles.messageBox}>
        <h2 style={styles.heading}>There are no posts!!</h2>
        <p style={styles.subText}>Please check back later.</p>
      
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
 
};

export default WelcomeMsg;
