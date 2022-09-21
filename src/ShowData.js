import React from 'react';

const ShowData = (props) => {
    return (
        <ul>
            {
                props.skills.map((item)=>{
                    return( <li key={item.id}>{item.name}</li>)
                })
            }
        </ul>
    );
};

export default ShowData;