import React from 'react';
import { Button, Table } from 'react-bootstrap';

const detailHeader = (props) => {
  return(
    <div>
      <span><h4>Capital:    {props.capital}</h4></span>
      <h4>Language</h4>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Native Name</th>
          </tr>
        </thead>
        <tbody>
        {props.countryLanguages.map((lang, i) =>
          <tr key={i}>
            <td>{++i}</td>
            <td>{lang.name}</td>
            <td>{lang.nativeName}</td>
          </tr>
        )}
        </tbody>
      </Table>

      <h4>Currency</h4>
      <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Code</th>
              <th>Symbol</th>
            </tr>
          </thead>
          <tbody>
          {props.countryCurrency.map((curr, i) =>
            <tr key={i}>
              <td>{++i}</td>
              <td>{curr.name}</td>
              <td>{curr.code}</td>
              <th>{curr.symbol}</th>
            </tr>
          )}
          </tbody>
        </Table>

        <h4>Regional Member of </h4>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Acronym</th>
            </tr>
          </thead>
          <tbody>
          {props.countryMemberOf.map((member, i) =>
            <tr key={i}>
              <td>{++i}</td>
              <td>{member.name}</td>
              <td>{member.acronym}</td>
            </tr>
          )}
          </tbody>
        </Table>

        <h4>Time Zones </h4>
        {props.countryTimeZones.map((zone, i) =>
          <p key={i}>{zone}</p>
        )}
    </div>
  )
};
export default detailHeader;
