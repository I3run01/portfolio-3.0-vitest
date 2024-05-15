import { useTranslation } from 'react-i18next';

const Tech = () => {
    const { t } = useTranslation();


    return (
        <>
            <h1>{t('Tech')}</h1>
        </>
    )
}

export default Tech