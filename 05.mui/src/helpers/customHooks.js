import { useLocation } from 'react-router-dom'


export const useQueryString = () => new URLSearchParams(useLocation().search)