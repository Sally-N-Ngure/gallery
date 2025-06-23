pipeline {
    agent any
    tools {
		nodejs "Node JS"
	}

	environment {
		RENDER_BASE_URL = "https://gallery-45sh.onrender.com/"
	}
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
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
        stage('Deploy') {
            steps {
                sh 'node server.js'
            }
        }
    } post {
        always{
            script{
                if{ currentBuild.result == 'SUCCESS' } {
                    slackSend (
                        message: "✅ SUCCESS: Build #${env.BUILD_NUMBER} is deployed at ${env.RENDER_DEPLOY_URL}"
                    )
                } else {
                    slackSend (
                        message: "❌ FAILURE: Build #${env.BUILD_NUMBER}")
                        }
            }
            }

}
}
