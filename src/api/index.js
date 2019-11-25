
import ajax from './ajax'
import axios from 'axios'

 console.log(ajax)
export const getBeautiful = () => ajax({ 
  url: '/beautiful'
})
