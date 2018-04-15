import React from 'react'

const Footer = () => (<div className="footer">
  <div className="container column is-8 is-offset-2">
    <div className="columns">

      <div className="column is-two-thirds">
        <span className="icon has-text-info is-large">
          <i className="jam jam-facebook-circle" />
        </span>
        <span className="icon has-text-info is-large">
          <i className="jam jam-instagram-circle" />
        </span>
        <span className="icon has-text-info is-large">
          <i className="jam jam-twitter-circle" />
        </span>
        <p>Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti.</p>
      </div>

      <div className="column is-one-third">
        <p>
          <strong>Main Office</strong>
        </p>
        <p>62 Queen Street</p>
        <p>Suburb</p>
        <p>City</p>
        <br/>
        <p>
          <strong>Contact</strong>
        </p>
        <p>021-12345-56</p>
        <p>
          <a className="has-text-info">email@email.com</a>
        </p>
      </div>

    </div>
  </div>
</div>)

export default Footer
