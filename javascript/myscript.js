var app = new Vue(
	{
		el : '#app',

		data : {
			toDoList : [
				{
					text : 'Comprare nuove scarpe',
					done : true,
				},
				{ 
					
					text : 'Appendere mensole camera da letto',
					done : false,
				},
				{ 
					text :  'Comprare ingredienti per Carbonara',
					done : false,
				},
				],

			listItem : '',

		},

		methods: {

			addListItem : function(){

				if(this.listItem.length>0){

					this.toDoList.push(this.listItem.trim());
					this.listItem = '';

				}
				console.log(this.toDoList);
			},

			removeListItem : function (index){
				this.toDoList.splice(index,1);
				console.log(this.toDoList);

			},

			taskDone : function(index){
				if(this.toDoList[index].done != true){
          			this.toDoList[index].done = true;
     			} else {
          			this.toDoList[index].done = false;
     			}
			}
		}
		

	}
);