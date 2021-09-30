class Engineer {
    constructor(id, name, address, phone, email, position, rank, salary) {
        //In Javascript, the constructor is a constructor function and is not preceded by the “function”
        // keyword. It takes an initialization parameter which it saves to a property attached to the this
        // keyword…
        /*The constructor method is a special method:

        It has to have the exact name "constructor"
        It is executed automatically when a new object is created
        It is used to initialize object properties
        If you do not define a constructor method, JavaScript will add an empty constructor method.*/
        /*Аргументы в конструкторе передаются методам как ссылка с this*/
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.position = position;
        this.rank = rank;
        this.salary = salary;
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
    }
    unassign(assign) {
        let f = this.assignments.findIndex(assign);
        this.assignments.splice(f, 1);
    }
}
/*let engineer = new Engineer(); //And you need to use the keyword new to create an instance of that class.
engineer.assign();
engineer.assigned_projects();
engineer.unassign();
engineer.assign_possibility();*/

class Assignment {
    constructor(tasks = []) {
        this.tasks = tasks;
    }
    get_tasks_to_date(date) {
        return this.tasks.find(a => a[date]); //str
    }
    add_task(task) {
        this.tasks.push(task);
    }
}
/*let assignment = new Assignment();
assignment.get_tasks_to_date();*/

class Project {
    constructor(title, start_date, qa = null) {
        this.title = title;
        this.start_date = start_date;
        this.developers = [];
        this.qa = qa;

    }
    add_developer(developer) {
        this.developers.push(developer);
    }
    remove_developer(developer) {
        let index = this.developers.findIndex(developer);
        this.developers.splice(index, 1);
    }
}
/*let project = new Project();
project.add_developer();
project.remove_developer();*/

class QualityAssurance {
    constructor(id, name, address, phone, email, salary, rank, position) {
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
/*let qa = new QualityAssurance();*/

class ProjectManager {
    constructor(id, name, address, phone, email, salary) {
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
    discuss_progress(developer) {
        return;
    }
}
let pm = new ProjectManager(1, 'Jim', '221b Baker Street', '+78....', 'moriarty@gmail.com', 250);
//pm.discuss_progress();
let qa = new QualityAssurance(1, 'John', '221b Baker Street', '+73...', 'watson@gmail.com', 120, 'doctor', 'qa');
let project = new Project('The Hound of the Baskervilles', '01.04.1902', qa);
pm.add_project(project);
let engineer = new Engineer(1, 'Sherlock', '221b Baker Street', '+75...', 'holmes@gmail.com', 'detective', 'engineer', 560);
project.add_developer(engineer);
let second_engineer = new Engineer(2, 'Irene', '...London', '+71...', 'adler@gmail.com', 'dominatrix', 'engineer', 900);
project.add_developer(second_engineer);
let assignment = new Assignment([{'16.09.1902' : 'Argue with TV'}]);
engineer.assign(assignment);
let second_assignment = new Assignment();
second_assignment.add_task({'17.09.1902' : 'Dominate'});
second_engineer.assign(second_assignment);
console.log(pm);
console.log(second_engineer);
console.log(second_assignment);
console.log(second_engineer.get_assigments()[0].get_tasks_to_date('17.09.1902'));