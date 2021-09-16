var app = new Vue(
	{
		el : '#app',

		data : {
			toDoList : [
				{
					text: 'comprare nuove scarpe',
					done: false,
				},
				{
					text: 'Appendere mensole camera da letto',
					done: false,
				},
				{
					text: 'Comprare ingredienti per Carbonara',
					done: false,
				},
			],

			listItem : '',
			
		},

		methods: {

			addListItem : function(){
				

				let newObj = {
					text : this.listItem,
					done : false,
				}

				console.log(newObj);

				if(newObj.text.length>0){
					
					this.toDoList.push(newObj);
					

					
				}
				this.listItem = '';
				console.log(this.toDoList);
			},

			removeListItem : function (index){
				this.toDoList.splice(index,1);
				console.log(this.toDoList);

			},

			changeValue : function(index){
				
				if ( this.toDoList[index].done != true ){
					
					this.toDoList[index].done = true;
					
					
					
					
				} else{
					
					console.log('funziono')
					this.toDoList[index].done = false

				}
				

			},

			valueV : function(pippo)
			{
				console.log(pippo)
			}
		}
		

	}
);