import Navigation from "../components/navigation/navigation";
import Header from "../components/header/header";
import Feature from "../components/feature/feature";
import Footer from "../components/footer/footer";

import IconChat from "../assets/icon-chat.png";
import IconMoney from "../assets/icon-money.png";
import IconSecurity from "../assets/icon-security.png";

function Accueil() {
    return (
        <main>
            <Navigation />
            <Header />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature img={IconChat} alt="Icône Chat" title="You are our #1 priority" desc="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."/>
                <Feature img={IconMoney} alt="Icône Chat" title="More savings means higher rates" desc="The more you save with us, the higher your interest rate will be!"/>
                <Feature img={IconSecurity} alt="Icône Chat" title="Security you can trust" desc="We use top of the line encryption to make sure your data and money
                is always safe."/>
            </section>
            <Footer />
        </main>
    );
};

export default Accueil;