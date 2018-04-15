import React from 'react'

const Form = () => (
  <form className="section has-text-centered column is-8 is-offset-2">
    <p className="content">Form title</p>

    <div className="columns">
      <div className="column is-half">
        <div className="field is-fullwidth">
          <div className="control">
            <input className="input" type="text" placeholder="First name" />
          </div>
        </div>
      </div>
      <div className="column is-half">
        <div className="field is-fullwidth">
          <div className="control">
            <input className="input" type="text" placeholder="Last name" />
          </div>
        </div>
      </div>
    </div>

    <div className="columns">
      <div className="column is-half">
        <div className="field is-fullwidth">
          <div className="control">
            <input className="input" type="email" placeholder="Email address" />
          </div>
        </div>
      </div>
      <div className="column is-half">
        <div className="field">
          <div className="control">
            <div className="select is-fullwidth">
              <select selected="City">
                <option>City</option>
                <option>Auckland</option>
                <option>Wellington</option>
                <option>Christchurch</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="column is-half is-offset-3">
      <input type="submit" className="button is-success is-medium is-fullwidth" />
    </div>

  </form>
)

export default Form
