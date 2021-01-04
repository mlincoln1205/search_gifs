// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: true,
      counter: 0
    };
  }

  handleClick = () => {
    //TODO Change the State
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : null } onClick={this.handleClick}>
      Hello {this.props.name} {this.state.counter}
      </div>
    )
  }
}
