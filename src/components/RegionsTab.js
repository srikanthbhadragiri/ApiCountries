import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Countries from './Countries';
import NavBarMain from './NavBarComp';
import './RegionsTab.css';

class RegionsTab extends Component {
    render() {
      return(
        <div>
          <NavBarMain />
          <Tabs defaultActiveKey={1} id="regions-tab">
          		<Tab eventKey={1} title="Asia">
                <div className="RegionsTabDiv">
                  <Countries region="asia"/>
                </div>
              </Tab>
          		<Tab eventKey={2} title="America">
                <div className="RegionsTabDiv">
                  <Countries region="americas"/>
                </div>
              </Tab>
          		<Tab eventKey={3} title="Africa">
                <div className="RegionsTabDiv">
                  <Countries region="africa"/>
                </div>
              </Tab>
          		<Tab eventKey={4} title="Europe">
                <div className="RegionsTabDiv">
                  <Countries region="europe"/>
                </div>
              </Tab>
              <Tab eventKey={5} title="Oceania">
                <div className="RegionsTabDiv">
                  <Countries region="oceania"/>
                </div>
              </Tab>
          </Tabs>
        </div>
      );
    }
}

export default RegionsTab;
