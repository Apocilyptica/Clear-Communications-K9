import type { Actions, GatsbyNode } from 'gatsby'
import path from 'path'

import { pageContentStaticData, PagesStaticData } from './src/staticData'

type CreatePageActionFn = Actions['createPage']
type CreateNodeActionFn = Actions['createNode']

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions, createNodeId, createContentDigest }) => {
  const nodeMeta = {
    id: createNodeId(`my-data-${pageContentStaticData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `staticData`,
      mediaType: `text/html`,
      content: JSON.stringify(pageContentStaticData),
      contentDigest: createContentDigest(pageContentStaticData),
    },
  }

  const node = { ...pageContentStaticData, ...nodeMeta }

  const createNode: CreateNodeActionFn = input => {
    console.log('node created:', JSON.stringify({ id: input.id }))
    actions.createNode(input)
  }

  createNode(node)
}

/**
 * Dynamically create pages
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
 */
export const createPages: GatsbyNode['createPages'] = async ({ actions, reporter }) => {
  const resolveTemplatePath = (fileName: string) => {
    return path.resolve(`./src/templates/${fileName}.tsx`)
  }

  const createPage: CreatePageActionFn = input => {
    reporter.log(JSON.stringify({ path: input.path, context: input.context }, null, 1))
    actions.createPage(input)
  }

  PagesStaticData.forEach(page => {
    createPage({
      path: page.rootData.slug,
      component: resolveTemplatePath(`${page.rootData.templateType}`),
      context: {},
    })
  })
}
