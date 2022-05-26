import ContactForm from "./../components/ContactForm";
import Footer from "./../components/Footer";
import Header from "./../components/Header";

const Contact = () => {
  return (
    <>
      <Header border={true} />
      <div className="contact-page container">
        <h2 className="title">Contact Us</h2>

        <p className="contact-page__description">
          Say hello send your us though about our product or share your ideas
          with our Teams
        </p>
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
