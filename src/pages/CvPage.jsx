import { Suspense } from 'react';
import Header from '../components/layout/Header';
import { useTranslation } from 'react-i18next';
import BackButton from '../components/custom/buttons/BackButton';
import CustomTitle from '../components/custom/CustomTitle';
import cv_en from '../assets/images/CV_2025_en.jpg';
import cv_fr from '../assets/images/CV_2025_fr.jpg';
import pdf_en from '../assets/pdf/CV_2025_en.pdf';
import pdf_fr from '../assets/pdf/CV_2025_fr.pdf';
import { Button } from 'flowbite-react';
import { Download } from 'lucide-react';
import ScrollPageZero from '../helpers/ScrollPageZero';

const CvPage = () => {

  const { t, i18n } = useTranslation();

  const cv_img = i18n.language === "fr" ? cv_fr : cv_en;
  const pdf = i18n.language === "fr" ? pdf_fr : pdf_en;

  
  return (
    <div className='max-sm:h-[100vh] md:pb-10'>
      <ScrollPageZero />
      <Header />

      <div className='flex justify-between items-center'>
      <BackButton />
      <CustomTitle className={"mr-6 max-sm:mr-2"}>{t("CV.RESUME")}</CustomTitle>
      </div>

      <div className='flex justify-center max-sm:mt-2'>
      <Button >
        <Download className='mr-2 h-5 w-5' />
        <a href={pdf} download="CV_Thomas_Bartier">
        {t("CV.DOWNLOAD")} PDF
      </a>
      </Button>
      </div>

      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <div className="flex justify-center h-[60vw] max-sm:h-[130vw] max-xl:h-[110vw] mt-3 ">
          <img
            src={cv_img}
            alt="mon cv"
            className="border border-slate-600 dark:border-none"
            loading="lazy"
          />
        </div>
      </Suspense>


    </div>
  )
}

export default CvPage