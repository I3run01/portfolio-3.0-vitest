import '@testing-library/jest-dom';
import RightMenuBar from ".";
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';

describe('test the routes' , () => {
    let rightMenuBarRender: any
    let whatsappButton: HTMLElement
    let linkedinButton: HTMLElement
    let gitHubButton: HTMLElement
    let cvsButton: HTMLElement

    beforeEach(() => {
        rightMenuBarRender = renderWithProviders(<RightMenuBar isRightMenuClosed={false} /> );
        whatsappButton = rightMenuBarRender.getByTestId('whatsapp-button');
        linkedinButton = rightMenuBarRender.getByTestId('linkedin-button');
        gitHubButton = rightMenuBarRender.getByTestId('github-button');
        cvsButton = rightMenuBarRender.getByTestId('cvs-button');

    });

    it('should have whatsapp link', async () => {
        const mockWhatsAppURL = 'https://api.whatsapp.com/send?phone=5541995686185'

        expect(whatsappButton).toHaveAttribute('href', mockWhatsAppURL)
        expect(whatsappButton).toHaveAttribute('target', '_blank')
    })

    it('should have linkedin link', async () => {
        const mockLinkedinAppURL = 'https://www.linkedin.com/in/i3run01'

        expect(linkedinButton).toHaveAttribute('href', mockLinkedinAppURL)
        expect(linkedinButton).toHaveAttribute('target', '_blank')
    })

    it('should have github link', async () => {
        const mockGitHhubURL = 'https://github.com/I3run01'

        expect(gitHubButton).toHaveAttribute('href', mockGitHhubURL)
        expect(gitHubButton).toHaveAttribute('target', '_blank')
    })

    it('should have google drive cvs link', async () => {
        const mockgoogleDriveResumesURL = 'https://drive.google.com/drive/folders/1MAeyz6n7yw1zHPX_BPEFEQ5pLqpvypz7?usp=drive_link'

        expect(cvsButton).toHaveAttribute('href', mockgoogleDriveResumesURL)
        expect(cvsButton).toHaveAttribute('target', '_blank')
    })

})