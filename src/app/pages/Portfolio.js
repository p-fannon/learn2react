import React from 'react'
import styled from 'styled-components'

//Import components
import Container from './../components/Container'
import Link from './../components/Link'
import Section from './../components/Section'
import { Heading, Subheading, Text } from './../components/Typography'

const PortfolioWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
`

const PortfolioGrid = styled.div`
padding-bottom: 32px;
display: flex;
flex-wrap: wrap;
`

const PortfolioItem = styled.a`
display: block;
cursor: pointer;
width: 100%;
transition: opacity .25s ease-in-out;

&:focus,
&:hover {
    opacity: .5
}

@media (max-width: 767px) {
    &:nth-child(n+2) {
        margin-top: 16px;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    width: calc(50% - 32px);

    &:nth-child(odd) {
        margin-right: 32px;
    }

    &:nth-child(even) {
        margin-left: 32px;
    }

    &nth-child(n+3) {
        margin-top: 48px;
    }
}

@media (min-width: 992px) {
    width: calc(33.33333% - 32px);

    &:first-child,
    &:nth-child(4),
    &:nth-child(7) {
      margin-right: 32px;
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(8), {
      margin-left: 16px;
      margin-right: 16px;
    }

    &:nth-child(3),
    &:nth-child(6),
    &:last-child {
      margin-left: 32px;
    }

    &:nth-child(n+4) {
      margin-top: 24px;
    }
}
`

const PortfolioItemThumbnail = styled.img`
max-width: 100%;
object-fit: contain;
`

