import React, { Component } from 'react';
import '../css/RepoGraph.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';
const MSEC_DAILY = 86400000;

class RepoGraph extends Component {

  constructor (props) {
    super(props);

    this.state = {
      graph_data: [],
    };
  }

  async componentDidMount() {

    var data = [];

    for(var node in this.props.commitData){
      data.push({x: new Date(node), y: this.props.commitData[node]})
    }
    console.log(data)
    this.setState({graph_data: data})
  }


  render () {

    const timestamp = new Date('2018-10-21T10:15:21Z').getTime();

    const data = [
      {x: timestamp, y: 8},
      {x: timestamp + MSEC_DAILY * 2, y: 8}
    ];

    return (
      <div>
      <XYPlot xType="time" height={300} width= {500}>
      <XAxis title="Date"/>
      <YAxis title="Number of Commits"/>
      <LineSeries data={this.state.graph_data} />
      </XYPlot>
      </div>
    )
  }
}

export default RepoGraph;
