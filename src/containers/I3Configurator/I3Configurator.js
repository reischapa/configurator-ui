import React from 'react';
import I3Configurator from "../../components/I3Configurator/index";

export default class I3ConfiguratorPage extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <div style={{margin: '0 auto', maxWidth: "800px"}}>
          <I3Configurator/>
        </div>
      </div>
    )
  }
}