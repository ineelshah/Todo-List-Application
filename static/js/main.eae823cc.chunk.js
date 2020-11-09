(this["webpackJsonpmern-todo"]=this["webpackJsonpmern-todo"]||[]).push([[0],{35:function(e,t,o){},59:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),i=o(29),r=o.n(i),l=(o(35),o(9)),c=o(1),s=(o(36),o(11)),d=o(12),m=o(4),p=o(14),h=o(13),u=o(8),b=o.n(u),g=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(e){var a;return Object(s.a)(this,o),(a=t.call(this,e)).onChangeTodoDescription=a.onChangeTodoDescription.bind(Object(m.a)(a)),a.onChangeTodoResponsible=a.onChangeTodoResponsible.bind(Object(m.a)(a)),a.onChangeTodoPriority=a.onChangeTodoPriority.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={todo_description:"",todo_responsible:"",todo_priority:"",todo_completed:!1},a}return Object(d.a)(o,[{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoResponsible",value:function(e){this.setState({todo_responsible:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("Todo Description: ".concat(this.state.todo_description)),console.log("Todo Responsible: ".concat(this.state.todo_responsible)),console.log("Todo Priority: ".concat(this.state.todo_priority)),console.log("Todo Completed: ".concat(this.state.todo_completed));var t={todo_description:this.state.todo_description,todo_responsible:this.state.todo_responsible,todo_priority:this.state.todo_priority,todo_completed:this.state.todo_completed};b.a.post("http://localhost:4000/todos/add",t).then((function(e){return console.log(e.data)})),this.setState({todo_description:"",todo_responsible:"",todo_priority:"",todo_completed:!1})}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:20}},n.a.createElement("h3",null,"Create New Todo"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Description: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Responsible: "),n.a.createElement("input",{type:"text",className:"form-control col-6",value:this.state.todo_responsible,onChange:this.onChangeTodoResponsible})),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Low")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Medium")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"High"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"Create Todo",className:"btn btn-primary"}))))}}]),o}(a.Component),v=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(e){var a;return Object(s.a)(this,o),(a=t.call(this,e)).onChangeTodoDescription=a.onChangeTodoDescription.bind(Object(m.a)(a)),a.onChangeTodoResponsible=a.onChangeTodoResponsible.bind(Object(m.a)(a)),a.onChangeTodoPriority=a.onChangeTodoPriority.bind(Object(m.a)(a)),a.onChangeTodoCompleted=a.onChangeTodoCompleted.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={todo_description:"",todo_responsible:"",todo_priority:"",todo_completed:!1},a}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:4000/todos/"+this.props.match.params.id).then((function(t){e.setState({todo_description:t.data.todo_description,todo_responsible:t.data.todo_responsible,todo_priority:t.data.todo_priority,todo_completed:t.data.todo_completed})})).catch((function(e){console.log(e)}))}},{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoResponsible",value:function(e){this.setState({todo_responsible:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onChangeTodoCompleted",value:function(e){this.setState({todo_completed:!this.state.todo_completed})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={todo_description:this.state.todo_description,todo_responsible:this.state.todo_responsible,todo_priority:this.state.todo_priority,todo_completed:this.state.todo_completed};b.a.post("http://localhost:4000/todos/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/")}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null," Update Todo "),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null," Description: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null," Responsible: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_responsible,onChange:this.onChangeTodoResponsible})),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Low")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Medium")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"High"))),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"completedCheckBox",name:"completedCheckBox",onChange:this.onChangeTodoCompleted,checked:this.state.todo_completed,value:this.state.todo_completed}),n.a.createElement("label",{className:"form-check-label",htmlFor:"completedCheckbox"}," Completed ")),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"Update Todo",className:"btn btn-primary"}))))}}]),o}(a.Component),E=function(e){return n.a.createElement("tr",null,n.a.createElement("td",{className:e.todo.todo_completed?"completed":""},e.todo.todo_description),n.a.createElement("td",{className:e.todo.todo_completed?"completed":""},e.todo.todo_responsible),n.a.createElement("td",{className:e.todo.todo_completed?"completed":""},e.todo.todo_priority),n.a.createElement("td",null,n.a.createElement(l.b,{to:"/edit/"+e.todo._id},"Edit")))},y=function(e){Object(p.a)(o,e);var t=Object(h.a)(o);function o(e){var a;return Object(s.a)(this,o),(a=t.call(this,e)).state={todos:[]},a}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:4000/todos/").then((function(t){e.setState({todos:t.data})})).catch((function(e){console.log(e)}))}},{key:"todoList",value:function(){return this.state.todos.map((function(e,t){return n.a.createElement(E,{todo:e,key:t})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null," Todos List "),n.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null," Description "),n.a.createElement("th",null," Reponsible "),n.a.createElement("th",null," Priority "),n.a.createElement("th",null," Actions "))),n.a.createElement("tbody",null,this.todoList())))}}]),o}(a.Component),f=o.p+"static/media/logo.103b5fa1.svg";var _=function(){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"MERN TODO APP"),n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand",href:"https://linkedin.com/in/ineelshah",target:"_"},n.a.createElement("img",{src:f,widht:"30",height:"30",alt:"my-todo-logo"})),n.a.createElement(l.b,{to:"/",className:"navbar-brand"},"MERN-Stack Todo App"),n.a.createElement("div",{className:"collapse navbar-collapse"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"navbar-item"},n.a.createElement(l.b,{to:"/",className:"nav-link"}," Todos ")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(l.b,{to:"/create",className:"nav-link"}," Create Todos "))))),n.a.createElement(c.a,{path:"/",exact:!0,component:y}),n.a.createElement(c.a,{path:"/edit/:id",component:v}),n.a.createElement(c.a,{path:"/create",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.eae823cc.chunk.js.map