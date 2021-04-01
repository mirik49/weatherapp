const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[withTypescript],
        [withSass({
            webpack: function (config) {
                config.module.rules.push(
                    {
                        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                        use: {
                            loader: 'url-loader',
                            options: {
                                limit: 100000,
                                name: '[name].[ext]'
                            }
                        }
                    }
                );
                return config;
            }
        })],
    ]
);

