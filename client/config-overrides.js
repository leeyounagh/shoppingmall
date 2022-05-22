const {override,fixBabelImports,addLessLoader} =require('customize-cra');

module.exports = override(
//   antd       ：  import    (  babel-plugin-import)
fixBabelImports('import',{
    libraryName:'antd',
    libraryDirectory:'es',
    style:true,//              style:'css'
}),
//   less-loader     less         ，  antd     
addLessLoader({
    javascriptEnabled: true,
    modifyVars:{'@primary-color':'#1DA57A'},
})
);