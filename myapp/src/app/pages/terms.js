// pages/terms.js
import Head from 'next/head';
import TermsLayout from '../components/TermsLayout';
import TermsOfUse from '../components/TermsComponents/TermsOfUse';
import AboutChampluk from '../components/TermsComponents/AboutChampluk';
import RelevantParties from '../components/TermsComponents/RelevantParties';
import ChamplukServiceProvider from '../components/TermsComponents/ChamplukServiceProvider';
import UserEligibility from '../components/TermsComponents/UserEligibility';
import UserObligationProhibitedUse from '../components/TermsComponents/UserObligationProhibitedUse';
import Payment from '../components/TermsComponents/Payment';
import RightsReserved from '../components/TermsComponents/RightsReserved';
import Privacy from '../components/TermsComponents/Privacy';
import WarrantiesDisclaimers from '../components/TermsComponents/WarrantiesDisclaimers';
import ExternalSites from '../components/TermsComponents/ExternalSites';
import GoverningLawDisputes from '../components/TermsComponents/GoverningLawDisputes';
import Identification from '../components/TermsComponents/Identification';
import Miscellaneous from '../components/TermsComponents/Miscellaneous';
import Changes from '../components/TermsComponents/Changes';

const TermsPage = () => {
  return (
    <TermsLayout>
      <Head>
        <title>Terms of Use</title>
      </Head>
      <header>
      
      </header>
      <main>
        <TermsOfUse />
        <AboutChampluk />
        <RelevantParties />
        <ChamplukServiceProvider />
        <UserEligibility />
        <UserObligationProhibitedUse />
        <Payment />
        <RightsReserved />
        <Privacy />
        <WarrantiesDisclaimers />
        <ExternalSites />
        <GoverningLawDisputes />
        <Identification />
        <Miscellaneous />
        <Changes />
      </main>
    </TermsLayout>
  );
};

export default TermsPage;
