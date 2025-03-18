import Image from "next/image";
import { skillInterface } from './skills';

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

export default SkillCardComponent;