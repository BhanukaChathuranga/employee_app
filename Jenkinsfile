pipeline {
  agent { dockerfile true }
  stages {
    stage('Check') {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh 'yarn --version'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'yarn workspace @employee-app/client build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'npm --version'
      }
    }
  }
}
