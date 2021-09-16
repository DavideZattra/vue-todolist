var app = new Vue(
	{
		el : '#app',

		data : {
			toDoList : ['comprare nuove scarpe', 'Appendere mensole camera da letto', 'Comprare ingredienti per Carbonara'],

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

			}
		}
		

	}
);