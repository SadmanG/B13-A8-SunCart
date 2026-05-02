import Banner from '@/components/shared/Banner';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const HomeLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <main className="bg-[#F3E308]">{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;