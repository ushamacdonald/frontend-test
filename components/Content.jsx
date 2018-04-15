import React from 'react'

const Content = () => (
  <div className="section column is-8 is-offset-2">
    <div className="columns content">
      <div className="column is-half">
        <img src="./images/nzbush.jpg" />
        <h5 className="subtitle">NZ Bush</h5>
        <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet.</p>
        <a className="has-text-info">Some link</a>
      </div>
      <div className="column is-half">
        <img src="./images/bluesprings.jpg" />
        <h5 className="subtitle">Blue Springs</h5>
        <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus.</p>
        <a className="has-text-info">Some link</a>
      </div>
    </div>
  </div>
)

export default Content
