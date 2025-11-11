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
          <BasicListItem name="Brain Injury Association of America">
            <a target="_blank" href="https://biausa.org/" className="text-stone-300 underline">
              https://biausa.org/
            </a>
          </BasicListItem>
          <BasicListItem name="Brain Injury Association of Austin Community Resources">
            <a target="_blank" href="https://braininjuryaustin.org/community-resources/" className="text-stone-300 underline">
              https://braininjuryaustin.org/community-resources/
            </a>
          </BasicListItem>
        </ul>
      </ContentBlock>
      <Banner
        title="Virtual Support Groups"
        subtitle="These groups are open to any and all people whose lives have been impacted by brain injury."    
  <ContentBlock>
        <ul role="list" className="flex flex-col items-stretch w-full gap-3">
          <BasicListItem name="Brain Injury Association of Austin">
            <a target="_blank" href="https://braininjuryaustin.org/meetings/" className="text-stone-300 underline">
              https://braininjuryaustin.org/meetings/
            </a>
          </BasicListItem>
          <BasicListItem name="Virtual Tuesday Brainy Bunch">
            <a target="_blank" href="https://braininjuryconnectionsnw.org/events-programs/virtual-tuesday-brainy-bunch/" className="text-stone-300 underline">
              https://braininjuryconnectionsnw.org/events-programs/virtual-tuesday-brainy-bunch/
            </a>
          </BasicListItem>
          <BasicListItem name="Peer Party Chat">
            <a target="_blank" href="https://forms.gle/gBGruxVkfwUfZfwJ9" className="text-stone-300 underline">
              https://forms.gle/gBGruxVkfwUfZfwJ9/
            </a>
          </BasicListItem>
          <BasicListItem name="The Bee Foundation for Brain Aneurysm Prevention">
            <a target="_blank" href="https://www.thebeefoundation.org/tbf-brain-aneurysm-support-hive/?blm_aid=23492" className="text-stone-300 underline">
              https://www.thebeefoundation.org/tbf-brain-aneurysm-support-hive/?blm_aid=23492/
            </a>
          </BasicListItem>  
        </ul>
      </ContentBlock>
    </StandardLayout>
  );
}
