export const AppRoutes ={
    Authentication:{
        full : 'authentication',
        login :{
         full: "authentication/login",
         main: "login", 
        },
        register :{
         full: "authentication/register",
         main: "register",
        }
    },

/////////////////////////
    home: {
        full: "home",
        main: "home",
        sub: "",
     },

////////////////////////
     Movies: {
        full: "Movies",
        main: "Movies",
        sub: "",
        details: {
           full: "Movies/",
           main: ":id",
        },
        edit: {
          full: 'Movies/edit/',
          main: 'edit/:id',
          sub: ':id'
       },
       new: {
        full: 'Movies/new',
        main: 'new',
     },
     },

}