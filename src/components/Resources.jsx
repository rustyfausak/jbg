import Banner from './Banner';
import StandardLayout from './layouts/Standard';
import ContentBlock from './ContentBlock';
import BasicListItem from './BasicListItem';

export default function Resources() {
  return (
    <StandardLayout>
      <Banner
        title="Resources"
        subtitle="Find helpful materials and support for brain injury recovery."
      />

      <ContentBlock>
        <ul role="list" className="flex flex-col items-stretch w-full gap-3">
          <BasicListItem name="Brain Injury Association of Austin Community Resources">
            <a target="_blank" href="https://braininjuryaustin.org/community-resources/" className="text-stone-300 underline">
              https://braininjuryaustin.org/community-resources/
            </a>
          </BasicListItem>
        </ul>
      </ContentBlock>
    </StandardLayout>
  );
}
