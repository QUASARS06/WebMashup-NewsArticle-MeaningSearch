import axios from 'axios';
import React, { useState } from 'react';
import Article from '../components/Article';
import Word from '../components/Word';
import key from './API';
import Load from '../components/Load';

import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Home = () => {
  const [articles, setArticles] = useState(null);
  const [word, setWord] = useState('election');
  const [definition, setDefinition] = useState({});
  const [visible, setVisible] = useState(null);

  document.onmouseup = () => {
    //console.log('RRRRRRR');
    getDefinition(window.getSelection().toString());
  };

  const getDefinition = async (search) => {
    // console.log('FF', search);
    if (search !== '' && search !== 'undefined') {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${search}`
      );
      //console.log(res.data[0]);
      setDefinition(res.data[0]);
    } else {
      setDefinition({});
    }
  };

  const callArticles = async () => {
    setVisible(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&api-key=${key}`
    );
    console.log(res.data);
    //console.log(res.data.response.docs[0]);
    setVisible(null);
    setArticles(res.data.response.docs);
  };

  return (
    <div style={{ marginBottom: '50px', marginTop: '20px' }}>
      <InputGroup className='mb-3' style={{ width: '60rem', margin: '0 auto' }}>
        <FormControl
          placeholder='Search Term'
          aria-label='Search Term'
          aria-describedby='basic-addon2'
          onChange={(e) => setWord(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant='outline-secondary' onClick={callArticles}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {visible != null && visible && <Load />}
      <Word key={definition} data={definition} />
      {articles &&
        Object.values(articles).map((article) => (
          <Article data={article} key={article._id} />
        ))}
    </div>
  );
};

export default Home;
