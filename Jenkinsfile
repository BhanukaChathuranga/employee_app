pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''sudo apt install nodejs
sudo apt install npm
echo \'install\'
npm install -g yarn
yarn install
echo \'build\'
yarn workspace @employee-app/client run build'''
      }
    }

    stage('Test') {
      steps {
        echo 'This is test'
      }
    }

  }
}