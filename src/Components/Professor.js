import React from 'react';
import './Professor.css'
import EmailIcon from '@mui/icons-material/Email';
const Professor = ({ name, skills,email,role,college,ongoingProjects }) => {
   const skillsString = skills.join(', ');
  return (
    <div className='professor-container'>
            <div className="lecturer-skills">
                <h2 className="lecturer-name">Dr. {name}</h2>
                <h3 className="lecturer-role" style={{color:"#555"}}>{role}</h3>
                <div style={{marginLeft:"13px",width:"200px",display:"flex",color:"#f45645",justifyContent:"space-around"}}>
                <EmailIcon /><span style={{marginLeft:"10px"}}>{email}</span>
                </div>
                <p className="lecturer-college">Ph.D.({college})</p>
                <div className="skills-list">
                    <h3 style={{color:"black"}}>Research Areas :</h3>
                    <p>{skillsString}</p>
                    {/* <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skillsString}</li>
                    ))}
                    </ul> */}
                </div>
            </div>

            {/* <div className="projects-list">
                <h3>Ongoing Projects:</h3>
                <ul>
                {ongoingProjects.map((project, index) => (
                    <li key={index}>{project} :n  
                    <p>lorem ipsum dolor sir </p>
                    </li>
                ))}
                </ul>
                <button type="submit" className='btn-connect'>
                    Request to join
                </button>
            </div> */}

         
    </div>
  );
};

export default Professor;
