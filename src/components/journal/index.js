import { connect } from 'react-redux';
import Journal from './journal.component';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            // dispatch(actionCreator)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
