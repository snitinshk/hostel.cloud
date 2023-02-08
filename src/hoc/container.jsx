import Header from '../component/header';
import Footer from '../component/footer';

function Container({ children, hocClass }) {

    return (
        <div className={`wrapper ${hocClass}`}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Container