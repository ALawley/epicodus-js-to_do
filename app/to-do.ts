class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

var tasks= [];
tasks.push(new Task("Do the dishes.", "Medium"));
tasks.push(new Task("Buy chocolate.", "High"));
tasks.push(new Task("Wash the laundry.", "Low"));
tasks[0].markDone();
console.log(tasks);
