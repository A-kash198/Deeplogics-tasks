
import React from 'react';
import './App.css';

const App=()=>{
  const latestStories = [
    {
      "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
      "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
    },
    {
      "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
      "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
    },
    {
      "title": "Moderna Booster May Wane After 6 Months",
      "link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
    },
    {
      "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
      "link": "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/"
    },
    {
      "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
      "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
    },
    {
      "title": "We Urgently Need a New National COVID-19 Response Plan",
      "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
    }
  ];

  return (
    <>
    <div className="stories">
      <header>
        <h1>FEATURED VOICES</h1>
        <div className="featured-voices">
          <div>
            <h2>Anatol Lieven</h2>
            <p>Russia Has Been Warning the West About Ukraine for Decades</p>
            <h2>Ismat Ara</h2>
            <p>How It Feels to Be a Muslim Woman Sold by India's Right Wing</p>
            <h2>Robert J. Davis</h2>
            <p>Why You Shouldn't Exercise to Lose Weight</p>
          </div>
          <div>
            <h2>Yohanca Delgado</h2>
            <p>The Life-Changing Practice That Will Help You Feel More Gratitude</p>
            <h2>W. Kamau Bell</h2>
            <p>There’s So Much More To Say About Bill Cosby</p>
            <h2>Christina Bu</h2>
            <p>What Norway Can Teach the World About Switching to Electric Vehicles</p>
          </div>
        </div>
      </header>

      <div className="latest-stories">
        <h2>LATEST STORIES</h2>
        <ul>
          {latestStories.map((story, index) => (
            <li key={index}>
              <a href={story.link}>{story.title}</a>
              <p>January 26, 2022 • 11:43 PM EST</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;


