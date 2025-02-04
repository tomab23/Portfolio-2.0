import React from 'react'
import Header from '../components/layout/Header'
import { useTranslation } from 'react-i18next'
import BackButton from '../components/custom/buttons/BackButton';

const CvPage = () => {

  const { t } = useTranslation();
  
  return (
    <div>
      <Header />
      <BackButton />
        <h1>CvPage</h1>
        <h2>{t("TEST")}</h2> 
    </div>
  )
}

export default CvPage