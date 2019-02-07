import React, { ReactNode } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

interface IProps {
    children: ReactNode;
}

const Layout = (props: IProps) => (
    <div>
        {/* <Header /> */}
        <main>{props.children}</main>
        {/* <Footer /> */}
    </div>
);

export default Layout;
