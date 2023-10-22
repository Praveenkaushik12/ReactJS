import React from 'react';
import './work.css';
import Bproject from '../../assets/BP.png';
import Clone from '../../assets/clone.png';
import Card from '../Cards/Card';



const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        These projects represent a significant milestone in my journey of
        self-discovery and continuous learning.
      </span>
      <div className="card-container">
        <Card
          backgroundImage={Bproject}
          title="BootStrap"
          description="Sample Design using Bootstrap."
        />
        <Card
          backgroundImage={Clone}
          title="Clone"
          description="This is the clone of RocketMan."
        />
        {/* Add more Card components with different content and image URLs as needed */}
      </div>
    </section>
  );
};

export default Works;
