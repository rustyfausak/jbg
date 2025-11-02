import StandardLayout from './layouts/Standard';
import Banner from './Banner';
import ContentBlock from './ContentBlock';

export default function About() {
  return (
    <StandardLayout>
      <Banner
        title="About"
        subtitle="Learn more about our history and mission."
      />
      <ContentBlock wrapperClass="pt-0">
      </ContentBlock>
    </StandardLayout>
  );
}
