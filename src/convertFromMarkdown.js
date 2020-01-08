import remark from 'remark';
import recommended from 'remark-preset-lint-recommended'
import remarkToReact from 'remark-react'

export default (content) => (
  remark()
    .use(recommended)
    .use(remarkToReact, { sanitize: true })
    .processSync(content).contents
)
