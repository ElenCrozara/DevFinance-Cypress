pipeline {
    agent {
        docker {
            image 'docker:latest' // Ou qualquer imagem Docker adequada
        }
    }
    stages {
        stage('Build and Test') {
            steps {
                script {
                    def app = docker.build("my-cypress-image") // Nomeie sua imagem
                    app.inside {
                        sh 'npm install'
                        sh 'npm run cy:run'
                    }
                }
            }
        }
    }
    post {
        always {
            junit 'cypress/results/junit/*.xml'
        }
    }
}