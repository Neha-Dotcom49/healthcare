const options = {
    bottom: '32px', // default: '32px'
    right: '32', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    
  }
  
  const darkmode = new Darkmode(options);
  new Darkmode(options).showWidget();