import React from 'react';

const coachData = [
  {
    name: `John Morgan`,
    img: `/images/img1.jpg`,
    sport: `Cricket`,
    description: `Experienced cricket coach, refining skills, promoting strategy, teamwork, and success.`
  },
  {
    name: `Ellie Anderson`,
    img: `/images/img1.jpg`,
    sport: `Football`,
    description: `Dedicated football coach, driving fitness, tactical mastery, and team cohesion.`
  },
  {
    name: `Nia Adebayo`,
    img: `/images/img1.jpg`,
    sport: `Basketball`,
    description: `Energetic basketball coach, enhancing agility, teamwork, and competitive spirit.`
  },
  {
    name: `Mia Williams`,
    img: `/images/img1.jpg`,
    sport: `Badminton`,
    description: `Skilled shuttle coach, improving technique, speed, endurance, and competitive focus.`
  }
];

function Coach(props) {
  return (
    <div className='container'>
      <span className='pro'>{props.sport}</span>
      <img src="images/img1.jpg" className="img" alt={props.name} />
      <div className="txt">
      <h4>{props.name}</h4>
      <h3></h3>
      <p className="exp">{props.description}</p>
      </div>
      
    </div>
  );
}

export const Coaches = () => {
  return (
    <> 
      {
        coachData.map((coach, index) => (
          <Coach
            key={index}
            name={coach.name}
            sport={coach.sport}
            description={coach.description}
          />
        ))
      }
    </>
  );
};
