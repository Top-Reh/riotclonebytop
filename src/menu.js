import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Dropdownfacts = styled.div`
  &:hover {
      Li{
        display:block;
      }
    }
`;

const Span = styled.span`
`;

const Li = styled.li`
  &:hover {
    div{
      display:block;
    }
    Span{
      display:block;
    }
    
  }
`;

function Menu() {
  const [bgcolor,setBgcolor] = useState('transparent');
  const [border,setBorder] = useState('none');
  const [inputborder,setInputborder] = useState('1px solid rgb(255, 255, 255)');
  const [inputbgcolor,setInputbgcolor] = useState('transparent');

  const handlescroll =() => {
    if (window.scrollY > 50) {
      setBgcolor('rgb(26, 26, 26)');
      setBorder('2px solid rgb(50, 50, 50)');
      setInputborder('none');
      setInputbgcolor('rgb(80, 80, 80)')
    } else {
      setBgcolor('transparent');
      setBorder('none');
      setInputborder('1px solid rgb(255, 255, 255)');
      setInputbgcolor('transparent')
    }
  }

  function resetpage() {
    window.location.reload()
  }

  useEffect(() => {
    window.addEventListener('scroll',handlescroll);
    return () => {
      window.removeEventListener('scroll',handlescroll)
    }
  },[])

  return (
    <div className='menu' style={{backgroundColor: bgcolor,borderBottom: border}}>
      <div className='menufirst'>
        <div className='riotgamelogo' onClick={resetpage}>
          <svg width="85" height="27" className="_32ANSIZormifc9Vc6VVwrx riotgamepathlogo" viewBox="0 0 587.93 165"><title>mainLogoRiotFist21</title>
          <path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z">
          </path>
          </svg>
          <i className="bi bi-caret-down-fill dropdown"></i>
        </div>
        <div class="riotlogo">
          <a href="/en" data-testid="riotbar:header:themeLogo-desktop" data-interaction-id="riotbar_app-switcher_theme-logo" aria-label="Home">
              <svg xmlns="http://www.w3.org/2000/svg riotlogosvg" id="Layer_1" data-name="Layer 1" viewBox="0 0 32 32"  width="26" height="26">
                  <circle cx="16" cy="16" r="16" fill="#f1f5f1"></circle>
                  <polygon points="16.42 8 6.75 12.47 9.16 21.64 11 21.41 10.49 15.65 11.1 15.38 12.13 21.27 15.27 20.89 14.71 14.53 15.3 14.27 16.45 20.75 19.62 20.36 19.01 13.38 19.61 13.12 20.86 20.2 24 19.82 24 9.89 16.42 8" fill="#050505"></polygon>
                  <polygon points="16.65 21.9 16.81 22.8 24 24 24 21 16.66 21.9 16.65 21.9" fill="#050505"></polygon>
              </svg>
          </a>
        </div>
        <ul>
          <Li>WHO WE ARE<i className="bi bi-caret-down-fill dropdown"></i><Span className='hoverunderline'></Span>
            <Dropdownfacts className='dropdownfacts'>
              <h6>About Riot</h6>
              <h6>Diversity & inclucsion</h6>
              <h6>Social Impact</h6>
            </Dropdownfacts></Li>
          <Li>WORK WITH US<i className="bi bi-caret-down-fill dropdown"></i><Span className='hoverunderline'></Span>
            <Dropdownfacts className='dropdownfacts dropdownsecondfacts'>
              <h6>Jobs</h6>
              <h6>Benefits</h6>
              <h6>Offices</h6>
              <h6>Lives at Riot</h6>
            </Dropdownfacts></Li>
          <Li>NEWS<Span className='hoverunderline lastundrlinehover'></Span></Li>
        </ul>
      </div>
      <div className='menusecdiv'>
        <i className="bi bi-globe globeicon"></i>
        <div className='searchbar' style={{border:inputborder,backgroundColor:inputbgcolor}}>
          <input placeholder='SEARCH'></input>
          <i className="bi bi-search"></i>
        </div>
        <button className='signbtn'>SIGN IN</button>
      </div>
    </div>
  )
}

//<img src={logo} className="App-logo" alt="logo" />

export default Menu
