import React, { Component } from 'react';
import '../css/RepoGraph.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';

class RepoGraph extends Component {

  render () {

    if(!this.props.graphData){
      return(<div></div>)
    } else{
      return (
        <div>
          <XYPlot
            xType="time"
            height={300}
            width= {500}
          >
          <XAxis
            title="Date"
            tickLabelAngle={-90}
          />
          <YAxis title="Number of Commits"/>
          <LineSeries data={this.props.graphData} />
          </XYPlot>
        </div>
      )
    }
  }
}

export default RepoGraph;
