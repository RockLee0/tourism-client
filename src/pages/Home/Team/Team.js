import React from 'react';

import guide1 from '../../../images/Guide/guide1.jpg';
import guide2 from '../../../images/Guide/guide2.jpg';
import guide3 from '../../../images/Guide/guide3.jpg';
import guide4 from '../../../images/Guide/guide4.jpg';
import Guide from '../Guide/Guide';
import './Team.css';



const team = [
    {
        img: guide1,
        name: 'Amrita paul',
        expertize: 'experienced in wild life'
    },
    {
        img: guide2,
        name: 'Jhankar Mahbub',
        expertize: 'experienced in historical place view'
    },
    {
        img: guide3,
        name: 'Miss Arpita ',
        expertize: ' Ocean view location guide'
    },
    {
        img: guide4,
        name: 'Jenifer Lopez',
        expertize: 'Hill tracking '
    },
]





const Team = () => {
    return (
        <div id="experts" className="container mx-auto">
            <h2 className="text-dark mt-4 bg-secondary "> OUR TEAM TO HELP YOU </h2>
            <div className="row team-container">
                {
                    team.map(guide => <Guide
                        key={guide.name}
                        guide={guide}
                    >

                    </Guide>)
                }
            </div>
        </div>
    );
};

export default Team;

