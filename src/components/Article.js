import React from 'react';
import { Card } from 'react-bootstrap';

const Article = (data) => {
  const {
    abstract,
    web_url,
    snippet,
    lead_paragraph,
    print_section,
    print_page,
    source,
    multimedia,
    headline,
    keywords,
    pub_date,
    document_type,
    news_desk,
    section_name,
    subsection_name,
    byline,
    type_of_material,
    _id,
    word_count,
    uri,
  } = data.data;

  let uq = new Set();
  for (let k of keywords) {
    uq.add(k.name);
  }
  console.log(data);
  return (
    <div style={{ margin: '0 auto', width: '40rem' }}>
      <Card style={{ marginTop: '30px' }}>
        <Card.Img
          variant='top'
          src={
            multimedia.length > 0
              ? `https://www.nytimes.com/${multimedia[0].url}`
              : ''
          }
        />
        <Card.Body>
          <Card.Title style={{ textAlign: 'left', fontStyle: 'italic' }}>
            {headline.main}
          </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{abstract}</Card.Subtitle>
          <br></br>
          <Card.Text>{lead_paragraph}</Card.Text>
          <Card.Text>
            <b>Keywords:</b> {Array.from(uq).join(', ')}
          </Card.Text>
          <Card.Link href={web_url} style={{ float: 'right' }}>
            Open Article
          </Card.Link>
          <footer className='blockquote-footer'>
            <cite title='Source Title'>{byline.original}</cite>
          </footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Article;
