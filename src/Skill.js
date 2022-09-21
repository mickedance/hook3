import React, { useState } from 'react';
import Form from './Form';
import ShowData from './ShowData';

const Skill = () => {
    
    const initialSkills =  [ {id:0, name:'1firstname'}, {id:2, name:'2firstname'} ];
    const [skills, setSkills] = useState(initialSkills)
    return (
        <div>
            <h3>Skills:</h3>
            <ShowData  skills={skills}></ShowData>
            <Form setSkills={setSkills} skills={skills}></Form>
        </div>
    );
};

export default Skill;