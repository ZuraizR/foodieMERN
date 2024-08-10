import React from 'react'

import './OurTeam.css'

const OurTeam = () => {
  return (
    <section className='team-area pt-60 pb-60'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col'>
            <div className='section-title'>
              <span>Best place for friends &amp; family</span>
              <h4>Our Team</h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-sm-6'>
            <div className='single-team'>
              <img src='assets/img/team/team1.jpg' alt='Team Image' />
              <div className='team-content'>
                <h4>
                  jhon doe <span>chief chef</span>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className='single-team'>
              <img src='assets/img/team/team2.jpg' alt='Team Image' />
              <div className='team-content'>
                <h4>
                  jhon doe <span>chief chef</span>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className='single-team'>
              <img src='assets/img/team/team3.jpg' alt='Team Image' />
              <div className='team-content'>
                <h4>
                  jhon doe <span>chief chef</span>
                </h4>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className='single-team'>
              <img src='assets/img/team/team4.jpg' alt='Team Image' />
              <div className='team-content'>
                <h4>
                  jhon doe <span>chief chef</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  {
    /*Team Area End*/
  }
}

export default OurTeam
