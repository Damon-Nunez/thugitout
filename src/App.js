import React from 'react';
import {Row,Col,Container} from 'react-bootstrap'
import './App.css';
import thug from './images/thug.png'

function App() {
  return (
    <div className='page'> 
      <Container>
        <div id="stars"></div>
        <div id='stars2'></div>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h1 className='title'> A poem by Damon J. Nunez </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className='textBg'>
            <h1 className='poemTitle'>Title: "Conquering Solitude"</h1>
          </div>
          </Col>
        </Row>
        <Row>
            <Col sm={12} md={12} lg={12}>
                <div className='storycol'>
                    <p className='paragraph'>
                        <strong>
                        In the depths of solitude, he stands alone,
A man in search of purpose, a place to call his own,
In the quiet of his thoughts, he's lost and full of doubt,
Yearning for connection, he's ready to "thug that shit out."
                    </strong>
                    <p className='paragraph'>
                        <strong>
                        Beneath his tough exterior, a heart yearns to be heard,
Yet societal expectations weigh heavy, like a burden undeserved,
He's been told to hide his feelings, to put on a brave pout,
But there's strength in vulnerability, in "thugging that shit out."
                        </strong>
                    </p>
                    <p className='paragraph'><strong>
                    With every step he takes, towards a path unknown,
He'll find it's not weakness, but courage he has shown,
To break the chains of loneliness, to end the silent drought,
Discovering inner power, through "thugging that shit out."
                        </strong></p>
                    <p className='paragraph'>
                        <strong>
                        No need to hide behind a mask, no need to fake or pout,
The cure for male loneliness, is to face it, without a doubt,
In the company of friends, in love there is no drought,
Find healing and connection by "thugging that shit out."
                        </strong>
                    </p>
                    <p className='paragraph'>
                        <strong>
                        So, let it be known, in the end, without a doubt,
Male loneliness can be conquered when we "thug that shit out."
                        </strong>
                    </p>
                    <img className='col2Image' src={thug} alt=''/>
                    <p className='specialParagraph'><strong>
                      Yes. Yes it is.
                </strong> </p>

                    </p>
                    <p className='paragraph'>
                      <strong>
                        Thank you for reading. Stay Strong Gentleman. Until Next Time.
                      </strong>
                    </p>
                </div>
                </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
