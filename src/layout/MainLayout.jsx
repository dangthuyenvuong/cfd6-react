import { Footer, Header, Nav, PopupLogin } from "../component";

export default function MainLayout({ children }) {
    return (
        <div className="App">
            <Header />
            <Nav />
            <PopupLogin />
            {children}
            <Footer />
        </div>
    )
}