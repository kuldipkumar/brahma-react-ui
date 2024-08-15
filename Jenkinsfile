pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/kuldipkumar/brahma-react-ui.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t kuldipkumar/brahma-react-ui:latest .'
            }
        }
        stage('Push') {
            steps {
                sh 'docker login -u kuldipkumar -p $DOCKER_HUB_PASSWORD'
                sh 'docker push kuldipkumar/brahma-react-ui:latest'
            }
        }
        stage('Deploy') {
            steps {
                sh 'helm upgrade --install my-app ./my-app'
            }
        }
    }
}
