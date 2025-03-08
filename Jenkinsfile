pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }
    stages {
        stage('Build and Test') {
            steps {
                sh 'npm install'
                sh 'npm run cy:run'
            }
        }
    }
    post {
        always {
            junit 'cypress/results/junit/*.xml' // Adapte o caminho se necessário
        }
    }
}