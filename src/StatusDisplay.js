import React from 'react';

class StatusDisplay extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.active);
    this.state = {
      date: new Date(),
      name: props.name,
      title: props.title,
      imageUri: props.imageUri,
      active: props.active,
      status: props.status,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.fetchData(), 1000);
  }

  fetchData() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <header className="StatusDisplay">
        <img src={this.state.imageUri} alt="logo" />
        <div>
          <h2 className="StatusDisplay__name">
            <svg
              className="StatusDisplay__name__icon"
              width="10px"
              height="10px">
              <circle
                cx="5"
                cy="5"
                r="5"
                fill={this.state.active ? '#00AA00' : '#AA0000'}
              />
            </svg>
            {this.state.name}
          </h2>
          <h5 className="status_info">{this.state.title}</h5>
          <h3 className="status_info">{this.state.status}</h3>
        </div>
      </header>
    );
  }
}

export default StatusDisplay;
