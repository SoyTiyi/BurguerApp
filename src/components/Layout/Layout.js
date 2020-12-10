import React from 'react';
import Aux from '../../hoc/Aux';
import {Content} from '../../style/componentsStyle';
const Layout = props => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Content>
            {props.children}
        </Content>
    </Aux>
);

export default Layout;