import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

const faqs = [
  { q: 'How do I adopt a pet?',            a: 'Browse our adoption page, find a pet you love, and click "Adopt". You\'ll need to create a free account and fill out a short adoption form. Our team will review and get back to you within 24 hours.' },
  { q: 'Is adoption free?',                a: 'Many pets on PawHaven are available for free adoption. Some sellers may charge a small fee to cover vaccination and health check costs. The listing will clearly show if there\'s a fee.' },
  { q: 'How do I become a seller?',        a: 'Create a free account, go to the Sellers page, and click "Become a Seller". You\'ll need to verify your identity and agree to our seller guidelines. Once approved, you can list pets immediately.' },
  { q: 'Are the sellers verified?',        a: 'Yes. Every seller on PawHaven goes through an identity verification process. We also collect reviews from buyers to maintain quality and trust on our platform.' },
  { q: 'What if I have issues after adoption?', a: 'Our support team is available Monday to Friday, 9am–6pm. You can reach us via the Contact page or email us at hello@pawhaven.com.' },
  { q: 'Can I return a pet after adoption?',    a: 'We understand circumstances can change. Please contact us within 30 days if you\'re unable to keep your pet. We\'ll work with you to find the best solution for both you and the animal.' },
  { q: 'Are pets vaccinated before listing?',   a: 'All pets listed by verified sellers must have up-to-date vaccinations. Health certificates are required for listing. Individual rescue pets may vary — check the listing details for specifics.' },
];

function FAQPage() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Frequently Asked Questions ❓</h1>
        <p>Find answers to the most common questions about PawHaven.</p>
      </div>

      <section className="faq-section">
        {faqs.map(item => (
          <div className="faq-item" key={item.q}>
            <div className="faq-question">{item.q}</div>
            <div className="faq-answer">{item.a}</div>
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '18px' }}>Still have questions?</p>
          <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FAQPage;
