import axios from 'axios'
export default {
    queryKnowledgeResource() {
      return axios.get('api/getResource')
    },
}