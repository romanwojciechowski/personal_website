const sass = require('./config/sass-process');

module.exports = config => {
    //Watching for modificaions in style directory
    sass('./assets/index.scss', './_site/style/index.css');
}