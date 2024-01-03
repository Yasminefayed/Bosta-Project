import React , {useEffect} from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Table from './components/Table';
import MultiStepProgressBar from './components/Stepbar';

import  i18n, { init }  from 'i18next';
import { useTranslation,initReactI18next } from 'react-i18next';
import {fetchTrackingData} from './components/TrackingAPI';



function App() {
 /* useEffect(() => {
    const trackingNumbers = ['7234258', '13737343', '67151313'];

    trackingNumbers.forEach((trackingNumber) => {
      fetchTrackingData(trackingNumber)
        .then((data) => {
          // Process the data received for each tracking number
          console.log(Tracking ,number, $,{trackingNumber}, data);
          // Handle and display the data as needed
        })
        .catch((error) => {
          // Handle errors here
        });
    });
  }, []);*/
  return (
    <div className='App'>
<Navbar/>
<Table/>






    </div>
  );
}

export default App


