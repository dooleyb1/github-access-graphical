import React, { Component } from 'react';
import '../css/RepoGraph.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';

class RepoGraph extends Component {

  constructor (props) {
    super(props);

    this.state = {
      graph_data: [],
    };

    this.getGraphData = this.getGraphData.bind(this);
  }

  async getGraphData() {

    var data = [];

    for(var node in this.props.commitData){
      data.push({x: new Date(node), y: this.props.commitData[node]})
    }

    this.setState({graphReady: true})
    return data;
  }

  render () {

    if(!this.state.graphReady){
      //TODO errors here
      this.getGraphData()
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
          <LineSeries data={this.getGraphData()} />
          </XYPlot>
        </div>
    }
    )
  }
}

export default RepoGraph;
