import { Colors, Fonts } from "src/styles/globalVariables.style";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { Container } from 'src/components/container';
import { useQuery } from 'react-query';
import { SkillsService } from "./mocks/skillsServices";
import { SkillsDiv } from './skills.styled';
import { useState } from 'react';

type getSkillsType = {
    category: string;
    skills: string[];
}

type getProjectsBySkillType = {
    title: string;
    photo: string;
}

export const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const FONT_COLOR = isDark ? Colors.darkFontColor : Colors.lightFontColor;
    const SKILLS_CONTAINER_BG_COLOR = isDark ? Colors.darkBgColor02 : Colors.lightBgColor02;

    const { data: skillsData, isLoading: isSkillsLoading, isError: isSkillsError } = useQuery(
        'getSkills',
        async () => {
            const response = await new SkillsService().getSkills();
            const json: getSkillsType[] =  JSON.parse(response);
            setSelectedSkill(json[0].skills[0])

            return json
        }
    );

    const { data: projectsData, refetch: refetchProjects } = useQuery(
        ['getProjectsBySkill', selectedSkill],
        async () => {
            if (selectedSkill) {
                const response = await new SkillsService().getProjectsBySkill(selectedSkill);
                return JSON.parse(response);
            }
            return [];
        },
        { enabled: !!selectedSkill }
    );

    const changeRouteBlank = (route: string) => {
        window.open(route, '_blank');
    };

    if (isSkillsLoading) {
        return <div>Loading...</div>;
    }

    if (isSkillsError) {
        return <div>Error loading skills</div>;
    }
    

    return (
        <Container>
            <SkillsDiv
                $borderColor={FONT_COLOR}
                $skillsContainerBgColor={SKILLS_CONTAINER_BG_COLOR}
                $fontColor={FONT_COLOR}>
                <Fonts.Title02 $fontColor={FONT_COLOR}>
                    Skills
                </Fonts.Title02>

                <div className="container" data-testid = 'container'>

                    <div className="skills" data-testid = 'skills'>
                        {skillsData && skillsData.map((skillData: getSkillsType, index: number) => (
                            <div key={index} className="skillContainer">
                                <Fonts.Title04 $fontColor={FONT_COLOR}>
                                    {skillData.category}
                                </Fonts.Title04>

                                <ul className="skillList" data-testid = 'skillList'>
                                    {skillData.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <Fonts.Paragraph
                                                $fontColor={FONT_COLOR}
                                                className={skill === selectedSkill ? 'selectedSkill' : 'notSelectedSkill'}
                                                onClick={() => {
                                                    setSelectedSkill(skill);
                                                    refetchProjects();
                                                }}>
                                                {skill} <b>|</b>
                                            </Fonts.Paragraph>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="projects" data-testid = 'projects'>
                        {projectsData && projectsData.map((project: getProjectsBySkillType , index: number) => (
                            <div key={index} onClick={() => changeRouteBlank(`project/${project.title}`)}>
                                <img src={project.photo} alt={project.title} data-testid = 'projectCapePhoto'/>
                            </div>
                        ))}
                    </div>
                </div>
            </SkillsDiv>
        </Container>
    );
};
