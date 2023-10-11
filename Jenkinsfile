pipeline {
  agent {
        docker {
            image 'node:18.18.0-alpine3.18' 
            args '-p 3000:3000' 
        }
  }
  stages {
    stage('Build') {
      steps {
        sh '''echo \'install\'
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
