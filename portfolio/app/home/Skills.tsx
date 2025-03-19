import { frameworkSkills, langSkills } from "./skillInfos";
import Image from "next/image";
import { skillInterface } from './skillInfos';

const SkillCardComponent = ({ skill }: { skill: skillInterface }) => {
    const image = require(`./icons/${skill.image}`);

    return (
        <article className="skill-card">
            <Image src={image} alt={skill.name} className="skill-icon" />
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{`Lv.${skill.level}`}</p>
        </article>
    )
};

const SkillsComponent = () => {
    return (
        <div>
            <div className="responsive-splitter">
                <h1>Skills</h1>
                <div className="texts">
                    <div>Lv.1  軽く触った程度</div>
                    <div>Lv.2  主要な機能を一通り使える</div>
                    <div>Lv.3  自走して業務を行える</div>
                    {/*<p>Lv.4  数年の業務経験がある</p>
                    <p>Lv.5  完全理解</p>*/}
                </div>
            </div>
            <h2 className="skill-type">Languages</h2>
            <div className="skills-grid">
                {langSkills.map((skill, index) => (
                    <SkillCardComponent skill={skill} key={index} />
                ))}
            </div>
            <h2 className="skill-type">Frameworks</h2>
            <div className="skills-grid">
                {frameworkSkills.map((skill, index) => (
                    <SkillCardComponent skill={skill} key={index} />
                ))}
            </div>
        </div>
    );
};

export default SkillsComponent;