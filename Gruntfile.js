module.exports=function(grunt){
	//任务配置所有插件的配置信息
	grunt.initConfig({
		//获取package.json信息
		pkg:grunt.file.readJSON('package.json'),
		//uglify插件的配置信息
		uglify:{
        options:{
    	stripBanners:true,
        banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    my_target: {
        files: [
          {
            expand: true,
            //相对路径
            cwd: 'src/',
            src: '*.js',
            dest: 'build/',
            rename: function (dest, src) {  
                  var folder = src.substring(0, src.lastIndexOf('/'));  
                  var filename = src.substring(src.lastIndexOf('/'), src.length);  
                  //  var filename=src;  
                  filename = filename.substring(0, filename.lastIndexOf('.'));  
                  var fileresult=dest + folder + filename + '.min.js';  
                  grunt.log.writeln("现处理文件："+src+"  处理后文件："+fileresult);  
                  return fileresult;  
                  //return  filename + '.min.js';  
                } 
          }
        ]
      }
  }
    
	});
	//告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');	
	   
    //告诉grunt我们在终端输入grunt时需要干什么
	  grunt.registerTask('default',['uglify']);

	
  
}