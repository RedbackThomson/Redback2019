import {Component} from "react";
import {withRouter, RouteComponentProps} from "react-router";

class ScrollToTop extends Component<RouteComponentProps> {
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return this.props.children;
    }
  }

  export default withRouter(ScrollToTop);