import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Page from './pages/Page';

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('');

  return (
    <IonApp>
      <IonReactRouter>
        <ApolloProvider>
          <IonSplitPane contentId="main">
            <Menu selectedPage={selectedPage} />
            <IonRouterOutlet id="main">
              <Route
                path="/page/:name"
                render={props => {
                  setSelectedPage(props.match.params.name);
                  return <Page {...props} />;
                }}
                exact
              />
              <Route
                path="/"
                render={() => <Redirect to="/page/Inbox" />}
                exact
              />
            </IonRouterOutlet>
          </IonSplitPane>
        </ApolloProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
