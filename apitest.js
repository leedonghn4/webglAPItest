
function initialize(canvas){

	this.canvas = canvas;
    this.glValue=function(){
        var gl;
        try 
        {
            gl = this.canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        } catch (e) {
        }
        if (!gl) {
            alert("Could not initialise Webthis.gl, sorry :-(");
        }
        return gl;
    };
}

function webglFunction(gl){
			this.matrixs = {
				mvMatrix: mat4.create(),
				pMatrix: mat4.create(),
				mvMatrixStack: []
			}; 

			this.gl = gl;
			this.vertexpositionandcolorbuffers = {
				rectangleVertexPositionBuffer:this.gl.createBuffer(),
				rectangleVertexColorBuffer:this.gl.createBuffer()
			}; 

		    this.bascisparameters = {
		    		colNum:50,
		    		rowNum:100,
    			    marginX: 5.0,
				    marginY: 5.0,
				    recWidth: 7.0,
				    recHeight: 20.0,
				    squareHeigth: 7.0,
				    depth: 0.01,
				    mouseshiftX: 100,
				    mouseshiftY: 50,
				    scalepercentage: 0.185, //scale percentage
				    incresortstatus: true,
			        showmutation: false,
			    	zoomValue: 1.0
	    	};

		    this.initBuffers = function(datas) 
			{
				// var rectanglevertices = [];
				// var rectanglecolors = [];				

				//rectangle.gle vertex and color
		        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexpositionandcolorbuffers.rectangleVertexPositionBuffer);
		         	
		    	// for(var j = 0; j < this.bascisparameters.colNum; j++)
		     //    {

		     //        var low  = (this.bascisparameters.marginY+this.bascisparameters.recHeight)*j + this.bascisparameters.marginY;
		     //        var high = (this.bascisparameters.marginY+this.bascisparameters.recHeight)*j + this.bascisparameters.marginY + this.bascisparameters.recHeight;      

		     //        if(j === 47 )
		     //        {
		     //            for(var i = 0;i<this.bascisparameters.rowNum; i++)
		     //            {
		     //                var increment = i*1.0/this.bascisparameters.rowNum ;
		     //                var low  = (this.bascisparameters.marginY+this.bascisparameters.recHeight)*j + this.bascisparameters.marginY;
		     //                var high = (this.bascisparameters.marginY+this.bascisparameters.recHeight)*j + this.bascisparameters.marginY + this.bascisparameters.recHeight * increment;  

		     //                var left  = (this.bascisparameters.marginX+this.bascisparameters.recWidth)*i + this.bascisparameters.marginX;
		     //                var right = (this.bascisparameters.marginX+this.bascisparameters.recWidth)*i + this.bascisparameters.recWidth + this.bascisparameters.marginX;

		     //                rectanglevertices.push(right, high, this.bascisparameters.depth);
		     //                rectanglevertices.push(left,  high, this.bascisparameters.depth);
		     //                rectanglevertices.push(right,  low, this.bascisparameters.depth);

		     //                rectanglevertices.push(left, high, this.bascisparameters.depth);
		     //                rectanglevertices.push(right, low, this.bascisparameters.depth);
		     //                rectanglevertices.push(left,  low, this.bascisparameters.depth);
		     //            }
		     //        }
		     //        else
		     //        {
		     //            for(var i = 0;i<this.bascisparameters.rowNum; i++)
		     //            {
		     //                    var left  = (this.bascisparameters.marginX+this.bascisparameters.recWidth)*i + this.bascisparameters.marginX;
		     //                    var right = (this.bascisparameters.marginX+this.bascisparameters.recWidth)*i + this.bascisparameters.recWidth + this.bascisparameters.marginX;

		     //                    rectanglevertices.push(right, high, this.bascisparameters.depth);
		     //                    rectanglevertices.push(left,  high, this.bascisparameters.depth);
		     //                    rectanglevertices.push(right,  low, this.bascisparameters.depth);

		     //                    rectanglevertices.push(left, high, this.bascisparameters.depth);
		     //                    rectanglevertices.push(right, low, this.bascisparameters.depth);
		     //                    rectanglevertices.push(left,  low, this.bascisparameters.depth);
		     //            }
		     //        }
		     //    }
		        
		        // if(Xindex !== undefined)
		        // {
		        // 	for(var i = 0; i < this.bascisparameters.colNum; i++)
		        // 	{
		        //             var left  = (this.bascisparameters.marginX+this.bascisparameters.recWidth)*Xindex + this.bascisparameters.marginX - this.bascisparameters.scalepercentage*this.bascisparameters.recWidth;
		        //             var right = (this.bascisparameters.marginX+this.bascisparameters.recWidth)*Xindex + this.bascisparameters.recWidth + this.bascisparameters.marginX + this.bascisparameters.scalepercentage*this.bascisparameters.recWidth;
		        //             var low   = (this.bascisparameters.marginY+this.bascisparameters.recHeight)*i + this.bascisparameters.marginY - this.bascisparameters.scalepercentage*this.bascisparameters.recWidth;
		        //             var high  = (this.bascisparameters.marginY+this.bascisparameters.recHeight)*i + this.bascisparameters.marginY + this.bascisparameters.recHeight + this.bascisparameters.scalepercentage*this.bascisparameters.recWidth;        	

		        //             rectangvertices[(Xindex+i*this.bascisparameters.rowNum)* 6 * 3]     = right; rectangle.glevertices[(Xindex+j*this.bascisparameters.rowNum)* 6 * 3 + 1] = high;
		        //             rectanglevertices[(Xindex+i*this.bascisparameters.rowNum)* 6 * 3 + 3] = left;  rectangle.glevertices[(Xindex+j*this.bascisparameters.rowNum)* 6 * 3 + 4] = high;
		        //             rectanglevertices[(Xindex+i*this.bascisparameters.rowNum)* 6 * 3 + 6] = right; rectangle.glevertices[(Xindex+j*this.bascisparameters.rowNum)* 6 * 3 + 7] = low;

		        //             rectanglevertices[(Xindex+i*this.bascisparameters.rowNum)* 6 * 3 + 9] = left;  rectangle.glevertices[(Xindex+j*this.bascisparameters.rowNum)* 6 * 3 + 10] = high;
		        //             rectanglevertices[(Xindex+i*this.bascisparameters.rowNum)* 6 * 3 + 12] = right;rectangle.glevertices[(Xindex+j*this.bascisparameters.rowNum)* 6 * 3 + 13] = low;
		        //             rectanglevertices[(Xindex+i*this.bascisparameters.rowNum)* 6 * 3 + 15] = left; rectangle.glevertices[(Xindex+j*this.bascisparameters.rowNum)* 6 * 3 + 16] = low; 
		        // 	}
		        	
		        // 	// line vertex and color
		        // 	frameLeft  = (this.bascisparameters.marginX+this.bascisparameters.recWidth)*Xindex + this.bascisparameters.marginX - this.bascisparameters.scalepercentage*this.bascisparameters.recWidth;
		        // 	frameRight = (this.bascisparameters.marginX+this.bascisparameters.recWidth)*Xindex + this.bascisparameters.recWidth + this.bascisparameters.marginX + this.bascisparameters.scalepercentage*this.bascisparameters.recWidth;
		        // 	frameLow   = (this.bascisparameters.marginY+this.bascisparameters.recHeight)*Yindex + this.bascisparameters.marginY - this.bascisparameters.scalepercentage*this.bascisparameters.recWidth;
		        //  	frameHigh  = (this.bascisparameters.marginY+this.bascisparameters.recHeight)*Yindex + this.bascisparameters.marginY + this.bascisparameters.recHeight + this.bascisparameters.scalepercentage*this.bascisparameters.recWidth; 
		        // }
		        
		        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(datas.vertexdata), this.gl.STATIC_DRAW);
		        this.vertexpositionandcolorbuffers.rectangleVertexPositionBuffer.itemSize = 3;
		        this.vertexpositionandcolorbuffers.rectangleVertexPositionBuffer.numItems = 6 * this.bascisparameters.rowNum * this.bascisparameters.colNum;
				
		        this.vertexpositionandcolorbuffers.rectangleVertexColorBuffer = this.gl.createBuffer();
		        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexpositionandcolorbuffers.rectangleVertexColorBuffer);

		        // for(var i = 0;i<this.bascisparameters.rowNum; i++)
		        // {           
		        //     for(var j = 0; j < this.bascisparameters.colNum; j++)
		        //     {
	         //            rectanglecolors.push(1.0, 1.0, 0.0, 1.0);
	         //            rectanglecolors.push(1.0, 1.0, 0.0, 1.0);
	         //            rectanglecolors.push(1.0, 1.0, 0.0, 1.0);

	         //            rectanglecolors.push(1.0, 1.0, 0.0, 1.0);
	         //            rectanglecolors.push(1.0, 1.0, 0.0, 1.0);
	         //            rectanglecolors.push(1.0, 1.0, 0.0, 1.0);
		        //     }
		        // }
		        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(datas.colordata), this.gl.STATIC_DRAW);
		        this.vertexpositionandcolorbuffers.rectangleVertexColorBuffer.itemSize = 4;
		        this.vertexpositionandcolorbuffers.rectangleVertexColorBuffer.numItems = 6 * this.bascisparameters.rowNum  * this.bascisparameters.colNum;
		    };

		    this.shaderparameter = {
		    	types:{vertex: 'VERTEX_SHADER', fragment: 'FRAGMENT_SHADER'},
		    	vertex:[
						        'attribute vec3 aVertexPosition;',
						        'attribute vec4 aVertexColor;',
						        '',
						        'uniform mat4 uMVMatrix;',
						        'uniform mat4 uPMatrix;',
						        'varying vec4 vColor;',
						        'void main(void) {',
						        '    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);',
						        '    vColor = aVertexColor;',
						        '}'
						       ].join('\n'),
		        fragment:[
					        'precision mediump float;',
					        'varying vec4 vColor;',
					        '',
					        'void main(void)',
					        '{',
					        '  gl_FragColor = vColor;',
					        '}'
					      ].join('\n')
		    };

		    this.createshaders=function(shaders) {
	        	var program, linked, error;
		        program = this.gl.createProgram();
		        // _.each(shaders, function(s) {
		        //   this.gl.attachShader(program, s);
		        // });

		        for(var i = 0; i <shaders.length ; i++)
		        {
		        	this.gl.attachShader(program, shaders[i])
		        }

		        this.gl.linkProgram(program);
		        linked = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
		        if (!linked) {
		          error = this.gl.getProgramInfoLog(program);
		          this.gl.deleteProgram(program);
		          throw ('unable to link program: ' + error);
		        }

		        return program;
		    };

		    this.getShader = function(source, type) {
		        var shader, compiled, error;
		        shader = this.gl.createShader(this.gl[type]);
		        this.gl.shaderSource(shader, source);
		        this.gl.compileShader(shader);

		        compiled = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
		        if (!compiled) {
		          error = this.gl.getShaderInfoLog(shader);
		          this.gl.deleteShader(shader);
		          throw ('unable to compile shader ' + shader + ': ' + error);
		        }

		        return shader;
		    };

    	    this.initShaders = function() 
		    {
		        //shader 0
		        var shaderProgram;
				vs = this.getShader(this.shaderparameter.vertex, this.shaderparameter.types.vertex);
				fs = this.getShader(this.shaderparameter.fragment, this.shaderparameter.types.fragment);

		        shaderProgram = this.createshaders([vs, fs]);

    			shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexPosition");
		        this.gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
		        shaderProgram.vertexColorAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexColor");
		        this.gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);
		        
		        shaderProgram.pMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uPMatrix");
		        shaderProgram.mvMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uMVMatrix");  

    			return shaderProgram;
		    };

		   this.shaderprogram = this.initShaders();

		   	this.setMatrixUniforms = function() 
			{
		        this.gl.uniformMatrix4fv(this.shaderprogram.pMatrixUniform, false, this.matrixs.pMatrix);
		        this.gl.uniformMatrix4fv(this.shaderprogram.mvMatrixUniform, false, this.matrixs.mvMatrix);
		    };

		   this.drawScene = function()
		   {
		   		var zPos = 0;

		        this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
		        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		      
				mat4.identity(this.matrixs.pMatrix);
		        mat4.ortho(0, this.gl.viewportWidth, 0, this.gl.viewportHeight, -10.0, 10.0, this.matrixs.pMatrix);
				mat4.identity(this.matrixs.mvMatrix);	
				this.matrixs.mvMatrix = mat4.lookAt([0,0,zPos], [0, 0, -100], [0, 1, 0]);//this is the same as glulookat in Opengl
				this.gl.useProgram(this.shaderprogram);//use shaderprograme
				
				//setup translate matrix
		        mat4.translate(this.matrixs.mvMatrix, [-1.5, 0.0, -7.0]);

				//draw rectangle.gle
		        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexpositionandcolorbuffers.rectangleVertexPositionBuffer);
		        this.gl.vertexAttribPointer(this.shaderprogram.vertexPositionAttribute, this.vertexpositionandcolorbuffers.rectangleVertexPositionBuffer.itemSize, this.gl.FLOAT, false, 0, 0);
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexpositionandcolorbuffers.rectangleVertexColorBuffer);
		        this.gl.vertexAttribPointer(this.shaderprogram.vertexColorAttribute, this.vertexpositionandcolorbuffers.rectangleVertexColorBuffer.itemSize, this.gl.FLOAT, false, 0, 0);
		        
		        this.setMatrixUniforms();

				this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertexpositionandcolorbuffers.rectangleVertexPositionBuffer.numItems);	
			};

			this.drawElements = function(datas)
			{
				this.gl.clearColor(0.7, 0.7, 0.7, 1.0);
        		this.gl.enable(gl.DEPTH_TEST);

        		this.initBuffers(datas);
        		this.drawScene();
			};

	    };