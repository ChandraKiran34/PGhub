import React from 'react';
import Professor from './Professor';

function Home() {
  const lecturerData = {
    name: 'Madhura Vani',
    college: 'IIIT Sri City',
    role:"Associate Professor",
    email:'madhuravani15@gmail.com',
    skills: ['Pattern Recognition', 'DataMining', 'Algorithms'],
    ongoingProjects:['Project A','Project B','Project C']
  };
  return (
    <div style={{display:"flex",justifyContent:"space-between", marginBottom:"150px"}}>
      <Professor {...lecturerData}/>
      <Professor {...lecturerData}/>

    </div>
  );
}

export default Home;