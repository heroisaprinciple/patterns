class Employee { // 4 and 5 lab
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
        //TODO: Remove me in 2024 when I finish my education God bless me

        /* super(personal_info)
         this.id = id; //to PersonalInfo class
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
     set set_info(value) {
         //value = value instanceof PersonalInfo ? value :  null;
         if (value instanceof PersonalInfo) {
             this.setPersonal_info(value);
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
    /*get get_id(){ ////adding getters and setters (@dataclass is absent in js)
        return this.id;
    }
    set set_id(val) {
        return val;
    }*/
}
let p_info = new PersonalInfo();

class Assignment {
    developers = [];
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
//TODO: Remove me in 2024 when I finish my education God bless me
/*let assignment = new Assignment();
assignment.get_tasks_to_date();*/

// class Project {
//     constructor(title, start_date, qa = null, assigments = []) {
//         this.title = title;
//         this.start_date = start_date;
//         this.developers = [];
//         this.qa = qa;
//         this.assigments = assigments;
//
//     }
//     add_developer(developer) {
//         // this.developers.push(developer);
//         developer.assign(this);
//     }
//     remove_developer(developer) {
//         // let index = this.developers.findIndex(developer);
//         // this.developers.splice(index, 1);
//         developer.unassign(this)
//     }
//    add_tasks(tasks) {  //Association is the relationship between two or more objects.
//Aggregation is a special case of an association. In the relationship between two objects,
// one object can have a more major role than the other. In other words, when an object takes more ownership than another one, that is aggregation.
//Two objects can live independently.

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
// let project = new Project('The Hound of the Baskervilles', '01.04.1902', qa);
// pm.add_project(project);
let engineer = new Engineer();
let personal_info = new PersonalInfo(1, 'Sherlock', '221b Baker Street', '+75...', 'holmes@gmail.com', 'detective', 'engineer', 560);
engineer.setPersonal_info(personal_info);
// project.add_developer(engineer);
// engineer.assign(project)
console.log(engineer.getPersonal_info()); //error
let second_engineer = new Engineer(2, 'Irene', '...London', '+71...', 'adler@gmail.com', 'dominatrix', 'engineer', 900);
let third_engineer = new Engineer(3, 'Cassidy', '...New York', '+81...', 'cas@gmail.com', 'officer', 'engineer', 400);
// project.add_developer(second_engineer);
let task1 = new Task(1, 'Think', '24.05.2022', '', 'Done', 'Do');
let assignment = new Assignment();
assignment.add_task(task1);
// project.assigments.push(assignment);
console.log(pm);
console.log(second_engineer);
// console.log(second_assignment);
console.log(second_engineer.get_assigments());
console.log(third_engineer);


class Team {
    constructor(id, name, member_list = [], suplementary_materials = {}) {
        this.id = id;
        this.name = name;
        this.member_list = member_list; // here push members' id
        this.suplementary_materials = suplementary_materials; //{task_id [link1, link2...] }
        // this.project_id = project_id;
    }
}

//@abstract
class Project {
    team; //without let if var in class but not in constructor
    constructor(id) {
        this.id = id;
        if (this.constructor === Project) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    //@abstactmethods
    add_member(member) { //then adding to member_list
        throw new Error("Abstract methods can't be implemented");
    }
    remove_member(member) {
        throw new Error("Abstract methods can't be implemented");
    }
    send_suplementary_materials(task_id, material) {
        throw new Error("Abstract methods can't be implemented");
    }
    set_team(team) {
        this.team = team;
    }
}

class WebApp extends Project {
    constructor(id, webapp_name) { //id of project
        super(id);
        this.webapp_name = webapp_name;
    }
    add_member(member) { //then adding to member_list

    }
    remove_member(member) {
        throw new Error("Abstract methods can't be implemented");
    }
    send_suplementary_materials(task_id, material) {
        throw new Error("Abstract methods can't be implemented");
    }
}

class MobileApp extends Project {
    constructor(id, mobile_app_name, os) { //id of project
        super(id);
        this.mobile_appp_name = mobile_app_name;
        this.os = os; //operation system
    }
    add_member(member) { //then adding to member_list
        throw new Error("Abstract methods can't be implemented");
    }
    remove_member(member) {
        throw new Error("Abstract methods can't be implemented");
    }
    send_suplementary_materials(task_id, material) {
        throw new Error("Abstract methods can't be implemented");
    }
}

class ProjectFlow extends Project {
    constructor(id, movement) { //id of project
        super(id);
        this.movement = movement;
    }
    add_member(member) { //then adding to member_list
        throw new Error("Abstract methods can't be implemented");
    }
    remove_member(member) {
        throw new Error("Abstract methods can't be implemented");
    }
    send_suplementary_materials(task_id, material) {
        throw new Error("Abstract methods can't be implemented");
    }
}

// let pf = new ProjectFlow();
// console.log(pf);

//@abstract
class TopManagement extends Employee{
    projects = [];
    constructor() {
        super();
        if (this.constructor === TopManagement) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    fill_project(team_lead, team) {
        return null;
    }
    attach_project(project) {
        this.projects.push(project);
        return this.projects;
    }
}

class TeamLead {
    constructor(employee) {

    }
}

class ChiefTechnicalOfficer extends TopManagement {
    constructor() {
        super();
    }
    attach_project(id, movement) {
        return super.attach_project(new ProjectFlow(id, movement));
    }
}

class SolutionArchitect extends TopManagement{
    constructor() {
        super();
    }
    attach_project(web_id, webapp_name, mobile_id, mobile_app_name, os) {
        super.attach_project(new WebApp(web_id, webapp_name))
        return super.attach_project(new MobileApp(mobile_id, mobile_app_name, os));
    }
    create_deadlines() {
        return {};
    }
    assign_developers(developer) {
        super.developers.push(developer);
        return super.developers;
    }
    set_requirements() {
        return null;
    }
    set_name() {
        return;
    }

}

class Director {
    creating_project = []; //creating project step by step
    constructor() {
    }
    plan(smth) {
        return smth;
    }
    talk(smth) {
        return smth;
    }
    do(smth) {
        return smth;
    }
    display(director) {
        return `Pushed actions are: ${this.creating_project.push([director.plan()], [director.talk()], director.do())}`;
    }
}

class SeniorSolutionArchitect extends TopManagement {
    constructor() {
        super();
    }
    createProject(web_id, webapp_name) {
        // return super.createProject(director = new Director());
        return super.createProject(new WebApp(web_id, webapp_name));
    }
}

// 5
class CreditCard {
    constructor(client, acc_no, credit_limit, grace_period, cvv) {
        this.client = client;
        this.acc_no = acc_no;
        this.credit_limit = credit_limit;
        this.grace_period = grace_period;
        this._cvv = cvv; //private field
    }
    give_details(details) {
        return {};
    }
    encrypt() { //зашифровать
        return;
    }
    decrypt() {
        return;
    }
}

class BankInfo {
    constructor(bank_name, holder_name, accounts_number = [], credit_history) {
        this.bank_name = bank_name;
        this.holder_name = holder_name;
        this.accounts_number = accounts_number;
        this.credit_history = credit_history;
    }
    transaction_list(acc_no) {
        this.accounts_number.push(acc_no);
        return this.accounts_number;
    }
}

class BankCustomer {
    constructor(pers_info, b_info) {
        this.pers_info = pers_info;
        this.b_info = b_info;
    }
    pers_info = new PersonalInfo();
    b_info = new BankInfo();

