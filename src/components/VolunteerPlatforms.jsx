import React from 'react';
import './VolunteerPlatforms.css';

const volunteerPlatformsData = [
  {
    id: 1,
    name: 'Volunteer Canada',
    logo: 'https://volunteer.ca/images/logos/Volunteer_Canada_logo.png',
    link: 'https://volunteer.ca'
  },
  {
    id: 2,
    name: 'CharityVillage',
    logo: 'https://charityvillage.com/wp-content/themes/charityvillage/img/logo.svg',
    link: 'https://charityvillage.com'
  },
  {
    id: 3,
    name: 'GoVolunteer',
    logo: 'https://govolunteer.ca/wp-content/themes/volunteer-bc-2016/assets/images/logo.png',
    link: 'https://govolunteer.ca'
  },
  {
    id: 4,
    name: 'VolunteerMatch',
    logo: 'https://www.volunteermatch.org/assets/logo_header-cdbb70db3de166e664cb110277c799d6906a0951143c1e3579d1b72a2c4f5da8.png',
    link: 'https://www.volunteermatch.org'
  },
  {
    id: 5,
    name: 'Volinspire',
    logo: 'https://volinspire.com/assets/images/logo.svg',
    link: 'https://volinspire.com'
  }
];

const VolunteerPlatforms = () => {
  return (
    <div className="volunteer-platforms">
      {volunteerPlatformsData.map(platform => (
        <div key={platform.id} className="volunteer-platform-card">
          <img src={platform.logo} alt={`${platform.name} logo`} />
          <h3>{platform.name}</h3>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default VolunteerPlatforms;
