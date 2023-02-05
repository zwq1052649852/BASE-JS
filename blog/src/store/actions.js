import api from './api'
export default {
    // eslint-disable-next-line no-unused-vars
    queryKnowledgeResource({commit}, params) {
      return api.queryKnowledgeResource(params).then(res => res.data)
    },
}