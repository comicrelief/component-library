const colors = {
    white: '#FFFFFF',
    white_smoke: '#fbf5f5',
    black: '#030e1a',
    coral: '#FF6F61',
    ruby: '#e7135d',
    blue_light: '#86E4E9',
    blue: '#223c59',
    dark_blue: '#061d38',
    green: '#b2e55e',
    red: '#E52630'
};

export const color = colorName => {
    if (colorName) {
        return colors[colorName];
    }
    return 'inherit';
};
