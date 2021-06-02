import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Word = (data) => {
  const row = data !== null ? data.data : null;
  //console.log('DD', row);
  return (
    <>
      <Card
        style={{
          width: '18rem',
          position: 'fixed',
          top: '25px',
          right: '25px',
        }}
      >
        {row.meanings && (
          <Card.Title style={{ paddingLeft: '15px', paddingTop: '15px' }}>
            {row.word}
          </Card.Title>
        )}
        <Card.Body>
          {row.meanings && true ? (
            row.meanings.map((item) => (
              <>
                <Card.Subtitle
                  className='mb-2 text-bold text-italic'
                  style={{ fontStyle: 'italic' }}
                >
                  {item.partOfSpeech}
                </Card.Subtitle>
                <Card.Text className='mb-2'>
                  {item.definitions[0].definition}
                </Card.Text>
                <Card.Text className='mb-4 text-muted'>
                  "{item.definitions[0].example}"
                </Card.Text>
              </>
            ))
          ) : (
            <Card.Subtitle className='text-muted text-center'>
              Select some word
            </Card.Subtitle>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Word;
