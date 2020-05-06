import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./resume.module.css"

class Blog extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Vicente Canales">
        <SEO title="All posts" />
        <div className={style.container}>
          <h4>Software Developer</h4>
          <h5>Contact me:</h5>
          <ul>
            <li>
              email:{" "}
              <a href="mailto:vicente+resume@canales.io?subject=Hi!">
                vicente@canales.io
              </a>
            </li>
            <li>
              github:{" "}
              <a href="https://github.com/vcanales">
                https://github.com/vcanales
              </a>
            </li>
            <li>
              linkedin:{" "}
              <a href="https://www.linkedin.com/in/vecanales/">
                https://www.linkedin.com/in/vecanales
              </a>
            </li>
          </ul>
          <h5>Experience:</h5>
          <section className={style.experience}>
            <article>
              <h6>Falabella Labs | Sept 2019 - Present</h6>
              <p>Working on an incubator project for Falabella, called Labs.</p>
              <p>
                Build prototypes and MVPs for quick validation of business
                ideas. Currently leveraging Twilio to create a conversational
                commerce and customer engagement platform that gives shopping a
                personal touch through recommendations.
              </p>
              <p>
                Technologies used include React, Google Cloud Platform
                (Functions, Cloud SQL, PubSub), Nodejs, PostgreSQL, GitHub
                Actions for CI and CloudFlare workers.
              </p>
            </article>
            <article>
              <h6>uBiome | Mar 2018 - May 2019</h6>
              <p>
                Software Engineer for the Product Engineering team; worked with
                Vue, React and Meteor.
              </p>
              <h5>Achievements:</h5>
              <ul>
                <li>
                  Increased NPS score of Explorer by implementing performance
                  and UI improvements, as well as helping with the development
                  of useful features.
                </li>
                <li>
                  Worked towards migrating from a legacy codebase into a more
                  maintainable and modern one, achieved a 60% migration.
                </li>
                <li>
                  Implemented "Explorer Stories" and Stories UI Kit, a web view
                  to display user's data in an actionable way, with charts and
                  suggested behavior changes. This application was written in
                  React and React Native, and the process involved creating
                  several components that would be shared among stories.
                </li>
              </ul>
            </article>
            <article>
              <h6>Adessa Falabella | Nov 2017 - Mar 2018</h6>
              <p>
                Developer working on improving the build performance and
                creating new components for the frontend of the biggest LATAM
                e-commerce site,{" "}
                <a href="https://falabella.com" target="_blank">
                  falabella.com
                </a>
                .
              </p>
              <h5>Achievements:</h5>
              <ul>
                <li>
                  Moved to a webpack-based build from a gulp/grunt workflow.
                </li>
                <li>
                  Implemented Falabella Connect UI components: A web interface
                  to buy phones and data plans online.
                </li>
              </ul>
            </article>
            <article>
              <h6>Pageload | Mar - Nov 2017</h6>
              <p>
                Development of internal dashboards using Vue, Go, and influxdb.
              </p>
            </article>
            <article>
              <h6>AAXIS Commerce | Sept 2016 - Mar 2017</h6>
              <p>
                Developer for Falabella, one of AAXIS' clients and the biggest
                Latin American commerce company. Worked with the front end team,
                helping with the implementation of the checkout and browse
                redesigns, using technologies such as React, nodejs, Handlebars,
                jQuery, LESS, webpack, gulp and browserify.
              </p>
              <p>
                This project is now live at{" "}
                <a href="https://falabella.com" target="_blank">
                  falabella.com
                </a>
              </p>
            </article>
            <article>
              <h6>SmartboxTV | Jun 2015 - Sept 2016</h6>
              <p>
                Development of multiple web projects for media companies such as
                Oi, Vivo and Movistar/Telefónica, as well as for Chilean artist,
                Francisca Valenzuela. Some projects include: oiplay.tv, OTT
                platform for browsing and viewing content provided by Oi and
                it's partners; and catedr.al, interactive video and website for
                Francisca Valenzuela's music video, Catedral.
              </p>
              <p>
                Technologies used: JavaScript (NodeJS, ReactJS, jQuery), Twitter
                Bootstrap, Semantic-UI, PHP, Yii1-2 Frameworks.
              </p>
            </article>
            <article>
              <h6>Masnet | Oct 2014 - May 2015</h6>
              <p>
                Development of internal tools for data standardization and
                manipulation.
              </p>
              <p>
                Technologies used: PHP, PostgreSQL, JavaScript (NodeJS, jQuery).
              </p>
            </article>
            <article>
              <h6>Wordpress Development | Jan 2011 - Oct 2014</h6>
              <p>
                Developed Wordpress sites for a few local businesses in my
                hometown, Temuco, Chile. Sadly, these businesses are no longer
                online or have since moved to other platforms such as wix and
                squarespace. This was my first experience getting paid doing
                what I love.
              </p>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
