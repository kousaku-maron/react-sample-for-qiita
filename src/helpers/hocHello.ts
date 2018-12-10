import * as React from 'react'
import { lifecycle } from 'recompose'

export const hocFactory = (component: React.SFC) => {
    const wrappedComponent = lifecycle({
        componentDidMount() {
            console.log('Hello')
        },
    })(component);

    return wrappedComponent
}
