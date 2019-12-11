import { Link } from 'gatsby';
import { globalHistory as history } from '@reach/router';
import * as React from 'react';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import 'typeface-italianno';
import 'typeface-source-sans-pro';
import '../styles/index.scss';
interface LayoutPageTemplateProps {
  hasFooter?: boolean;
  data: {
    site: {
      siteMetadata: {
        name: string;
      };
    };
  };
}

interface LayoutPageTemplateState {
  menuOpen: boolean;
}

export default class Layout extends React.Component<
  LayoutPageTemplateProps,
  LayoutPageTemplateState
  > {
  public render() {
    const { location } = history;
    const hasFooter = location.pathname === '/';
    const name = this.props.data.site.siteMetadata.name;

    this.state = {
      menuOpen: false,
    };

    const handleStateChange = (state: { isOpen: boolean }) => {
      this.setState({ menuOpen: state.isOpen });
    };

    const closeMenu = () => {
      this.setState({ menuOpen: false });
    };

    return (
      <>
        <div className='layout animated fadeIn delay-500ms'>
          <div className='header'>
            <header className='container header'>
              <a href='/' className='logo'>
                <h1>{name}</h1>
              </a>
              <MediaQuery maxWidth={992}>
                <div id='outer-container' className='mobile-menu-container'>
                  <Menu
                    disableAutoFocus={true}
                    isOpen={false}
                    // tslint:disable-next-line: jsx-no-lambda
                    onStateChange={(state) => handleStateChange(state)}
                    right={true}
                    outerContainerId={'outer-container'}
                  >
                    {/* tslint:disable-next-line: jsx-no-lambda */}
                    <Link className='menu-item' to='/'>
                      Home
                    </Link>
                    <Link className='menu-item' to='/about'>
                      About
                    </Link>
                    <Link className='menu-item' to='/portfolio'>
                      Portfolio
                    </Link>
                    <Link className='menu-item' to='/blog'>
                      Blog
                    </Link>
                    <Link className='menu-item' to='/contact'>
                      Contact
                    </Link>
                  </Menu>
                </div>
              </MediaQuery>
              <MediaQuery minWidth={992}>
                <nav>
                  <Link to='/about'>About</Link>
                  <Link to='/portfolio'>Portfolio</Link>
                  <Link to='/blog'>Blog</Link>
                  <Link to='/contact'>Contact</Link>
                </nav>
              </MediaQuery>
            </header>
          </div>
          <div className='content'>{this.props.children}</div>
        </div>
        {hasFooter ? (
          ''
        ) : (
            <div className='footer'>
              <footer className='container footer'>
                <div className='footer-copy'>
                  <p>Copyright © 2019 {name}. All rights reserved</p>
                </div>
                <nav>
                  <Link to='/about'>About</Link>
                  <Link to='/portfolio'>Portfolio</Link>
                  <Link to='/blog'>Blog</Link>
                  <Link to='/contact'>Contact</Link>
                </nav>
              </footer>
            </div>
          )}
      </>
    );
  }
}
