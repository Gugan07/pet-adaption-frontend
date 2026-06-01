import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AdoptionPage from './AdoptionPage';
import SellersPage from './SellersPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ForgotPage from './ForgotPage';
import AddPetPage from './AddPetPage';
import FAQPage from './FAQPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
        <Route path="/sellers" element={<SellersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login"   element={<LoginPage />} />
        <Route path="/signup"  element={<SignupPage />} />
        <Route path="/forgot"  element={<ForgotPage />} />
        <Route path="/addpet"  element={<AddPetPage />} />
        <Route path="/faq"     element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms"   element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
