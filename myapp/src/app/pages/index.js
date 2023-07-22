import Head from 'next/head';
import Logo from '../components/Privacycomponents/Logo';
import PrivacyPolicy from '../components/Privacycomponents/PrivacyPolicy';
import Applicability from '../components/Privacycomponents/Applicability';
import InformationCollect from '../components/Privacycomponents/InformationCollect';
import SharingInformation from '../components/Privacycomponents/SharingInformation';
import StorageSecurity from '../components/Privacycomponents/StorageSecurity';
import ThirdPartyServices from '../components/Privacycomponents/ThirdPartyServices';
import ChangesToPolicy from '../components/Privacycomponents/ChangesToPolicy';
import ContactUs from '../components/Privacycomponents/ContactUs';
import TermsLayout from '../components/TermsLayout';

const Home = () => {
  return (
    <TermsLayout>
    <div >
      <Head>
        <title>My Website</title>
      </Head>
      <header>
       
      </header>
      <main>
        <PrivacyPolicy />
        <Applicability />
        <InformationCollect />
        <SharingInformation />
        <StorageSecurity />
        <ThirdPartyServices />
        <ChangesToPolicy />
      </main>
     
    </div>
    </TermsLayout>
  );
};

export default Home;

