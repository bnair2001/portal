import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import ArchiveComponent from '../../features/archive/ArchiveDashboard/ArchiveDashboard';
import ModalManager from '../../features/modals/ModalManager';
import ArchiveDetailed from '../../features/archive/ArchiveDetailed/ArchiveDetailedPage';
import ArchiveForm from '../../features/archive/ArchiveForm/ArchiveForm';

class App extends Component {
  render() {
    return (
      <div>
       < ModalManager/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/archives" component={ArchiveComponent} />
                  <Route path="/archive/:id" component={ArchiveDetailed} />
                  <Route path="/createArchive" component={ArchiveForm} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manageEvent/:id" component={EventForm} />
                  <Route path="/manageArchive/:id" component={ArchiveForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
