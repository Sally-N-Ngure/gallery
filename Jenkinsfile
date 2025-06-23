pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'node server.js'
            }
        }
    }
}
stage('Test') {
    steps {
        script {
            try {
                sh 'npm test'
            } catch (err) {
                mail to: 'nguresallynjoki@gmail.com',
                     subject: "Build Failed: #${env.BUILD_ID}",
                     body: "Tests failed on Jenkins!"
                error("Tests failed")
            }
        }
    }
}
post {
    success {
        slackSend (
            channel: '#Sally_IP1',
            message: "✅ Build #${env.BUILD_ID} is live: https://your-app.onrender.com"
        )
    }
}
