			function arrayToTable(tableData,i) {
				var root=$('#output');
				var rowd=tableData[i];

				var table=$('<div class="card" ></div>');
				var head=$('<h4 class="card-title text-white"></h4>');
				head.append(tableData[i][7]);
				table.append(head);

				var row = $('<div class="card-body"></div>');
				$(rowd).each(function (j, cellData) {
						if(j!=7){
							row.append(tableData[0][j]+" : "+cellData +'<br />');
						} 
					});
				table.append(row);

				var foot=$('<div class="card-footer">Footer</div>');         
				table.append(foot);
				root.append(table);
				return root;
			}

			function display(){
				//alert("Triggered");
				$("#output div").remove(); 
				var search1=$('#oppinput').val();
				var search2=$('#stadinput').val();
				var search3=$('#runsinput').val();
				var search4=$('#dateinput').val();
				if((search1=="")&&(search2=="")&&(search3=="")&&(search4=="")){
					alert("Please select atleast one of the options");
				}
				else{
					$.ajax({
						type: "GET",
						url: "./sachin.csv",
						success: function (data) {
							var st=Papa.parse(data);
							st=st.data;
							if((search1!="")&&(search2!="")&&(search3!="")&&(search4!="")){
								var i;//5607
								for(i=1;i<464;i++){
									var test1 = st[i][5].substr(2);
									var test4=st[i][7].split(" ")[2];
									var trun=parseInt(st[i][0]);
										if(!isNaN(trun)){
											if((trun>=search3)&&(search1==test1)&&(search2==st[i][6])&&(search4==test4)){
											arrayToTable(st,i);
										}
									}
								}
							}
							else if((search1!="")&&(search2!="")&&(search3!="")){
								var i;//560
								for(i=1;i<464;i++){
									var test1 = st[i][5].substr(2);
									var trun=parseInt(st[i][0]);
									if(!isNaN(trun)){
											if((trun>=search3)&&(search1==test1)&&(search2==st[i][6])){
											arrayToTable(st,i);
										}
									}
								}
							}
							else if((search1!="")&&(search3!="")&&(search4!="")){
								var i;//507
								for(i=1;i<464;i++){
									var test1 = st[i][5].substr(2);
									var test4=st[i][7].split(" ")[2];
									var trun=parseInt(st[i][0]);
									if(!isNaN(trun)){
											if((trun>=search3)&&(search1==test1)&&(search4==test4)){
											arrayToTable(st,i);
										}
								}
							}
							}
							else if((search2!="")&&(search3!="")&&(search4!="")){
								var i;//607
								for(i=1;i<464;i++){
									var test4=st[i][7].split(" ")[2];
									var trun=parseInt(st[i][0]);
									if(!isNaN(trun)){
											if((trun>=search3)&&(search2==st[i][6])&&(search4==test4)){
											arrayToTable(st,i);
										}
								}
							}
							}
							else if((search2!="")&&(search1!="")&&(search4!="")){
								var i;//567
								for(i=1;i<464;i++){
									var test1 = st[i][5].substr(2);
									var test4=st[i][7].split(" ")[2];
									if((search1==test1)&&(search2==st[i][6])&&(search4==test4)){
											arrayToTable(st,i);
									}
							}
							}
							else if((search1!="")&&(search2!="")){
								var i;//56
								for(i=1;i<464;i++){
									var test1 = st[i][5].substr(2);
									if((search1==test1)&&(search2==st[i][6])){
											arrayToTable(st,i);
									}
								}
							}
							else if((search1!="")&&(search3!="")){
								var i;//50
								for(i=1;i<464;i++){
									var test1 = st[i][5].substr(2);
									var trun=parseInt(st[i][0]);
									if(!isNaN(trun)){
											if((trun>=search3)&&(search1==test1)){
											arrayToTable(st,i);
										}
								}
							}
							}
							else if((search1!="")&&(search4!="")){
								var i;//57
								for(i=1;i<464;i++){
									var test1 = st[i][5].substr(2);
									var test4=st[i][7].split(" ")[2];
									if((test4==search4)&&(search1==test1)){
											arrayToTable(st,i);
								}
							}
							}
							else if((search3!="")&&(search2!="")){
								var i;//60
								for(i=1;i<464;i++){
									var trun=parseInt(st[i][0]);
									if(!isNaN(trun)){
											if((trun>=search3)&&(search2==st[i][6])){
											arrayToTable(st,i);
										}
								}
							}
							}
							else if((search4!="")&&(search2!="")){
								var i;//67
								for(i=1;i<464;i++){
									var test4=st[i][7].split(" ")[2];
									if((search4==test4)&&(search2==st[i][6])){
										arrayToTable(st,i);
									}
								}
							}
							else if((search4!="")&&(search3!="")){
								var i;//07
								for(i=1;i<464;i++){
									var test4=st[i][7].split(" ")[2];
									var trun=parseInt(st[i][0]);
									if(!isNaN(trun)){
											if((trun>=search3)&&(search4==test4)){
											arrayToTable(st,i);
										}
								}
							}
							}
							else if((search1!="")){
								var i;//5
								for(i=1;i<464;i++){
									var test = st[i][5].substr(2);
									if(search1==test){
										arrayToTable(st,i);
									}
								}
							}
							else if((search2!="")){
								var i;//6
								for(i=1;i<464;i++){
									//alert(st[i][6]);
									if(search2==st[i][6]){
										//alert("Trigg");
										arrayToTable(st,i);
									}
								}
							}
							else if((search3!="")){
								var i;//0
								for(i=1;i<464;i++){
									var trun=parseInt(st[i][0]);
									if(!isNaN(trun)){
											if(trun>=search3){
											arrayToTable(st,i);
										}
								}
							}
							}
							else{
								var i;//7
								for(i=1;i<464;i++){
									var test4=st[i][7].split(" ")[2];
									if(search4==test4){
										arrayToTable(st,i);
									}
								}
							}
							
						}
					});
				}  
			}