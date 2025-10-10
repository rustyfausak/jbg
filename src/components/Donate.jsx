import Banner from './Banner';
import StandardLayout from './layouts/Standard';
import ContentBlock from './ContentBlock';
import BrainIcon from './BrainIcon';

function DonateListItem({ name, url }) {
  return (
    <li className="">
      <a href={url} className="flex items-center gap-x-6 py-3 px-6 bg-stone-700 rounded-lg hover:underline hover:bg-stone-700/70">
        <div className="text-white">
          <BrainIcon
            className="w-15 h-15" />
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-stone-400 underline">{url}</div>
        </div>
      </a>
    </li>
  );
}

export default function Donate() {
  return (
    <StandardLayout>
      <Banner
        title="Support Our Mission"
        subtitle="Your contributions help us provide resources and support to brain injury survivors."
      />

      <ContentBlock
        title="We are not currently accepting donations."
        subtitle="However, the following is a great list of potential places to donate to."
      >
        <ul role="list" className="flex flex-col items-stretch w-full gap-3">
          <DonateListItem name="Brain Injury Association of America" url="https://biausa.org/" />
          <DonateListItem name="Brain Injury Association of Austin" url="https://braininjuryaustin.org/" />
        </ul>
      </ContentBlock>
    </StandardLayout>
  );
}
