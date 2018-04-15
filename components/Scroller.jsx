import React from 'react'

import {Carousel} from 'react-responsive-carousel'
import css from 'react-responsive-carousel/lib/styles/carousel.min.css'

const Scroller = () => (<div className="section column is-8 is-offset-2">
  <Carousel showStatus={false} showIndicators={false} showThumbs={false} centerMode centerSlidePercentage={30}>
    <div>
      <img src="./images/silvereye.jpg"/>
    </div>
    <div>
      <img src="./images/kea.jpg"/>
    </div>
    <div>
      <img src="./images/tui.jpg"/>
    </div>
    <div>
      <img src="./images/penguin.jpg"/>
    </div>
  </Carousel>
</div>)

export default Scroller
