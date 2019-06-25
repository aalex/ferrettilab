import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {index: 0, anim: false};
  }

  index(nextIndex = 0) {
    let index = this.state.index + nextIndex;
    if(index < 0) index = this.props.images.length + index;

    return index % this.props.images.length;
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    setTimeout( () => {
      if(this.state.anim === true) return;
      this.setState({...this.state, anim: true});
      setTimeout( () => {
        this.setState({index: this.index(1), anim: false})
      } , this.props.animationTime);
    }, this.props.displayTime );
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if(this.state.anim === false) this.animate()
  }

  render() {

    const div = (i) => {
      return (
        <div style={{minWidth: "100%", willChange: "transform"}} >
          <img style={{minHeight: "100%", minWidth: "100%"}} src={this.props.images[this.index(i)]} alt={"carousel img "+i}/>
        </div>
      )
    };

    const animate = this.state.anim ? {
      transition: `${this.props.animationTime}ms ease-in-out`,
      transform: "translateX(-100%)",
    } : {};

    return (
      <div style={{...animate, display: 'flex', flexDirection: "row", width: "100%", justifyContent: "center"}}>
        {[-1, 0, 1, 2, 3].map(div)  /*want an odd number of images for justifyContent: center to work correctly*/ }
      </div>
    )
  }
}
