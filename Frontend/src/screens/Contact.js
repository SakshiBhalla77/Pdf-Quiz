import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const teamMembers = [
    {
      name: "Karan Kumar",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/karan-kumar-dev/",
      github: "https://github.com/kumar-karan",
      email: "karan.8080dev@gmail.com",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E03AQFGeqAvTOXAIA/profile-displayphoto-shrink_800_800/0/1670087554519?e=1723075200&v=beta&t=B6HrEtOfWiD2F3HCkJsRW-_KcVpxG-ySH8CxOKoP1Uo",
    },
    {
      name: "Sakshi Bhalla",
      role: "Design lead, Frontend Developer",
      linkedin: "https://www.linkedin.com/in/sakshibhalla0/s",
      github: "https://github.com/SakshiBhalla77",
      email: "sakshibhalla27@gmail.com",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQFD4PL2oYUeMQ/profile-displayphoto-shrink_800_800/0/1703091450612?e=1723075200&v=beta&t=ZpuQfUz_ZUJMxJnLhWLeaydv-kiJS3X2kPE25YwuINo",
    },
    {
      name: "Aryan Khatri",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/aryan-khatri2023/",
      github: "https://github.com/ARYAN-khatri83",
      email: "aryan3kkhatri@gmail.com",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQFa_GWIC-cMYg/profile-displayphoto-shrink_800_800/0/1661828217376?e=1723680000&v=beta&t=LVre7Xcpj8BS-h-axvekCkOBVIty7Meuv6o0sP77Atk",
    },
    {
      name: "Shashank Dubey",
      role: "Technical Lead, Fullstack Developer",
      linkedin: "https://www.linkedin.com/in/shashank-dubey-b3684a21b/",
      github: "https://github.com/CorruptEntity0982",
      email: "shashank02.dubey@gmail.com",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQHOp6CSHVXhMw/profile-displayphoto-shrink_800_800/0/1718447406884?e=1724284800&v=beta&t=U9cDdZiuSn_VFnqRSUTehNXbWmwGN7Vr4BUs4Wk49ms",
    },
  ];

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <div style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.memberContainer}>
            <div style={styles.box}>
              <img
                src={member.imageUrl}
                alt={member.name}
                style={styles.profileImage}
              />
              <div style={styles.content}>
                <div style={styles.nameRole}>
                  <p style={styles.name}>{member.name}</p>
                  <p>{member.role}</p>
                </div>

                <div style={styles.contact}>
                  <h3>Contact Me At</h3>
                  <div style={styles.iconsContainer}>
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
              </div>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "2rem",
  },
  memberContainer: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  box: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    margin: "1rem",
    borderRadius: "15px",
    width: "300px",
  },
  profileImage: {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    marginBottom: "0.5rem",
  },
  content: {
    textAlign: "center",
    marginTop: "1rem",
  },
  nameRole: {
    marginBottom: "1rem",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  iconLink: {
    margin: "0.5rem",
  },
  name: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
  },
};

export default Contact;

