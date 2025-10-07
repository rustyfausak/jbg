import Header from './../Header';
import Footer from './../Footer';

export default function Standard({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
