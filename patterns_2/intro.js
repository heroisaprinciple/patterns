class Employee {
    constructor() {
        let personal_info; //private field
        this.setPersonal_info = (value) => {
            if (value instanceof PersonalInfo) {
                personal_info = value;
            }
        };
        this.getPersonal_info = () => personal_info; //returning personal info
        this.assignments = [];
    }
    assign_possibility(assignment) {
        return true; //bool
    }
    get_assigments() {
        return this.assignments;
    }
    assign(assign) {
        /*project.engineers.push(project);
        let a = Assignment(project);
        this.assignments.push(a);*/
        this.assignments.push(assign);
        assign.developers.push(this);
    }
    unassign(assign) {
        let a = this.assignments.findIndex(assign);
        this.assignments.splice(a, 1);

        let d = assign.developers.findIndex(this);
        assign.developers.splice(d, 1);

    }
    calculate_taxes() { //should be abstract
        //there are no abstract methods in js, so I've decided to throw an error
        throw new Error("Abstract Method has no implementation");
    }
    calculate_salary() { //should be abstract
        throw new Error("Abstract Method has no implementation");
    }

}

class Engineer extends Employee {
    constructor() {
        super();
        // super(personal_info)
        /* this.id = id; //to PersonalInfo class
         this.name = name;
         this.address = address;
         this.phone = phone;
         this.email = email;
         this.position = position;
         this.rank = rank;
         this.salary = salary; */
    }
    //assign_possibility(assignment) {
    //    return true; //bool
    //}
    //get_assigments() {
    //    return this.assignments;
    //}
    //  assign(assign) {
    //project.engineers.push(project);
    // let a = Assignment(project);
    // this.assignments.push(a); //
    // this.assignments.push(assign);

    //  }
//    unassign(assign) {
    // let f = this.assignments.findIndex(assign);
    // this.assignments.splice(f, 1);
//    }
    /* get get_info() {
         return this.getPersonal_info();
     }
    
     }*/
    calculate_taxes() {
        return 12.3; //any float number
    }
    calculate_salary() {
        return null;
    }
    set_task(task) { //referring to the Task class
        this.task = task;
    }
}


class PersonalInfo {
    constructor(id, name, address, phone, email, position, rank, salary) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.position = position;
        this.rank = rank;
        this.salary = salary;
    }
}
let p_info = new PersonalInfo();

class Assignment {
    constructor(received_tasks = []) {
        this.received_tasks = received_tasks;
    }
    get_tasks_to_date(date) {
        return this.received_tasks.find(a => a[date]); //str
    }
    add_task(received_task) {
        this.received_tasks.push(task_obj.id); //this.received_tasks.push(task);
    }
}
/*let assignment = new Assignment();
assignment.get_tasks_to_date();*/

class Project {
    constructor(title, start_date, qa = null, assigments = []) {
        this.title = title;
        this.start_date = start_date;
        this.developers = [];
        this.qa = qa;
        this.assigments = assigments;

    }
    add_developer(developer) {
        // this.developers.push(developer);
        developer.assign(this);
    }
    remove_developer(developer) {
        // let index = this.developers.findIndex(developer);
        // this.developers.splice(index, 1);
        developer.unassign(this)
    }
//    add_tasks(tasks) {  //Association is the relationship between two or more objects.
    //Aggregation is a special case of an association. In the relationship between two objects,
    // one object can have a more major role than the other. In other words, when an object takes more ownership than another one, that is aggregation.
    //Two objects can live independently.
}

class Task {
    constructor(id, title, deadline, items, status, related_project) {
        this.id = id;
        this.title = title;
        this.deadline = deadline;
        this.items = [];
        this.status = status;
        this.related_project = related_project;
    }
    implement_item(item_name) {
        return item_name;
    }
    add_comment(comment) {
        return null;
    }
}
let task_obj = new Task();
/*let project = new Project();
project.add_developer();
project.remove_developer();*/

class QualityAssurance extends Employee {
    constructor(id, name, address, phone, email, position, rank, salary) {
        super();
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.position = position;
        this.rank = rank;
        this.salary = salary;
    }
    set_task(task) { //referring to the Task class
        return null;
    }
    add_ticket() {
        return null;
    }
}
/*let qa = new QualityAssurance();*/

class ProjectManager extends Employee {
    constructor(id, name, address, phone, email, salary, projects) {
        super();
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.salary = salary;
        this.projects = [];
    }
    add_project(project) {
        this.projects.push(project);
    }
    set_task(task) { //referring to the Task class
        return null;
    }
    discuss_progress(engineer) {
        return null;
    }

}
let pm = new ProjectManager(1, 'Jim', '221b Baker Street', '+78....', 'moriarty@gmail.com', 250);
pm.discuss_progress();
let qa = new QualityAssurance(1, 'John', '221b Baker Street', '+73...', 'watson@gmail.com', 120, 'doctor', 'qa');
let project = new Project('The Hound of the Baskervilles', '01.04.1902', qa);
pm.add_project(project);
let engineer = new Engineer();
let personal_info = new PersonalInfo(1, 'Sherlock', '221b Baker Street', '+75...', 'holmes@gmail.com', 'detective', 'engineer', 560);
engineer.setPersonal_info(personal_info);
// project.add_developer(engineer);
engineer.assign(project)
console.log(engineer.getPersonal_info()); 
let second_engineer = new Engineer(2, 'Irene', '...London', '+71...', 'adler@gmail.com', 'dominatrix', 'engineer', 900);
project.add_developer(second_engineer);
let task1 = new Task(1, 'Think', '24.05.2022', '', 'Done', 'Do');
let assignment = new Assignment();
assignment.add_task(task1);
project.assigments.push(assignment);
console.log(pm);
console.log(second_engineer);
// console.log(second_assignment);
console.log(second_engineer.get_assigments());
