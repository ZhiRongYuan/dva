import React from 'react';
import Header from './Header';
import SiteLogo from './SiteLogo';
import TabMenu from './TabMenu';


const AppHeader = () => {
  return (
    <Header>
      <SiteLogo title="猫茂商场" />
      <TabMenu />
      <Header.Right>
        <div>Test</div>
      </Header.Right>
    </Header>
  );
};

export default AppHeader;
