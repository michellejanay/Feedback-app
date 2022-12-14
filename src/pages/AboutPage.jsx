import React from 'react'
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
      <main className="about">
        <h1>About This Project</h1>
        <p>
          Hello and I hope you are enjoying this very cool feedback app for a product or service. I
          created this app following Brad Traversy's React Front To Back 2022 course on
          Udemy! Below is a link to the course if you are interested in creating
          your own!
        </p>
        <p><strong>Version</strong>: 1.0.0</p>
        <a
          classname="course-link"
          href="https://www.udemy.com/course/modern-react-front-to-back/"
        >
          React Front To Back
        </a>
      </main>
    </Card>
  )
}

export default AboutPage
