import Banner from './Banner';
import StandardLayout from './layouts/Standard';
import ContentBlock from './ContentBlock';
import BasicListItem from './BasicListItem';

export default function Donate() {
  return (
    <StandardLayout>
      <Banner
        title="Donate"
        subtitle="We are not currently accepting donations, please consider contributing to one of the following organizations instead:"
      />

      <ContentBlock>
        <ul role="list" className="flex flex-col items-stretch w-full gap-6">
          <BasicListItem name="Brain Injury Association of America">
            <a target="_blank" href="https://biausa.org/" className="text-stone-300 underline">
              https://biausa.org/
            </a>
          </BasicListItem>
          <BasicListItem name="Brain Injury Association of Austin">
            <a target="_blank" href="https://braininjuryaustin.org/" className="text-stone-300 underline">
              https://braininjuryaustin.org/
            </a>
          </BasicListItem>
          <BasicListItem name="The Bee Foundation">
            <a target="_blank" href="https://www.thebeefoundation.org/" className="text-stone-300 underline">
              https://www.thebeefoundation.org/
            </a>
          </BasicListItem>
          <BasicListItem name="The Brain Injury Network">
            <a target="_blank" href="https://thebraininjurynetwork.org/" className="text-stone-300 underline">
              https://thebraininjurynetwork.org/
            </a>
          </BasicListItem>
        </ul>
      </ContentBlock>
    </StandardLayout>
  );
}
