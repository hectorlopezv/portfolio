import React from 'react'


export interface SkillProps {
    name: string
    percent: string
}
 
const Skill: React.FunctionComponent<SkillProps> = (props) => {
    const {name, percent } = props;
    return ( 
        <div className="progress">
            <span className="skill">
                {name}
                <i className="val">{percent}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div style={{ width: `${percent}%`}} className="progress-bar"role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
        </div> 
    );
}
 
export default Skill;