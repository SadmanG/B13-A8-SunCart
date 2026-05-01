import Navbar from "@/components/shared/Navbar";

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            <main className="bg-[#F3E308]">{children}</main>
        </>
    );
};

export default MainLayout;