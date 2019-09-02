class Ticket{
    Ticket = null;
    constructor(ticket){
        this.Ticket = ticket
    }

    changeTicket(tip, value){
            this.Ticket[tip] = value;
    }

    static getTicket(){
        return Ticket;
    }
}