    give_details(details) {
        return {
            transaction_list: b_info.transaction_list(),
            info: b_info
        };
    }
}

let credit_card = new CreditCard();
let bank_customer = new BankCustomer(credit_card);
let b_info = new BankInfo(bank_customer);
bank_customer.give_details();

class IndividualCustomer {
    constructor(id, name, address, phone, email, position, rank, salary) { //everything from pers_info
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.position = position;
        this.rank = rank;
        this.salary = salary;
    }
    introduction() {
        console.log(`Hi! I am ${this.name}, I am an Individual Customer!`);
    }
}

class CorporateCustomer {
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
    introduction() {
        console.log(`Hi! I am ${this.name}, I am a Corporate Customer!`);
    }
}

class VIPCustomer {
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
    introduction() {
        console.log(`Hi! I am ${this.name}, I am a VIP Customer!`);
    }
}

const krikOPomoshi = () => { //makes everything work
    let individual_customer = new IndividualCustomer(121, 'Cassidy', 'Newby st', '+63...', 'cn@gmail.com',
        'PM Manager', '', '10000');
    let corp_customer = new CorporateCustomer(178, 'Leo', 'Newby st', '+66...', 'leo@gmail.com',
        'CEO', '', '1000000');
    let vip_customer = new VIPCustomer(213, 'Anthony', 'Lincoln st', '+31...', 'anth@gmail.com',
        'Mayor', '', '100000');
    let bc = new BankCustomer();
    individual_customer.introduction();
    corp_customer.introduction();
    vip_customer.introduction();
};
krikOPomoshi();

let cto = new ChiefTechnicalOfficer();
cto.attach_project(1, 'move');
console.log("CTO:");
console.log(cto);

let sa = new SolutionArchitect();
console.log(sa.attach_project(2, 'kek', 3, 'lol', 'macos' ));
console.log("SA");
console.log(sa);

let team = new Team(1, 'Team First', [], {});
let team2 = new Team(2, 'Team Second', [], {});
let team3 = new Team(3, 'Team Third', [], {});
console.log(team.id);
cto.projects[0].set_team(team);
sa.projects[0].set_team(team2);
sa.projects[1].set_team(team3);

// director = new Director();
// console.log(director.plan('plan project'));
// console.log(director.talk('talk about project'));
// console.log(director.do('do it!'));


let ssa = new SeniorSolutionArchitect();
console.log(ssa.createProject());






