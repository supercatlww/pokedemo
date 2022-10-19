import Vue from "vue";
import Router from "vue-router";
import pokemonlist from "@/pages/pokemon/list";
// import resourcelist from "@/pages/resource/list";
// import resourcecreate from "@/pages/resource/create";
// import resourceedit from "@/pages/resource/edit";
// import resourcesearch from "@/pages/resource/search";
// import ratelist from "@/pages/rate/list";
// import ratecreate from "@/pages/rate/create";
// import rateedit from "@/pages/rate/edit";
// import projectlist from "@/pages/project/list";
// import projectcreate from "@/pages/project/create";
// import projectedit from "@/pages/project/edit";
// import login from "@/pages/login";
// import userShow from "@/pages/user/show";
// import userEdit from "@/pages/user/edit";
// import clientlist from "@/pages/client/list";
// import clientcreate from "@/pages/client/create";
// import clientedit from "@/pages/client/edit";
// import datalist from "@/pages/datas/list";
// import datashow from "@/pages/datas/show";
// import dataedit from "@/pages/datas/edit";
// import datanew from "@/pages/datas/create";
// import dataTables from "@/pages/datas/tables";
// import recordlist from "@/pages/record/list";
// import dbbackup from "@/pages/db/backup";
// import dbrestore from "@/pages/db/restore";
// import dbmonitor from "@/pages/db/monitor";
// import dbconnections from "@/pages/db/connection";
// import dbimport from "@/pages/db/import";
// import dbexport from "@/pages/db/export";
// import dashboard from "@/pages/dashboard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "pokemonlist",
      component: pokemonlist
    }
    // {
    //   path: "/resource/list",
    //   name: "resourcelist",
    //   component: resourcelist
    // },
    // {
    //   path: "/resource/create",
    //   name: "resourcecreate",
    //   component: resourcecreate
    // },
    // {
    //   path: "/resource/edit/:id",
    //   name: "resourceedit",
    //   component: resourceedit
    // },
    // {
    //   path: "/resource/search",
    //   name: "resourcesearch",
    //   component: resourcesearch
    // },
    // {
    //   path: "/rate/list",
    //   name: "ratelist",
    //   component: ratelist
    // },
    // {
    //   path: "/rate/create",
    //   name: "ratecreate",
    //   component: ratecreate
    // },
    // {
    //   path: "/rate/edit/:id",
    //   name: "rateedit",
    //   component: rateedit
    // },

    // {
    //   path: "/project/list",
    //   name: "projectlist",
    //   component: projectlist
    // },
    // {
    //   path: "/project/create",
    //   name: "projectcreate",
    //   component: projectcreate
    // },
    // {
    //   path: "/project/edit/:id",
    //   name: "projectedit",
    //   component: projectedit
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: login
    // },
    // {
    //   path: "/user/profile",
    //   name: "userprofile",
    //   component: userShow
    // },
    // {
    //   path: "/user/edit",
    //   name: "useredit",
    //   component: userEdit
    // },
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: dashboard
    // },
    // {
    //   path: "/client/list",
    //   name: "clientlist",
    //   component: clientlist
    // },
    // {
    //   path: "/client/create",
    //   name: "clientcreate",
    //   component: clientcreate
    // },
    // {
    //   path: "/client/edit/:id",
    //   name: "clientedit",
    //   component: clientedit
    // },
    // {
    //   path: "/table/list",
    //   name: "dataTables",
    //   component: dataTables
    // },
    // {
    //   path: "/table/:id",
    //   name: "datalist",
    //   component: datalist
    // },
    // {
    //   path: "/table/show/:id/:rid",
    //   name: "datashow",
    //   component: datashow
    // },
    // {
    //   path: "/table/edit/:id/:rid",
    //   name: "dataedit",
    //   component: dataedit
    // },
    // {
    //   path: "/table/create/:id",
    //   name: "datanew",
    //   component: datanew
    // },
    // {
    //   path: "/record/list",
    //   name: "recordlist",
    //   component: recordlist
    // },
    // {
    //   path: "/db/backup",
    //   name: "dbbackup",
    //   component: dbbackup
    // },
    // {
    //   path: "/db/restore",
    //   name: "dbrestore",
    //   component: dbrestore
    // },
    // {
    //   path: "/db/monitor",
    //   name: "dbmonitor",
    //   component: dbmonitor
    // },
    // {
    //   path: "/db/connections",
    //   name: "dbconnections",
    //   component: dbconnections
    // },
    // {
    //   path: "/db/import",
    //   name: "dbimport",
    //   component: dbimport
    // },
    // {
    //   path: "/db/export",
    //   name: "dbexport",
    //   component: dbexport
    // },
    // {
    //   path: "/",
    //   name: "dataTables",
    //   component: dataTables
    // }
  ]
});
//获取原型对象上的push函数
const originalPush = Router.prototype.push;
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
