import { useSelector } from "react-redux"
import { CapeDiv } from "./cape.style"
import { RootState } from "src/redux/store"
import { Colors } from "src/styles/globalVariables.style"
import { Fonts } from "src/styles/globalVariables.style"

const capePhotoPath = 'src/assets/photos/capePhoto.png'

export const Cape = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const FONT_COLOR = isDark ? Colors.darkFontColor : Colors.lightFontColor

    return (
        <CapeDiv $fontColor={FONT_COLOR}>
            <div className="photoDiv" data-testid='photo-div'>
                <div className='title'>
                    <Fonts.Title01 $fontColor={FONT_COLOR}>Bruno A.V <br /> Port<span>fo</span>lio </Fonts.Title01>
                    <Fonts.Title03 $fontColor={FONT_COLOR}>Be <span>welcome</span></Fonts.Title03>
                </div>
                
                <img src={capePhotoPath} alt="" data-testid='my-photo'/>
            </div>

            <Fonts.Title03 $fontColor={FONT_COLOR} className="subtitle">
                Developer engineer <br />
            </Fonts.Title03>
        </CapeDiv>
    )
}