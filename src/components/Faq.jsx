import Banner from './Banner';
import StandardLayout from './layouts/Standard';
import ContentBlock from './ContentBlock';
import BasicListItem from './BasicListItem';

export default function Faq() {
  return (
    <StandardLayout>
      <Banner
        title="Frequently Asked Questions"
        subtitle="Get to know more about our mission and how you can contribute."
      />

      <ContentBlock>
        <ul role="list" className="flex flex-col items-stretch w-full gap-3">
          <BasicListItem name="How can I help?">
            You can help by volunteering your time or making a donation.
          </BasicListItem>
        </ul>
      </ContentBlock>
    </StandardLayout>
  );
}
