import React from 'react';

// import Header from 'components/Header/Header';
// import Footer from 'components/Footer/Footer';

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props): React.ReactElement<Props> => (
    <div>
        {/* <Header /> */}
        <main>{props.children}</main>
        {/* <Footer /> */}
    </div>
);

export default Layout;
