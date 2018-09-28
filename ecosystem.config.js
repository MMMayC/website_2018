module.exports = {
  apps: [{
    name: 'website_2018',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-64-172-29.ap-southeast-2.compute.amazonaws.comm',
      key: '~/.ssh/website_2018.pem',
      ref: 'origin/master',
      repo: 'git@github.com:MMMayC/website_2018.git',
      path: '/home/ubuntu/website_2018',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}