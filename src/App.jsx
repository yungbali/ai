import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Auth Screens
import SplashScreen from './pages/auth/SplashScreen';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import VerifyAccount from './pages/auth/VerifyAccount';
import ForgotPassword from './pages/auth/ForgotPassword';
import CreateNewPassword from './pages/auth/CreateNewPassword';

// Onboarding Screens
import PersonalInformation from './pages/onboarding/PersonalInformation';
import FingerPrintScanner from './pages/onboarding/FingerPrintScanner';
import PreferredLanguage from './pages/onboarding/PreferredLanguage';
import Reason from './pages/onboarding/Reason';

// Main Screens
import Home from './pages/main/Home';
import Chat from './pages/main/Chat';
import History from './pages/main/History';
import Settings from './pages/main/Settings';
import Notifications from './pages/main/Notifications';

// Subscription Screens
import Subscription from './pages/subscription/Subscription';
import PaymentMethod from './pages/subscription/PaymentMethod';
import AddNewCard from './pages/subscription/AddNewCard';
import ThankYou from './pages/subscription/ThankYou';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<VerifyAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-password" element={<CreateNewPassword />} />

        {/* Onboarding Routes */}
        <Route path="/personal-info" element={<PersonalInformation />} />
        <Route path="/fingerprint" element={<FingerPrintScanner />} />
        <Route path="/language" element={<PreferredLanguage />} />
        <Route path="/reason" element={<Reason />} />

        {/* Main App Routes */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="history" element={<History />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Subscription Routes */}
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/add-card" element={<AddNewCard />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;