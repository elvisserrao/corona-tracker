import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import coronaImage from './images/image.png';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.cardImage}>
          <img className={styles.image} src={coronaImage} alt='COVID-19' />
          <img className={styles.image} src={coronaImage} alt='COVID-19' />
          <img className={styles.image} src={coronaImage} alt='COVID-19' />
          <img className={styles.image} src={coronaImage} alt='COVID-19' />
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
