import React from 'react'
import './CircularProgressBar.css'

const CircularProgressBar = () => {
    return (
        <div className='CircularProgressBar'>
            <div className='CircularProgressBar-container'>
                <div className='cardCircularProgress'>
                    <div className='boxCircularProgress'>
                        <div>
                            <div className='percent'>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className='number'>
                                    <h2>90<span>%</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='textCircularProgress'>
                        Html
                    </div>
                </div>

                <div className='cardCircularProgress'>
                    <div className='boxCircularProgress'>
                        <div>
                            <div className='percent'>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className='number'>
                                    <h2>82<span>%</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='textCircularProgress'>
                        CSS
                    </div>
                </div>

                <div className='cardCircularProgress'>
                    <div className='boxCircularProgress'>
                        <div>
                            <div className='percent'>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className='number'>
                                    <h2>65<span>%</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='textCircularProgress'>
                        Javascript
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircularProgressBar
