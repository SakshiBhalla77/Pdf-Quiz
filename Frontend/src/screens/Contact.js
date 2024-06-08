// src/Contact.js
import React from "react";

const Contact = () => {
  // Define an array of objects containing the details of each person
  const teamMembers = [
    {
      name: "Karan Kumar",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/karan-kumar-dev/",
      github: "https://github.com/kumar-karan",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E03AQFGeqAvTOXAIA/profile-displayphoto-shrink_800_800/0/1670087554519?e=1723075200&v=beta&t=B6HrEtOfWiD2F3HCkJsRW-_KcVpxG-ySH8CxOKoP1Uo",
    },
    {
      name: "Sakshi Bhalla",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/sakshibhalla0/s",
      github: "https://github.com/SakshiBhalla77",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQFD4PL2oYUeMQ/profile-displayphoto-shrink_800_800/0/1703091450612?e=1723075200&v=beta&t=ZpuQfUz_ZUJMxJnLhWLeaydv-kiJS3X2kPE25YwuINo",
    },
    {
      name: "Aryan Khatri",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/aryan-khatri2023/",
      github: "https://github.com/ARYAN-khatri83",
      imageUrl:
        "https://media.licdn.com/dms/image/D5635AQEuS5fuioC4ew/profile-framedphoto-shrink_800_800/0/1692049047210?e=1718470800&v=beta&t=y62_U5lfgAV-LiczdKs0vt9Zx_ph-xpeL3YvsAoTQWM",
    },
    {
      name: "Shashank Dubey",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/shashank-dubey-b3684a21b/",
      github: "https://github.com/CorruptEntity0982",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQHGF0eCFiWPgA/profile-displayphoto-shrink_800_800/0/1690141377080?e=1723075200&v=beta&t=iO4tbgd0FUHxNb91WKds-VEAmh5K0GM8u9TSNEWSDUE",
    },
  ];

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <div style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.memberContainer}>
            <div style={styles.box}>
              <div style={styles.content}>
                <p style={styles.name}>{member.name}</p>
                <p>{member.role}</p>
                <div style={styles.links}>
                  <a
                    href={member.linkedin}
                    style={styles.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <br />
                  <div style={{ marginTop: "24px" }}>
                    <a
                      href={member.github}
                      style={styles.button}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={member.imageUrl}
                alt={member.name}
                style={styles.profileImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  teamContainer: {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    alignItems: "center", // Center items horizontally
    marginTop: "2rem",
  },
  memberContainer: {
    textAlign: "center",
    marginBottom: "2rem", // Add some space between each member
  },
  box: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add shadow around the box
    display: "flex",
    alignItems: "center",
    padding: "4rem", // Add padding to create bigger boxes
    margin: "1rem", // Add margin for spacing between boxes
    borderRadius: "15px", // Add border radius for rounded corners
  },
  content: {
    flex: "1", // Take up remaining space
    textAlign: "left", // Align content to the left
  },
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginLeft: "3.5rem", // Add space between text and image
  },
  links: {
    marginTop: "0.5rem",
  },
  button: {
    backgroundColor: "white", // White background color for the button
    color: "#0A66C2", // Blue text color
    padding: "0.5rem 1.5rem", // Padding for the button
    borderRadius: "5px", // Rounded corners for the button
    textDecoration: "none", // Remove underline from the text
    //border: "1px solid #001", // Black border
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Black shadow
  },

  name: {
    fontWeight: "bold", // Make the name bold
    marginBottom: "1rem", // Add space below the name
    fontSize: "1.5rem", // Increase the font size of the name
  },
};

export default Contact;
