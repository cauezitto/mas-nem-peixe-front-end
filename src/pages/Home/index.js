import React from 'react'
import Header from '../../components/Header'
import SearchHeader from '../../components/SearchHeader'
import Banner from '../../components/Banner'
import CTA1 from '../../components/CTAhome'
import Sobre from '../../components/SobreButton'


import camisetas from '../../assets/camisetasCTA.png'
import almofadas from '../../assets/almofadasCTA.png'
import canecas from '../../assets/canecasCTA.png'
import Divisor from '../../components/DivisorHeader'
import ProductCard from '../../components/ProductCard'


import {
    ProductsCardContainer
} from './styles'

import productImage from '../../assets/caneca.png'
import camisetasImage from '../../assets/camiseta2.png'


const Canecas = [
    {
        id: 1,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: productImage
    },
    {
        id: 2,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: productImage
    },
    {
        id: 3,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: productImage
    },
    {
        id: 4,
        title: 'Mas Nem Peixe?',
        price: '34.00',
        category: 'Caneca',
        image: productImage
    },
]

const Camisetas = [
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: camisetasImage
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: camisetasImage
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: camisetasImage
    },
    {
        id: 1,
        title: 'E As Proteinas?',
        price: '40.00',
        category: 'Camiseta',
        image: camisetasImage
    },
    
]

export default function Home() { 
    return (
       <>
       <Header/>
       <SearchHeader/>
       <Banner height = {300}/>
       <CTA1 items = {[camisetas, almofadas, canecas]} />
       <Sobre />
       
       <Divisor title = 'CAMISETAS' />
        <ProductsCardContainer>
            {
                Camisetas.map(camiseta => (
                    <ProductCard key ={camiseta.id} product = {camiseta}  />
                ))
            }
        </ProductsCardContainer>

        <Divisor title = 'CANECAS' />
        <ProductsCardContainer>
            {
                Canecas.map(caneca => (
                    <ProductCard key = {caneca.id} product = {caneca}  />
                ))
            }
        </ProductsCardContainer>
       </>
    )
}
