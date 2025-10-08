import Banner from './Banner';
import StandardLayout from './layouts/Standard';

export default function Donate() {
  return (
    <StandardLayout>
      <Banner
        title="Support Our Mission"
        subtitle="Your contributions help us provide resources and support to brain injury survivors."
      />
    </StandardLayout>
  );
}
