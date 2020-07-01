import Appoitment from '../models/Appointment';

class AppointmentsRepository {
    private appoitments: Appoitment[];

    constructor() {
        this.appoitments = [];
    }

    public create(provider: string, date: Date): Appoitment {
        const appointment = new Appoitment(provider, date);
        this.appoitments.push(appointment);
        return appointment;
    }
}
export default AppointmentsRepository;
