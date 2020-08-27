const path = require('path')
const listProjects = require('./src/proyectos')
const projects = listProjects.listaProyectos()

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve('src/templates/SingleProject/index.js')

  projects.forEach(project => {
    createPage({
      path: `${project.url}`,
      component: projectTemplate,
      context: project
    })
  })
}
