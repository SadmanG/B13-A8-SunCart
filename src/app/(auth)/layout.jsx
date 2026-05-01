import Navbar from '@/components/shared/Navbar';
import { montserrat } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
          <Navbar></Navbar>
          <main>{children}</main>  
        </div>
    );
};

export default AuthLayout;