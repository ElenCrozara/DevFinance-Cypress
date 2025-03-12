pipeline {
    agent {
        docker {
            image 'minha-imagem-cypress'
        }
    }
    stages {
        stage('Build and Test') {
            steps {
                sh 'npm run cy:run'
            }
        }
    }
    post {
        always {
            junit 'cypress/results/junit/*.xml'
        }
    }
}