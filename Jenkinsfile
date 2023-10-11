pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''echo \'build\'
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