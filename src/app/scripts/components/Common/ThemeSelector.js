import React from 'react';

const getThemeHref = theme => `/styles/themes/${theme}.css`;

class ThemeableComponent extends React.Component {
  constructor(props) {
    super(props);

    let cachedTheme;

    if (typeof localStorage !== 'undefined') {
      cachedTheme = localStorage.getItem('blog-theme');
    }

    this.state = {
      theme: cachedTheme || 'light',
    };

    if (typeof document !== 'undefined') {
      document.querySelector('#theme')
              .setAttribute('href', getThemeHref(this.state.theme));
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const theme = event.target.value;
    const themeHref = getThemeHref(theme);

    this.setState({
      theme,
    });

    localStorage.setItem('blog-theme', theme);

    document.querySelector('#theme').setAttribute('href', themeHref);
  }

  render() {
    return (
      <select onChange={this.handleChange} value={this.state.theme}>
        <option value="light">Light</option>
        <option value="grey">Grey</option>
        <option value="dark">Dark</option>
      </select>
    );
  }
}

export default ThemeableComponent;
