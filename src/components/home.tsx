import * as React from 'react'
import { WithStyles, withStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow' // 追加
import Card from '@material-ui/core/Card' // 追加
import CardContent from '@material-ui/core/CardContent' // 追加
import CardActions from '@material-ui/core/CardActions' // 追加

import { HomeActions } from '../containers/home' // 追加
import { AppState } from '../store' // 追加

import { hocFactory } from '../helpers/hocHello'

interface OwnProps {}

const styles = (theme: Theme) => {
    return createStyles({
        layout: {
            marginTop: 100,
            padding: theme.spacing.unit * 2,
            maxWidth: 1200,
            [theme.breakpoints.up(1200)]: {
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        // 追加
        card: {
            width: 275,
            height: 300,
        }
  })
}

// 修正
type Props = OwnProps & AppState & HomeActions & WithStyles<typeof styles>

const HomeComponent: React.SFC<Props> = (props: Props) => {
  const { classes } = props

  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color='inherit'>Hello World</Typography>
            </Toolbar>
        </AppBar>
      <div className={classes.layout}>
        <Typography>this is home component</Typography>
        <Button onClick={props.handleOpen}>Open</Button> {/* 修正 */}

        {/* Card 追加 */}
        <Grow in={props.card.open}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography>this is card.</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={props.handleClose}>Close</Button>
                </CardActions>
            </Card>
        </Grow>
      </div>
    </div>
  )
}

export default withStyles(styles)(hocFactory(HomeComponent))
