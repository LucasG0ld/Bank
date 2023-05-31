import Navigation from "../components/navigation/navigation";
import Form from "../components/form/form";
import Footer from "../components/footer/footer";

function Connexion() {
    return ( 
        <div className="page-container">
            <Navigation />
            <main className="main bg-dark">
                <Form />
            </main>
            <Footer />
        </div>
    )
}

export default Connexion