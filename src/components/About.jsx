import StandardLayout from './layouts/Standard';
import imgJessHeadshot from '../assets/jess-headshot.jpg';
import imgJessCooking from '../assets/jess-cooking.jpg';
import imgJessWedding from '../assets/jess-wedding.jpg';
import imgGumby from '../assets/gumby.jpg';
import imgJessPatagonia from '../assets/jess-patagonia.jpg';
import imgJessMexico from '../assets/jess-mexico.jpg';

function AboutSection({ title, children, img, showSeparator = true }) {
  return (
    <>
      <div className="max-w-5xl mx-auto py-10 px-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className={"flex-1" + (img.isLeft ? "" : " lg:order-last")}>
            <div className="aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
              <img
                alt={img.alt}
                src={img.src}
                className="h-full w-full object-cover object-center"
                />
            </div>
          </div>

          <div className="flex-1 max-w-md lg:max-w-none">
            <h3 className="text-2xl font-semibold leading-7 text-sky-500">
              {title}
            </h3>
            <div className="mt-6 space-y-6 text-base leading-7 text-stone-200">
              {children}
            </div>
          </div>
        </div>
      </div>
      {showSeparator && <div className="border-1 border-stone-600 w-full max-w-xs mx-auto"></div>}
    </>
  );
}

function ImageContainer({ img }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
      <img
        alt={img.alt}
        src={img.src}
        className={"h-full w-full object-cover " + (img.position ? img.position : "object-center")}
        />
        <p className="absolute backdrop-blur-xs backdrop-brightness-60 px-2 py-1 rounded text-shadow-lg bottom-2 left-2 text-sm text-stone-300">{img.alt}</p>
    </div>
  );
}

export default function About() {
  return (
    <StandardLayout>
      <div className="bg-stone-900 mt-20">
        <div className="max-w-5xl mx-auto py-10 px-6">
          <h2 className="text-4xl sm:text-6xl font-serif text-shadow-lg">
            Meet Jess
          </h2>
          <p className="text-lg italic leading-6 text-stone-400">
            Founder and heart of Jess's Brain Group
          </p>
        </div>
      </div>

      <AboutSection
        title="Her Journey"
        img={{ alt: "Jess outside", src: imgJessHeadshot, isLeft: true }}
      >
        <p>
          In December of 2015, Jess experienced a life-altering event when she suffered
          a traumatic brain injury due to a ruptured aneurysm.
        </p>
        <p>
          She underwent emergency brain surgery to place a clip on the aneurysm. After
          a month long stay in the ICU she returned home to begin the long road of recovery.
        </p>
        <p>
          Over the years she has learned to navigate life with the challenges of a brain injury.
          Now she is passionate about helping others who are on similar journeys.
        </p>
      </AboutSection>

      <AboutSection
        title="Her Loves"
        img={{ alt: "Jess cooking a meal", src: imgJessCooking, isLeft: false }}
      >
        <p>
          Jess loves family, friends, and food. She is happiest when she is
          surrounded by loved ones, sharing a meal and laughter.
        </p>
        <p>
          She also enjoys meeting new people, exploring new places, and travelling
          whenever she can.
        </p>
      </AboutSection>

      <div className="max-w-5xl mx-auto py-10 px-6">
        <h3 className="text-2xl font-semibold leading-7 text-sky-500 mb-6">
          Life Since Brain Injury
        </h3>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <ImageContainer img={{ alt: "Jess with her father at her wedding", src: imgJessWedding }} />
          <ImageContainer img={{ alt: "Jess with her husband in Patagonia", src: imgJessPatagonia, position: "object-[40%]" }} />
          <ImageContainer img={{ alt: "Jess with her sister in Mexico", src: imgJessMexico, position: "object-[10%]" }} />
          <ImageContainer img={{ alt: "Jess's dog Gumby", src: imgGumby }} />
        </div>
      </div>
    </StandardLayout>
  );
}
