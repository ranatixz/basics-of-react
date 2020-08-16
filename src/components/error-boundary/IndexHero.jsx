import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'
export class IndexHero extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Hero heroName="batman"/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName="superman"/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName="joker"/>
                </ErrorBoundary>  
            </div>
        )
    }
}

export default IndexHero
