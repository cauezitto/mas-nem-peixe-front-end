import React from 'react'
import banner from '../../assets/bannerHome1.png'

import {
    Container
} from './styles.js'

export default function Banner({height}) {
    return (
        <Container height = {height} >
            <img src = {banner}/>
        </Container>
    )
}
