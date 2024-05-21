export class SkillsService {
    async getSkills() {
        const skillsData = [
            {
                category: 'Languages',
                skills: [
                    'Portuguese - Native',
                    'English - Advanced',
                ],
            },
            {
                category: 'Programming languages | Frameworks | Libs ...',
                skills: [
                    'Javascript',
                    'Typescript',
                    'Node.JS',
                    'NestJS',
                    'React.JS',
                    'Python',
                ],
            },
            {
                category: 'Auxiliary software',
                skills: [
                    'Figma',
                    'Adobe Premiere',
                    'Excel',
                ],
            },
        ];

        return JSON.stringify(skillsData);
    }

    async getProjectsBySkill(skillKeyWord: string) {
        const projectsData = [
            {
                title: 'bot bitcoin',
                photo: 'src/assets/projectCape/bot bitcoin.png',
            },
            {
                title: 'first portfolio',
                photo: 'src/assets/projectCape/first portfolio.png',
            },
            {
                title: 'mercado vizinhanca site',
                photo: 'src/assets/projectCape/mercado vizinhanca site.png',
            },
        ];

        return JSON.stringify(projectsData);
    }
}
