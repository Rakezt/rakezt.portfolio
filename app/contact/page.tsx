import { SectionTitle } from '@/components/shared/SectionTitle';
import PageNavigation from '@/components/shared/PageNavigation';
import ContactForm from '@/components/shared/ContactForm';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function ContactPage() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionWrapper>
        <SectionTitle
          title='Contact'
          subTitle='Get in touch before I write another line of code!'
        />

        <ContactForm />

        <PageNavigation />
      </SectionWrapper>
    </div>
  );
}
