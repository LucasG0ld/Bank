import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Account from "../components/account/account";
import AccountHeader from "../components/accountHeader/accountHeader";
import React, { useEffect } from 'react';

function Utilisateur() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/sign-in');
      }
    }, [isLoggedIn, navigate]);

    return (
        <div className="page-container">
            <Navigation />
            <main className="main bg-dark">
            <AccountHeader />
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" desc="Available Balance"/>
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" desc="Available Balance"/>
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" desc="Current Balance"/>
            </main>
            <Footer />
        </div>
    )
}

export default Utilisateur;