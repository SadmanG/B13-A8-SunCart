import Navbar from "@/components/shared/Navbar";

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
        </>
    );
};

export default MainLayout;