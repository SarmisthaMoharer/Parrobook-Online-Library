//import React from 'react'

const About = () => {
  return (
    <div className="px-4 my-12">
      <section className="about-section pt-20 pb-8 pl-8 pr-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">About Us</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our Library Management System is dedicated to providing an efficient, user-friendly experience for all book lovers and students. Designed with both users and administrators in mind, our platform offers a seamless way to search, borrow, and track books, helping you stay organized and focused on what truly matters: enjoying the world of literature.
      </p>
      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Key Features</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Quick and intuitive book search with categorization</li>
        <li>Personalized user and admin dashboards for better management</li>
        <li>Real-time availability updates and notifications</li>
        <li>Enhanced security for safe and secure transactions</li>
        <li>Responsive design accessible on all devices</li>
      </ul>
      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h3>
      <p className="text-gray-700 leading-relaxed">
        We aim to foster a love for reading by providing an easy, efficient, and accessible system for users of all ages. Our mission is to connect people to the books they need and love while supporting our community learning and growth.
      </p>
    </section>

    </div>
  )
}

export default About
