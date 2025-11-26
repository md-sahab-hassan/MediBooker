import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            MediBooker is a smart and fully digital Hospital Management and
            Appointment Booking System designed to simplify healthcare services
            for patients, doctors, and hospitals. We aim to bridge the gap
            between medical facilities and patients by providing a fast,
            reliable, and secure platform to manage appointments, patient
            records, billing, and hospital operations—all in one place. At
            MediBooker, our vision is to empower healthcare with technology. We
            focus on reducing waiting time, improving patient care, and helping
            hospitals operate efficiently with automated workflows.
          </p>
          <p>We are all in 2025!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            From booking an appointment to accessing medical history, every
            feature has been carefully built to make healthcare more accessible,
            organized, and transparent. MediBooker stands for trust, care, and
            innovation. We are dedicated to supporting hospitals and clinics in
            their journey toward a smart digital future, where technology
            enhances services, not replaces them. With MediBooker, healthcare
            becomes simpler, faster, and more connected.
          </p>
          <p>Make Ease In APPOINTMENT</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
