// src/Contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  // Define an array of objects containing the details of each person
  const teamMembers = [
    {
      name: "Karan Kumar",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/karan-kumar-dev/",
      github: "https://github.com/kumar-karan",
      email: "karan.8080dev@gmail.com",

      imageUrl:
        "https://media.licdn.com/dms/image/D4E03AQFGeqAvTOXAIA/profile-displayphoto-shrink_800_800/0/1670087554519?e=1723075200&v=beta&t=B6HrEtOfWiD2F3HCkJsRW-_KcVpxG-ySH8CxOKoP1Uo",
    },
    {
      name: "Sakshi Bhalla",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/sakshibhalla0/s",
      github: "https://github.com/SakshiBhalla77",
      email: "sakshibhalla27@gmail.com",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQFD4PL2oYUeMQ/profile-displayphoto-shrink_800_800/0/1703091450612?e=1723075200&v=beta&t=ZpuQfUz_ZUJMxJnLhWLeaydv-kiJS3X2kPE25YwuINo",
    },
    {
      name: "Aryan Khatri",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/aryan-khatri2023/",
      github: "https://github.com/ARYAN-khatri83",
      email: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQFa_GWIC-cMYg/profile-displayphoto-shrink_800_800/0/1661828217376?e=1723680000&v=beta&t=LVre7Xcpj8BS-h-axvekCkOBVIty7Meuv6o0sP77Atk",
    },
    {
      name: "Shashank Dubey",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/shashank-dubey-b3684a21b/",
      github: "https://github.com/CorruptEntity0982",
      email: "",
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
                <div style={styles.nameRole}>
                  <p style={styles.name}>{member.name}</p>
                  <p>{member.role}</p>
                </div>

                <div style={styles.contact}>
                  <h3>Contact Me At</h3>
                  <a
                    href={member.linkedin}
                    style={styles.iconLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      style={{ color: "#0A66C2" }}
                    />
                  </a>
                  <a
                    href={member.github}
                    style={styles.iconLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      style={{ color: "black" }}
                    />
                  </a>
                  <a href={`mailto:${member.email}`} style={styles.iconLink}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      style={{ color: "#3E65CF" }}
                    />
                  </a>
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
    justifyContent: "space-between",
    padding: "4rem", // Add padding to create bigger boxes
    margin: "1rem", // Add margin for spacing between boxes
    borderRadius: "15px", // Add border radius for rounded corners
  },
  content: {
    flex: "1", // Take up remaining space
    textAlign: "left", // Align content to the left
    marginRight: "2rem",
  },
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginLeft: "3rem", // Add space between text and image
  },
  iconLink: {
    margin: "0.5rem ",
    //color: "#0A66C2", // Default color for the icons
  },

  name: {
    fontWeight: "bold", // Make the name bold
    marginBottom: "1rem", // Add space below the name
    fontSize: "1.5rem", // Increase the font size of the name
  },
};

export default Contact;
