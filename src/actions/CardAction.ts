import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const CardActions = {
  open: actionCreator<void>('USER_OPEN_CLICK'),
  close: actionCreator<void>('USER_CLOSE_CLICK'),
}
