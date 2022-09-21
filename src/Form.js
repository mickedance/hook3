import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = (props) => {
    const {register, handleSubmit, formState:{errors} } = useForm();
    let [duplicateError, setDuplicatedError] = useState('');
    const saveData = (data)=>{
        setDuplicatedError('')
       
        props.skills.map((item)=>{
            if(item.name.indexOf(data.skill)>=0){
                setDuplicatedError(data.skill + " Already exists.") 
                return
            }
        })
        const newSkill = props.skills.concat( {id:Math.random().toString(), name: data.skill} )

        props.setSkills(newSkill)
    }
    return (
        <div className='container'>
            <form className='col-4' onSubmit={handleSubmit(saveData)}>
            <div className="form-group">
                <label >Skill</label>
                <input  className="form-control" {...register("skill", {required:true, maxLength:5, minLength:2})}  placeholder="Enter skill"  />
                { errors.skill && errors.skill.type==='required' && <span className='text-danger' >Skill is required</span> }
                { errors.skill?.type==='minLength' && <span className='text-danger' >Skill to short</span> }
                { errors.skill?.type==='maxLength' && <span className='text-danger' >Skill to long</span> }
                { duplicateError===''? <span>{duplicateError}</span> : <span className='text-danger' >{duplicateError}</span>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    );
};

export default Form;