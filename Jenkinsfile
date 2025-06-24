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
                sh "npm test" 
            }
    }
        
        
    } 
    post {
        always{
            script{
                if (currentBuild.result == 'SUCCESS' ) {
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
