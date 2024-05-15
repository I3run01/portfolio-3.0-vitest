import { AboutDiv } from "./about.style"
import { Colors, Fonts } from "src/styles/globalVariables.style"
import { useSelector } from "react-redux"
import { RootState } from "src/redux/store"
import { Container } from 'src/components/container'
import { useQuery } from 'react-query';

//TODO: after create the service, swap to the api base64
import { HomeService } from "./mocks/homeService.mock"

export const About = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const FONT_COLOR = isDark ? Colors.darkFontColor : Colors.lightFontColor
    const PARAGRAPH_BG_COLOR = isDark ? Colors.darkBgColor02 : Colors.lightBgColor02

    const { data } = useQuery(['homeService'], async () => {
        let response = await new HomeService().about()
        
        const json =  JSON.parse(response)

        return json
    });

    return (
        <Container>
            <AboutDiv 
            $borderColor={FONT_COLOR}
            $paragraphBackgroundColor={PARAGRAPH_BG_COLOR}>
                <Fonts.Title02 $fontColor={FONT_COLOR}>
                    About
                </Fonts.Title02>

                <div className="flexBox"
                data-testid='flex-box'>
                    {data && <img src={data.photo} alt="" />}
                    <Fonts.Paragraph $fontColor={FONT_COLOR}>
                        {data && data.text}
                    </Fonts.Paragraph>
                </div>
            </AboutDiv>
        </Container>
    )
}