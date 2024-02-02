import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import { useMediaQuery } from 'react-responsive';

interface FacebookWidgetProps {
  isLargeScreen: boolean
}

const FacebookWidget = () => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return (
    <div className="m-3">
      <h6 className="text-secondary text-uppercase">Connect on Facebook</h6>
      <FacebookProvider appId={`${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}`}>
        <Page
          href="https://web.facebook.com/profile.php?id=100064330643873"
          // href="https://web.facebook.com/variableglobal"
          // href="https://web.facebook.com/mercy.tabernacle.9/"
          // href="https://web.facebook.com/MERCYWORLDOUTREACHINC/"
          tabs="timeline"
          width={isLargeScreen ? "500" : "400"}
          height={isLargeScreen ? "500": "400"}
        />
      </FacebookProvider>
    </div>
  );
};

export default FacebookWidget;
