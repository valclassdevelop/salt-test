import React from 'react';
import dummy from '../assets/images/dummy.png';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Content2({news}) {
  return (
    <>
    {/* Component2 contents */}
      <section className="content2" id="people">
        <div className="content-left">
          <div className="title-content-left">
            <h2>People</h2>
            <small>View all</small>
          </div>
          <div className="content-left-videos">
          <div className="videos-top">
              <div className="videos-top-left">
                  <div className="child-videos">
                  {
                    news.length && (
                      <img src={news[5]?.largeImageURL} alt="image" />
                    )
                  }
                  </div>
                </div>

              <div className="videos-top-right">
                <div className="child-videos">
                {
                    news.length && (
                      <img src={news[6]?.largeImageURL} alt="image" />
                    ) 
                }
                </div>
                <div className="child-videos">
                {
                    news.length && (
                      <img src={news[7]?.largeImageURL} alt="image" />
                    ) 
                }
                </div>
              </div>

            </div>

            <div className="videos-bottom">
                <div className="child-videos">
                {
                    news.length && (
                      <img src={news[8]?.largeImageURL} alt="image" />
                    ) 
                }
                </div>
                <div className="child-videos">
                {
                    news.length && (
                      <img src={news[9]?.largeImageURL} alt="image" />
                    ) 
                }
                </div>
                <div className="child-upload-videos">
                <FontAwesomeIcon className="add-icon" icon={faPlus} />
                <h4>Upload <br /> Your Own Video</h4>
                </div>
            </div>
          </div>
        </div>
        <div className="content-right" id='channels'>
          <div className="title-content-right ff">
            <h2>Channels</h2>
            <small>Browse all channels</small>
          </div>
          <div className="list-content-right">
          {
              news.map((data, index) => {
                if(index > 5 && index < 16) {
                  return (
                    <div className="child-list" key={index}>
                      <img src={data.largeImageURL} alt={data.title} />
                      <small>{data.tags}</small>
                  </div>
                  )
                }
              })
            }
          </div>
        </div>
      </section>
      {/* End component2 contents */}
    </>
  );
}
