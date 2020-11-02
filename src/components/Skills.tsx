import React from 'react'
import Skill from './Skill';
export interface SkillsProps {
    
}
 
const Skills: React.FunctionComponent<SkillsProps> = () => {
    return ( 
        <div className="container skills">
            <h2 className="about-title">
                        Skills
            </h2>
            <div className="row">
                <div className="col-lg-6">
                    <Skill
                        name="HTML &amp; CSS"
                        percent="88"
                    />
                    <Skill
                        name="SQL &amp; MongoDb"
                        percent="60"
                    />
                    <Skill
                        name="JAVASCRIPT"
                        percent="85"
                    />
                    <Skill
                        name="REACT"
                        percent="45"
                    />
                </div>

                <div className="col-lg-6">
                    <Skill
                            name="DOCKER"
                            percent="60"
                        />
                    <Skill
                        name="PYTHON"
                        percent="68"
                    />
                    <Skill
                        name="BASH"
                        percent="75"
                    />
                    <Skill
                        name="NODEJS"
                        percent="70"
                    />
                </div>
            </div>
        </div>
     
     );
}
 
export default Skills;