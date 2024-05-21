import { Colors, Fonts } from "src/styles/globalVariables.style";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { Container } from 'src/components/container';
import { useQuery } from 'react-query';
import { SkillsService } from "./mocks/skillsServices";
import { SkillsDiv } from './skills.styled';

type getSkillsType = {
    category: string
    skills: string[]
}

export const Skills = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const FONT_COLOR = isDark ? Colors.darkFontColor : Colors.lightFontColor;
    const SKILLS_CONTAINER_BG_COLOR = isDark ? Colors.darkBgColor02 : Colors.lightBgColor02;

    const { data } = useQuery(['getSkillsService'], async () => {
        const response = await new SkillsService().getSkills();
        return JSON.parse(response);
    });

    return (
        <Container>
            <SkillsDiv 
                $borderColor={FONT_COLOR}
                $skillsContainerBgColor={SKILLS_CONTAINER_BG_COLOR}>
                <Fonts.Title02 $fontColor={FONT_COLOR}>
                    Skills
                </Fonts.Title02>

                <div className="container">
                    <div>
                        {data && data.map((skillData: getSkillsType, index: number) => (
                            <div key={index} className="skillContainer">
                                <Fonts.Title04 $fontColor={FONT_COLOR}>
                                    {skillData.category}
                                </Fonts.Title04>

                                <ul className="skillList">
                                    {skillData.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <Fonts.Paragraph $fontColor={FONT_COLOR}>
                                                {skill} <b>|</b>
                                            </Fonts.Paragraph>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="projects">
                        
                    </div>
                </div>

            </SkillsDiv>
        </Container>
    );
};
