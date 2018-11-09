import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isLoadingData } from '../reducers/status';
import MainMap from '../components/MainMap';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    groups: state.groups.groups,
    pins: state.pins.pins,
    isLoading: isLoadingData(state),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMap);
