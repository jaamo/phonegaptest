module.exports = {
  init: function () {
    localStorage.clear();
    localStorage.setItem('terminus', JSON.stringify({
        navigation: [
            {
                title: 'Navi item 1',
                url: 'https://www.evermade.fi/fi',
                sub: [
                    {
                        title: 'Navi subitem 1',
                        url: 'https://www.evermade.fi/fi/toitamme/',
                    },
                    {
                        title: 'Navi subitem 2',
                        url: 'https://www.evermade.fi/fi/palvelut/',
                    }           
                ]
            },
            {
                title: 'Navi item 2',
                url: 'https://www.evermade.fi/fi/meista/',
                sub: [
                    {
                        title: 'Navi subitem 1',
                        url: 'https://www.evermade.fi/fi/toihin-evermadelle/',
                    },
                    {
                        title: 'Navi subitem 2',
                        url: 'https://www.evermade.fi/fi/blogi/',
                    }           
                ]
            }
        ]
    }));
  }

};