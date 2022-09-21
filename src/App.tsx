import React, { DOMAttributes } from 'react';
import { MediaElem } from 'web-components';
import 'web-components/media-elem.js';
import './App.css';
import { LoadingLayout } from './components/LoadingLayout';
import { useAsyncFetch } from './hooks/useAsync';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['media-elem']: CustomElement<MediaElem>;
    }
  }
}

function App() {
  const { loading, error, data } = useAsyncFetch<any>('http://localhost:4000/media-items');

  return (
    <div className="App">
      <h1>Recently Created Media Items (10)</h1>      
      <LoadingLayout
        loading={loading}
        error={error}
      >
        <div className="media-content__wrapper">
        {data &&
          data.data.Page.media.map((item: any) =>
          <div key={item.id.toString()}>
            <media-elem
              title={item.title.english}
              description={item.description}
              img={item.coverImage.medium}
            ></media-elem>
          </div>
          )
        }
        </div>
      </LoadingLayout>
    </div>
  );
}

export default App;
