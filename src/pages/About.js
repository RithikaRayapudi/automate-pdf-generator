import React from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const isnavigate=()=>{
    navigate(`/About`)

}
const isnavigate1=()=>{
    navigate(`/Login`)

}
const isnavigate3=()=>{
  navigate(`/Settings`)

}

const isnavigate5=()=>{
navigate('/Dashboard')
}

  return (
    <div>
      <div className="navbar bg-slate-600 pb-4 fixed w-full z-50 top-0 left-0">
        <div className="navbar-start">
          <a className="navbar-item text-slate-200 text-xl">
            <button onClick={isnavigate5}>autoMate</button>
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <label className="btn bg-slate-600 my-2" tabIndex="0">
              <TfiMenu style={{ fontSize: '1.75rem', color: 'white' }} />
            </label>
            <div className="dropdown-menu">
              <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost text-slate-800 absolute right-2 top-2">✕</label>
              <a className="navbar-item text-slate-800 text-xl">
                <button onClick={isnavigate}>About</button>
              </a>
              <a className="navbar-item text-slate-800 text-xl">
                <button onClick={isnavigate3}>Settings</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome to autoMate</h1>
        <p style={styles.paragraph}>
          At autoMate, we are dedicated to simplifying the administrative tasks for student chapters,
          making event planning and management smoother and more efficient. Our mission is to empower
          students with tools that save time, reduce hassle, and ensure seamless event organization.
        </p>

        <h2 style={styles.subHeader}>Who We Are</h2>
        <p style={styles.paragraph}>
          We are a team of passionate developers, designers, and problem-solvers who understand the
          challenges faced by student organizers. Our diverse backgrounds in technology, event
          management, and user experience design have enabled us to create a solution that addresses
          the unique needs of student chapters.
        </p>

        <h2 style={styles.subHeader}>Our Vision</h2>
        <p style={styles.paragraph}>
          Our vision is to become the go-to platform for student chapters across institutions, helping
          them manage their events with ease and professionalism. We aim to continuously innovate and
          improve our application to better serve our users and adapt to their evolving needs.
        </p>

        <h2 style={styles.subHeader}>What We Offer</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Effortless Event Management:</strong> autoMate provides a user-friendly interface
            that makes it easy to input event details and generate necessary documentation.
          </li>
          <li style={styles.listItem}>
            <strong>Automated PDF Generation:</strong> Say goodbye to manual paperwork. Our tool
            automatically creates professional PDFs for event permissions and auditorium bookings based
            on the information you provide.
          </li>
          <li style={styles.listItem}>
            <strong>Instant Downloads:</strong> With just a few clicks, you can generate and download
            the required documents, saving you valuable time and effort.
          </li>
          <li style={styles.listItem}>
            <strong>Data Privacy and Security:</strong> We prioritize the security of your data. All
            information entered into our application is securely processed and not stored or shared
            with third parties.
          </li>
        </ul>

        <h2 style={styles.subHeader}>Our Values</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Innovation:</strong> We constantly seek new ways to improve our application,
            incorporating user feedback and the latest technology trends.
          </li>
          <li style={styles.listItem}>
            <strong>User-Centric Design:</strong> Our platform is designed with the user in mind,
            ensuring a smooth and intuitive experience.
          </li>
          <li style={styles.listItem}>
            <strong>Reliability:</strong> We strive to provide a dependable service that student
            chapters can rely on for their event management needs.
          </li>
          <li style={styles.listItem}>
            <strong>Community Support:</strong> We believe in the power of community and aim to support
            student chapters in creating impactful and successful events.
          </li>
        </ul>

        <h2 style={styles.subHeader}>Join Our Journey</h2>
        <p style={styles.paragraph}>
          We invite you to join us on our journey to revolutionize event management for student
          chapters. Whether you are planning a small meeting or a large conference, autoMate is here
          to make the process easier and more efficient.
        </p>
        <p style={styles.paragraph}>
          Thank you for choosing autoMate. We look forward to being a part of your successful events.
        </p>

        <h2 style={styles.subHeader}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions, feedback, or need assistance, please don't hesitate to reach out
          to us. You can contact us at <a href="mailto:[contact email]">[contact email]</a> or visit
          our support page for more information.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '80px 20px 20px', // Adding margin-top to avoid overlap with fixed navbar
    lineHeight: '1.6',
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#555',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#666',
    marginTop: '10px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '16px',
    color: '#666',
    marginTop: '5px',
  },
};

export default About;
