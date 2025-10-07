import './App.css';
import Header from './components/Header';
import bgImage from './assets/bg-friendly-lg.jpg';

export default function App() {
  return (
    <>
      <div className="antialiased min-h-dvh bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="backdrop-grayscale-25 backdrop-brightness-50 min-h-dvh p-5 flex flex-col justify-end">
          <Header />
          <main className="font-serif text-shadow-lg">
            <h1 className="text-5xl md:text-6xl max-w-md mb-5">Together, We Heal Our Brains</h1>
            <div className="text-xl mb-5 max-w-4xl">We are a peer-driven community for brain injury survivors and their loved ones. We provide connection, encouragement, and shared strength to help every member move forward together. </div>
            <div className="py-5">
              <a href="#" className="rounded bg-sky-600 p-4 text-xl text-white hover:bg-sky-500">
                Find Your Peer &rarr;
              </a>
            </div>
          </main>
        </div>
      </div>
      <section>section</section>
      <footer>
        footer
      </footer>
    </>
  )
}
