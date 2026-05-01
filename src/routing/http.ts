export default (modules: HTTPModules) => {
  return [
    {
      path: '/user/register',
      method: 'post',
      modules: modules.user.register,
    },
    {
      path: '/user/get',
      method: 'get',
      modules: modules.user.get,
    },
    {
      path: '/user/login',
      method: 'get',
      modules: modules.user.login,
    },
  ];
};
