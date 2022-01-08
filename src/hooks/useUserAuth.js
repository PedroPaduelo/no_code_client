import  { useContextSelector } from 'use-context-selector'
import  { AuthContext } from '../Context/AuthContext'

export function useUserAuth(){

  const user = useContextSelector(AuthContext, user => user.user)
  const handleLogin = useContextSelector(AuthContext, user => user.handleLogin)
  const loading = useContextSelector(AuthContext, user => user.loading)
  const authenticated = useContextSelector(AuthContext, user => user.authenticated)
  const acessos = useContextSelector(AuthContext, user => user.acessos)
  const UpdateUser = useContextSelector(AuthContext, user => user.UpdateUser)
  const handleLogout = useContextSelector(AuthContext, user => user.handleLogout)

  return {
    user,
    acessos,
    authenticated,
    loading,

    handleLogin,
    handleLogout,
    UpdateUser
  }
}