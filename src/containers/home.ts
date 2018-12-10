import { Action } from 'typescript-fsa'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { CardActions } from '../actions/CardAction'
import HomeComponent from '../components/home'

export interface HomeActions {
  handleOpen: () => Action<void>
  handleClose: () => Action<void>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleOpen: () => dispatch(CardActions.open()),
    handleClose: () => dispatch(CardActions.close()),
  }
}

const mapStateToProps = (appState: AppState) => {
  return Object.assign({}, appState)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)
