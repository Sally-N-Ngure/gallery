pipeline {
  agent any

  tools {
    nodejs "Node JS"
  }

  environment {
    MONGODB_URI = credentials("mongo db secrect")
    RENDER_BASE_URL = "https://gallery-1-d5xf.onrender.com/"
  }

  stages {
    stage("Clone Repository") {
      steps {
        git branch: "master", url: "https://github.com/Sally-N-Ngure/gallery"
      }
    }

    stage("Install Dependecies") {
      steps {
        sh "npm install"
      }
    }

    stage("Run Tests") {
      steps {
        sh "npm test"
      }

      post {
        failure {
          emailext(
            subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
						body: "The build for ${env.JOB_NAME} #${env.BUILD_NUMBER} has failed. Please check the Jenkins console output for more details.",
						to: "sally.ngure@student.moringaschool.com"
          )
        }
      }
    }

    stage("Deploy to Render") {
      steps {
        echo "Deploying to Render"
				echo "base URL: ${RENDER_BASE_URL}"
				echo "Deployment complete."
      }

      post {
        success{
          slackSend(
						channel: "#sally_ip1",
						color: "good",
						message: "Build and deployment successful: ${env.JOB_NAME} #${env.BUILD_NUMBER}. Check the build at ${RENDER_BASE_URL}",
						teamDomain: "sallyip1",
						tokenCredentialId: "Jslack_id",
						botUser: true
					)
        }
        failure{
          slackSend(
						channel: "#sally_ip1",
						color: "danger",
						message: "Build failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}. Please check the Jenkins console output for more details.",
						teamDomain: "sallyip1",
						tokenCredentialId: "slack_id",
						botUser: true
					)
        }
      }
    }
  }

  post {
    always {
      script {
        if (currentBuild.result == 'SUCCESS') {
					echo "Build successful"
				} else {
					echo "Build failed, check the logs for details"
				}
      }
    }
  }
}