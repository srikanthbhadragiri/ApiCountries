import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Modal, Button } from 'react-bootstrap';
import api from '../utilities/Api';
import DetailHeader from './Modalwindow/DetailHeader';
import DetailBody from './Modalwindow/DetailBody';

class Countries extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      countriesAsia : [],
      selectedCountry : {},
      countryLanguages : [],
      countryCurrency : [],
      countryMemberOf : [],
      countryTimeZones : [],
      showDetails : false,
      region : props.region,
    }
  }

  componentDidMount(){
    console.log(this.state.region);
    api.getCountries(this.state.region).then( (res) => {
      this.setState({
        countriesAsia: res,
      });
      // console.log('state : ',this.state.countriesAsia);
    })
  }

  showDetails = (country) => {
    // console.log('selected Country',country);
    this.setState(
      {
        showDetails : true,
        selectedCountry : country,
        countryLanguages : country.languages,
        countryCurrency : country.currencies,
        countryMemberOf : country.regionalBlocs,
        countryTimeZones: country.timezones
      }
    );
  }

  close = () => {
    this.setState({ showDetails: false });
  }

  render() {
    return(
      <div>
        <Grid>
          <Row className="show-grid">
          {this.state.countriesAsia.map( (country) =>
              <Col xs={6} md={3} key={country.name}>
                <div className="panel-group">
                  <div className="panel panel-default">
                    <div className="panel-heading clearfix">
                      <h4 className="panel-title pull-left">{country.name}</h4>
                      <div className="btn-group pull-right">
                        {country.regionalBlocs.map( (block) =>
                          block.acronym === 'SAARC' ?
                          <a key={block.acronym} title={block.acronym}><Glyphicon glyph="star" style={{color:"red"}} /></a> :
                            block.acronym === 'EEU' ?
                            <a key={block.acronym} title={block.acronym}><Glyphicon key={block.acronym} glyph="star" style={{color:"blue"}} /></a> :
                              block.acronym === 'AL' ?
                              <a key={block.acronym} title={block.acronym}><Glyphicon key={block.acronym} glyph="star" style={{color:"green"}} /></a> :
                                <a key={block.acronym} title={block.acronym}><Glyphicon key={block.acronym} glyph="star" style={{color:"purple"}} /></a>
                        )}
                      </div>
                    </div>
                    <div className="panel-body">
                      <p>{country.capital === '' ? country.name : country.capital}</p>
                        <div className="row">
                          <div className="col-md-12 col-md-offset-2">
                            <a href="#"><img src={country.flag} width="70px" height="50px" onClick={this.showDetails.bind(this,country)} /></a>
                            <Button bsStyle="link"
                              onClick={this.showDetails.bind(this,country)}>
                              > >
                            </Button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </Col>
              )}
          </Row>
        </Grid>
        <Modal show={this.state.showDetails} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              <DetailHeader name={this.state.selectedCountry.name}
                nativeName={this.state.selectedCountry.nativeName}/>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DetailBody capital={this.state.selectedCountry.capital}
              countryLanguages={this.state.countryLanguages}
              countryCurrency={this.state.countryCurrency}
              countryMemberOf={this.state.countryMemberOf}
              countryTimeZones={this.state.countryTimeZones}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Countries;
