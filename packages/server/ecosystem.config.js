module.exports = {
    apps: [{
        name: "server",
        script: "./bin/www",
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
    }]
}
