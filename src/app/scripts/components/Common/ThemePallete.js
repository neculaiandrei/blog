import React from 'react';
import IconButton from '../Common/Buttons/IconButton';

const getThemeHref = theme => `/styles/themes/${theme}.css`;

class ThemePallete extends React.Component {
  constructor(props) {
    super(props);

    let cachedTheme;

    if (typeof localStorage !== 'undefined') {
      cachedTheme = localStorage.getItem('blog-theme');
    }

    this.state = {
      currentTheme: cachedTheme || 'light',
    };

    if (typeof document !== 'undefined') {
      const themeContainer = document.querySelector('#theme');
      const existingThemeHref = themeContainer.getAttribute('href');

      const currentThemeHref = getThemeHref(this.state.currentTheme);

      if (existingThemeHref !== currentThemeHref) {
        themeContainer.setAttribute('href', currentThemeHref);
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const theme = event.currentTarget.value;

    this.setState({
      currentTheme: theme,
    });

    localStorage.setItem('blog-theme', theme);

    document.querySelector('#theme')
            .setAttribute('href', getThemeHref(theme));
  }

  render() {
    return (
      <div>
        <IconButton
          style={{ color: '#FFFFFF' }}
          onClick={this.handleChange}
          value="light"
        >
          <i className="fa fa-paint-brush" />
        </IconButton>
        <IconButton
          style={{ color: '#C0C0C0' }}
          onClick={this.handleChange}
          value="grey"
        >
          <i className="fa fa-paint-brush" />
        </IconButton>
        <IconButton
          style={{ color: '#1E1E1E' }}
          onClick={this.handleChange}
          value="dark"
        >
          <i className="fa fa-paint-brush" />
        </IconButton>
      </div>
    );
  }
}

export default ThemePallete;
