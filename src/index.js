import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {fetchUserInfo, fetchUserPresence} from './status_fetcher';

const user = 'UU2E1N0SZ';
const token = 'xoxb-954477748677-942990347011-lqcgOuA8HrZNKEj3LoMw4kCh';

const fetchData = async _ => {
  const userInfo = await fetchUserInfo(user, token);
  const userPresence = await fetchUserPresence(user, token);

  console.log(userInfo);
  console.log(userPresence);
  ReactDOM.render(
    <div>
      <App
        active={userPresence.presence === 'active'}
        imageUri={userInfo.profile.image_192}
        name={userInfo.profile.real_name}
        title={userInfo.profile.title}
        status={userInfo.profile.status_text}
      />
    </div>,
    document.getElementById('root'),
  );
};

fetchData();
